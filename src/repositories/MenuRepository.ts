//nameが商品名、priceが価格、categoryが主菜、副菜、丼・カレー
export type Dish = { name: string, price: number, category: string };

export interface Menu {
    dishList: Dish[];
    cachedAt: number;
    expiresAt: number;
}

export interface Meal {
    dishList: Dish[];
    totalPrice: number;
}

/**
 * メニューを取得するリポジトリクラス
 */
class MenuRepository {
    private static instance: MenuRepository | null = null;
    private readonly url: string = import.meta.env.VITE_API_URL;
    private readonly weekdayToUpdate: number = 1;
    private readonly hourToUpdate: number = 12;

    private constructor() {}
    static getInstance(): MenuRepository {
        if (!MenuRepository.instance) {
            MenuRepository.instance = new MenuRepository();
        }
        return MenuRepository.instance;
    }

    /**
     * メニューを取得する関数
     * ローカルストレージにキャッシュがあればそれを返し、なければAPIから取得する
     * @returns Promise<Menu>
     */
    getMenu(): Promise<Menu> {
        const now: Date = new Date();
        // ローカルストレージにキャッシュがあればそれを返す
        const cachedMenu = localStorage.getItem('menu');
        if (cachedMenu) {
            const menu: Menu = JSON.parse(cachedMenu);
            if (now.getTime() < menu.expiresAt) {
                return Promise.resolve(menu);
            }
        }
        // キャッシュがないか期限切れの場合はAPIから取得する
        return fetch(this.url)
            .then(response => {
                return response.json();
            })
            .then(json => this.jsonToDishList(json))
            .then(dishList => {
                // キャッシュが期限切れに成る日時を計算する
                const expiresAt: Date = new Date();
                if (now.getDay() === this.weekdayToUpdate) {
                    if (now.getHours() >= this.hourToUpdate) {
                        expiresAt.setDate(expiresAt.getDate() + 7);
                    }
                    expiresAt.setHours(this.hourToUpdate, 0, 0, 0);
                } else {
                    const daysUntilUpdate = now.getDate() + (this.weekdayToUpdate + 7 - now.getDay()) % 7;
                    expiresAt.setDate(daysUntilUpdate);
                    expiresAt.setHours(this.hourToUpdate, 0, 0, 0);
                }
                const menu: Menu = { dishList, cachedAt: now.getTime(), expiresAt: expiresAt.getTime()};
                localStorage.setItem('menu', JSON.stringify(menu));
                return menu;
            });
    }

    /**
     * ランダムなメニューを取得する関数
     * 予算に合わせてランダムなメニューを取得する
     * @param price 予算
     * @returns Promise<Meal>
     */
    getRandomMeal(price: number): Promise<Meal> {
        return this.getMenu()
            .then(menu => menu.dishList)
            .then(dishList => {
                const randomDishList = [];
                let priceSum = 0;
                for (let i = 0; i < 32; i++) {
                    const randomDish = dishList[Math.floor(Math.random() * dishList.length)];
                    if (priceSum + randomDish.price < price) {
                        randomDishList.push(randomDish);
                        priceSum += randomDish.price;
                    }
                }

                return { dishList: randomDishList, totalPrice: priceSum };
            });
    }

    private jsonToDishList(json: any): Dish[] {
        const dishList: Dish[] = []; 
        for (const category in json) {
            for (const name in json[category]) {
                const price = json[category][name];
                dishList.push({ name, price, category });
            }
        }
        return dishList;
    }
}
export default MenuRepository;



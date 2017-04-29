export class WebApi {
    private categories: Category[];
    public isBusy: boolean;

    constructor() {
        this.isBusy = false;
    }

    getCategories(refresh: boolean = false): Category[] {
        if (!this.categories || refresh) {
            this.categories = [
                {
                    accountId: 'bilbo',
                    dataPoints: [],
                    description: 'Beansprout Length',
                    id: 'a',
                    units: 'inches'
                },
                {
                    accountId: 'bilbo',
                    dataPoints: [],
                    description: 'Cornstalk Height',
                    id: 'b',
                    units: 'inches'
                },
                {
                    accountId: 'bilbo',
                    dataPoints: [],
                    description: 'Percipiation',
                    id: 'c',
                    units: 'inches'
                },
                {
                    accountId: 'bilbo',
                    dataPoints: [],
                    description: 'High Temperature',
                    id: 'd',
                    units: 'degrees F'
                },
            ];
        }
        return this.categories;
    }
}
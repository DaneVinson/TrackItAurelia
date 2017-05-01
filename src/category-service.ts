export class CategoryService {
    private categories: Category[];
    private categoryEntities: CategoryEntity[];
    public isBusy: boolean;

    constructor() {
        this.isBusy = false;
        this.refreshCategories();
    }

    getCategories(refresh: boolean = false): Category[] {
        if (!this.categories || refresh) {
            this.refreshCategories();
        }
        return this.categories;
    }

    private refreshCategories() {
        this.categories = this.callHttp();
        if (!this.categories) {
            this.categories = [];
        }
        this.categoryEntities = [];
        if (this.categories && this.categories.length > 0) {
            this.categories.forEach(c => {
                this.categoryEntities.push({
                    accountId: c.accountId,
                    dataPoints: c.dataPoints,
                    deleted: false,
                    description: c.description,
                    dirty: false,
                    id: c.id,
                    new: false,
                    units: c.units,
                    valid: true
                });
            });
        }
    }

    private callHttp(): Category[] {
        return [
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
}
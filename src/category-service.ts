export class CategoryService {
    private categories: Category[];
    private categoryEntities: CategoryEntity[];
    public isBusy: boolean;

    constructor() {
        this.isBusy = false;
        this.refreshCategories();
    }

    cancelCategoryChanges(id: string) {
        var category = this.getCategory(id);
        var categoryEntity = this.getCategoryEntity(id);
        if (category && categoryEntity) {
            categoryEntity.accountId = category.accountId;
            categoryEntity.dataPoints = [];
            categoryEntity.deleted = false;
            categoryEntity.description = category.description;
            categoryEntity.dirty = false;
            categoryEntity.id = category.id;
            categoryEntity.new = false;
            categoryEntity.units = category.units;
            categoryEntity.valid = true;
        }
    }

    getCategory(id: string): Category {
        if (!this.categories || this.categories.length == 0) {
            return null;
        }
        return this.categories.find(c => c.id == id);
    }

    getCategories(refresh: boolean = false): Category[] {
        if (!this.categories || refresh) {
            this.refreshCategories();
        }
        return this.categories;
    }

    getCategoryEntities(refresh: boolean = false): CategoryEntity[] {
        if (!this.categories || refresh) {
            this.refreshCategories();
        }
        return this.categoryEntities;
    }

    getCategoryEntity(id: string): CategoryEntity {
        if (!this.categories || this.categories.length == 0) {
            return null;
        }
        return this.categoryEntities.find(c => c.id == id);
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
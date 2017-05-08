export class CategoryService {
    private accountId: string;
    private categories: Category[];
    private categoryEntities: CategoryEntity[];
    public isBusy: boolean;
    private newCount: number;

    constructor() {
        this.accountId = 'dane';
        this.isBusy = false;
        this.newCount = 0;
        this.refreshCategories();
    }

    addNewCategory(): string {
        var count = this.newCount++;
        var newId = 'NewCategory' + count;
        var category: Category = {
            accountId: this.accountId,
            dataPoints: [],
            description: newId,
            id: newId,
            units: ''
        }
        this.categories.push(category);
        var entity = this.newEntityFromCategory(category);
        entity.description = '';
        entity.dirty = true;
        entity.new = true;
        entity.valid = false;
        entity.units = '';
        this.categoryEntities.push(entity);

        return category.id;
    }

    cancelCategoryChanges(id: string): void {
        var category = this.getCategory(id);
        var categoryEntity = this.getCategoryEntity(id);
        if (category && categoryEntity) {
            if (categoryEntity.new) {
                var index = this.categories.indexOf(category);
                this.categories.splice(index, 1);
                this.categoryEntities.splice(index, 1);
            }
            else {
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

    private newEntityFromCategory(category: Category): CategoryEntity {
        return {
            accountId: category.accountId,
            dataPoints: category.dataPoints,
            deleted: false,
            description: category.description,
            dirty: false,
            id: category.id,
            new: false,
            units: category.units,
            valid: true // assume the input category was valid
        };
    }

    private refreshCategories(): void {
        this.categories = this.callHttp();
        if (!this.categories) {
            this.categories = [];
        }
        this.categoryEntities = [];
        if (this.categories && this.categories.length > 0) {
            this.categories.forEach(c => {
                this.categoryEntities.push(this.newEntityFromCategory(c));
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
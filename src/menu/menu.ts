import { inject } from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import { CategoryService } from '../category-service';
import { CategoryChange } from '../shared/category-change';

@inject(CategoryService, EventAggregator)
export class Menu {
    public authenticated: boolean;
    public categories: Category[];
    public selectedCategory: Category;

    constructor(private categoryService: CategoryService, private eventAggregator: EventAggregator) {
        this.authenticated = true;
        this.categories = this.categoryService.getCategories();
        this.selectedCategory = null;
        this.eventAggregator.subscribe(CategoryChange, message => this.select(message.contact));
    }

    public select(category: Category) {
        this.selectedCategory = category;
    }
}
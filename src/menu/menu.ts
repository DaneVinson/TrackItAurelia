import { inject } from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import { WebApi } from '../web-api';
import { CategoryChange } from '../shared/category-change';

@inject(WebApi, EventAggregator)
export class Menu {
    public authenticated: boolean;
    public categories: Category[];
    public selectedCategory: Category;

    constructor(private webApi: WebApi, private eventAggregator: EventAggregator) {
        this.authenticated = true;
        this.categories = webApi.getCategories();
        this.selectedCategory = null;
        this.eventAggregator.subscribe(CategoryChange, message => this.select(message.contact));
    }

    public select(category: Category) {
        this.selectedCategory = category;
    }
}
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { CategoryChange } from '../../shared/category-change';
import { WebApi } from '../../web-api';

@inject(WebApi, EventAggregator)
export class CategoryDetail {
    public category: Category;
    public originalCategory: Category;
    public title: string;

    constructor(private webApi: WebApi, private eventAggregator: EventAggregator) {
    }
    
    activate(params, routeConfig) {
        var category = this.webApi.getCategories().find(c => c.id == params.id);
        if (category) {
            this.category = category;
            this.originalCategory = JSON.parse(JSON.stringify(this.category));
            this.title = this.category.description + '(' + this.category.units + ')';
        }
        else {
            this.category = null;
            this.originalCategory = null;
            this.title = "Select or Add a Category";
        }
        this.eventAggregator.publish(new CategoryChange(this.category));
    }
}
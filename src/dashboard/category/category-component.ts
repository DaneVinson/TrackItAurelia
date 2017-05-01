import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { CategoryChange } from '../../shared/category-change';
import { CategoryService } from '../../category-service';

@inject(CategoryService, EventAggregator)
export class CategoryComponent {
    public category: Category;
    public displayModes: string[];
    public originalCategory: Category;
    public selectedDisplayMode: string;
    public title: string;

    constructor(private categoryService: CategoryService, private eventAggregator: EventAggregator) {
        this.displayModes = [ 'Details', 'Data', 'Charting' ];
        this.setDisplay(this.displayModes[0]);
    }
    
    activate(params, routeConfig) {
        var category = this.categoryService.getCategories().find(c => c.id == params.id);
        if (category) {
            this.category = category;
            this.originalCategory = JSON.parse(JSON.stringify(this.category));
            this.title = this.category.description + ' (' + this.category.units + ')';
        }
        else {
            this.category = null;
            this.originalCategory = null;
            this.title = "Select or Add a Category";
        }
        this.eventAggregator.publish(new CategoryChange(this.category));
    }

    cancel() {
        this.category = JSON.parse(JSON.stringify(this.originalCategory));
    }

    changed() {
        console.log('changed');
    }

    delete() {

    }

    save() {

    }

    setDisplay(displayMode: string){
        var selected = this.displayModes.find(d => d == displayMode);
        if (selected){
            this.selectedDisplayMode = displayMode;
        }
        else {
            this.selectedDisplayMode = this.displayModes[0];
        }
    }
}
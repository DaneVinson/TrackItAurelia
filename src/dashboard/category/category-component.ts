import { BindingEngine, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { CategoryChange } from '../../shared/category-change';
import { CategoryService } from '../../category-service';

@inject(CategoryService, BindingEngine, EventAggregator)
export class CategoryComponent {
    public categoryEntity: CategoryEntity;
    public displayModes: string[];
    public selectedDisplayMode: string;
    public title: string;

    constructor(private categoryService: CategoryService, private bindingEngine: BindingEngine, private eventAggregator: EventAggregator) {
        this.displayModes = [ 'Details', 'Data', 'Charting' ];
        this.setDisplay(this.displayModes[0]);
    }
    
    activate(params, routeConfig) {
        var categoryEntity = this.categoryService.getCategoryEntity(params.id);
        if (categoryEntity) {
            this.categoryEntity = categoryEntity;
            var category = this.categoryService.getCategory(this.categoryEntity.id);
            this.title = category.description + ' (' + category.units + ')';
            
            this.bindingEngine
                .propertyObserver(this.categoryEntity, 'description')
                .subscribe(this.changedDescription);
            this.bindingEngine
                .propertyObserver(this.categoryEntity, 'units')
                .subscribe(this.changedUnits);
        }
        else {
            this.categoryEntity = null;
            this.title = "Select or Add a Category";
        }
        this.eventAggregator.publish(new CategoryChange(this.categoryEntity));
    }

    cancel() {
        this.categoryService.cancelCategoryChanges(this.categoryEntity.id);
    }

    changedDescription(newValue, oldValue) {
        console.log(this);
        console.log('old/new: ' + oldValue + ' / ' + newValue);
    }

    changedUnits(newValue, oldValue) {
        console.log('old/new: ' + oldValue + ' / ' + newValue);
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
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import { CategoryService } from '../category-service';
import { CategoryChange } from '../shared/category-change';

@inject(CategoryService, EventAggregator, Router)
export class Menu {
    public authenticated: boolean;
    public categories: Category[];
    public selectedCategory: Category;

    constructor(private categoryService: CategoryService, private eventAggregator: EventAggregator, private router: Router) {
        this.authenticated = true;
        this.categories = this.categoryService.getCategories();
        this.selectedCategory = null;
        this.eventAggregator.subscribe(CategoryChange, message => this.select(message.contact));
    }

    public deleteCategory(): void {
        console.log('delete');
    }

    public newCategory(): void {
        var id = this.categoryService.addNewCategory();
        this.router.navigate('dashboard/'+ id);
    }

    public refreshCategories(): void {
        this.categories = this.categoryService.getCategories(true);
        this.router.navigate('dashboard');
    }
    
    public select(category: Category) {
        this.selectedCategory = category;
    }
}
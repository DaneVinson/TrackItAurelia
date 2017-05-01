import { Router, RouterConfiguration } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { CategoryService } from './category-service';

@inject(CategoryService)
export class App {
  router: Router;

  constructor(private categoryService: CategoryService) {
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: '', moduleId: 'dashboard/about/about', name: 'about'},
      { route: 'about', moduleId: 'dashboard/about/about', name: 'about'},
      { route: 'contact', moduleId: 'dashboard/contact/contact', name: 'contact'},
      { route: 'dashboard', moduleId: 'dashboard/about/about', name: 'about'},
      { route: 'dashboard/:id', moduleId: 'dashboard/category/category-component', name:'dashboard' }
    ]);

    this.router = router;
  }
}
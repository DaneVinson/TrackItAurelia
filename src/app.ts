import { Router, RouterConfiguration } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { WebApi } from './web-api';

@inject(WebApi)
export class App {
  router: Router;

  constructor(private webApi: WebApi) {
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: '', moduleId: 'dashboard/about/about', name: 'about'},
      { route: 'about', moduleId: 'dashboard/about/about', name: 'about'},
      { route: 'contact', moduleId: 'dashboard/contact/contact', name: 'contact'},
      { route: 'dashboard', moduleId: 'dashboard/about/about', name: 'about'},
      { route: 'dashboard/:id', moduleId: 'dashboard/category/category-detail', name:'dashboard' }
    ]);

    this.router = router;
  }
}
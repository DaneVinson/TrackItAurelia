var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "./category-service"], function (require, exports, aurelia_framework_1, category_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(categoryService) {
            this.categoryService = categoryService;
        }
        App.prototype.configureRouter = function (config, router) {
            config.map([
                { route: '', moduleId: 'dashboard/about/about', name: 'about' },
                { route: 'about', moduleId: 'dashboard/about/about', name: 'about' },
                { route: 'contact', moduleId: 'dashboard/contact/contact', name: 'contact' },
                { route: 'dashboard', moduleId: 'dashboard/about/about', name: 'about' },
                { route: 'dashboard/:id', moduleId: 'dashboard/category/category-component', name: 'dashboard' }
            ]);
            this.router = router;
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.inject(category_service_1.CategoryService),
        __metadata("design:paramtypes", [category_service_1.CategoryService])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLEdBQUc7UUFHZCxhQUFvQixlQUFnQztZQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDcEQsQ0FBQztRQUVELDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3pELE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO2dCQUM5RCxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7Z0JBQ25FLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztnQkFDM0UsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO2dCQUN2RSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHVDQUF1QyxFQUFFLElBQUksRUFBQyxXQUFXLEVBQUU7YUFDaEcsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUNILFVBQUM7SUFBRCxDQWpCQSxBQWlCQyxJQUFBO0lBakJZLEdBQUc7UUFEZiwwQkFBTSxDQUFDLGtDQUFlLENBQUM7eUNBSWUsa0NBQWU7T0FIekMsR0FBRyxDQWlCZjtJQWpCWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBDYXRlZ29yeVNlcnZpY2UgfSBmcm9tICcuL2NhdGVnb3J5LXNlcnZpY2UnO1xuXG5AaW5qZWN0KENhdGVnb3J5U2VydmljZSlcbmV4cG9ydCBjbGFzcyBBcHAge1xuICByb3V0ZXI6IFJvdXRlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGVnb3J5U2VydmljZTogQ2F0ZWdvcnlTZXJ2aWNlKSB7XG4gIH1cblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogJycsIG1vZHVsZUlkOiAnZGFzaGJvYXJkL2Fib3V0L2Fib3V0JywgbmFtZTogJ2Fib3V0J30sXG4gICAgICB7IHJvdXRlOiAnYWJvdXQnLCBtb2R1bGVJZDogJ2Rhc2hib2FyZC9hYm91dC9hYm91dCcsIG5hbWU6ICdhYm91dCd9LFxuICAgICAgeyByb3V0ZTogJ2NvbnRhY3QnLCBtb2R1bGVJZDogJ2Rhc2hib2FyZC9jb250YWN0L2NvbnRhY3QnLCBuYW1lOiAnY29udGFjdCd9LFxuICAgICAgeyByb3V0ZTogJ2Rhc2hib2FyZCcsIG1vZHVsZUlkOiAnZGFzaGJvYXJkL2Fib3V0L2Fib3V0JywgbmFtZTogJ2Fib3V0J30sXG4gICAgICB7IHJvdXRlOiAnZGFzaGJvYXJkLzppZCcsIG1vZHVsZUlkOiAnZGFzaGJvYXJkL2NhdGVnb3J5L2NhdGVnb3J5LWNvbXBvbmVudCcsIG5hbWU6J2Rhc2hib2FyZCcgfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('category-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CategoryService = (function () {
        function CategoryService() {
            this.isBusy = false;
            this.refreshCategories();
        }
        CategoryService.prototype.getCategories = function (refresh) {
            if (refresh === void 0) { refresh = false; }
            if (!this.categories || refresh) {
                this.refreshCategories();
            }
            return this.categories;
        };
        CategoryService.prototype.refreshCategories = function () {
            var _this = this;
            this.categories = this.callHttp();
            if (!this.categories) {
                this.categories = [];
            }
            this.categoryEntities = [];
            if (this.categories && this.categories.length > 0) {
                this.categories.forEach(function (c) {
                    _this.categoryEntities.push({
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
        };
        CategoryService.prototype.callHttp = function () {
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
        };
        return CategoryService;
    }());
    exports.CategoryService = CategoryService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFLSTtZQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFFRCx1Q0FBYSxHQUFiLFVBQWMsT0FBd0I7WUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtZQUNsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDN0IsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7UUFFTywyQ0FBaUIsR0FBekI7WUFBQSxpQkFxQkM7WUFwQkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDekIsQ0FBQztZQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7d0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUzt3QkFDdEIsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVO3dCQUN4QixPQUFPLEVBQUUsS0FBSzt3QkFDZCxXQUFXLEVBQUUsQ0FBQyxDQUFDLFdBQVc7d0JBQzFCLEtBQUssRUFBRSxLQUFLO3dCQUNaLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTt3QkFDUixHQUFHLEVBQUUsS0FBSzt3QkFDVixLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUs7d0JBQ2QsS0FBSyxFQUFFLElBQUk7cUJBQ2QsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUM7UUFFTyxrQ0FBUSxHQUFoQjtZQUNJLE1BQU0sQ0FBQztnQkFDSDtvQkFDSSxTQUFTLEVBQUUsT0FBTztvQkFDbEIsVUFBVSxFQUFFLEVBQUU7b0JBQ2QsV0FBVyxFQUFFLG1CQUFtQjtvQkFDaEMsRUFBRSxFQUFFLEdBQUc7b0JBQ1AsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2dCQUNEO29CQUNJLFNBQVMsRUFBRSxPQUFPO29CQUNsQixVQUFVLEVBQUUsRUFBRTtvQkFDZCxXQUFXLEVBQUUsa0JBQWtCO29CQUMvQixFQUFFLEVBQUUsR0FBRztvQkFDUCxLQUFLLEVBQUUsUUFBUTtpQkFDbEI7Z0JBQ0Q7b0JBQ0ksU0FBUyxFQUFFLE9BQU87b0JBQ2xCLFVBQVUsRUFBRSxFQUFFO29CQUNkLFdBQVcsRUFBRSxjQUFjO29CQUMzQixFQUFFLEVBQUUsR0FBRztvQkFDUCxLQUFLLEVBQUUsUUFBUTtpQkFDbEI7Z0JBQ0Q7b0JBQ0ksU0FBUyxFQUFFLE9BQU87b0JBQ2xCLFVBQVUsRUFBRSxFQUFFO29CQUNkLFdBQVcsRUFBRSxrQkFBa0I7b0JBQy9CLEVBQUUsRUFBRSxHQUFHO29CQUNQLEtBQUssRUFBRSxXQUFXO2lCQUNyQjthQUNKLENBQUM7UUFDTixDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQXhFQSxBQXdFQyxJQUFBO0lBeEVZLDBDQUFlIiwiZmlsZSI6ImNhdGVnb3J5LXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2F0ZWdvcnlTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuICAgIHByaXZhdGUgY2F0ZWdvcnlFbnRpdGllczogQ2F0ZWdvcnlFbnRpdHlbXTtcclxuICAgIHB1YmxpYyBpc0J1c3k6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hDYXRlZ29yaWVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2F0ZWdvcmllcyhyZWZyZXNoOiBib29sZWFuID0gZmFsc2UpOiBDYXRlZ29yeVtdIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcmllcyB8fCByZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaENhdGVnb3JpZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hDYXRlZ29yaWVzKCkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHRoaXMuY2FsbEh0dHAoKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeUVudGl0aWVzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcmllcyAmJiB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlFbnRpdGllcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGMuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQb2ludHM6IGMuZGF0YVBvaW50cyxcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBkaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB1bml0czogYy51bml0cyxcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGxIdHRwKCk6IENhdGVnb3J5W10ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJZDogJ2JpbGJvJyxcclxuICAgICAgICAgICAgICAgIGRhdGFQb2ludHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCZWFuc3Byb3V0IExlbmd0aCcsXHJcbiAgICAgICAgICAgICAgICBpZDogJ2EnLFxyXG4gICAgICAgICAgICAgICAgdW5pdHM6ICdpbmNoZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJZDogJ2JpbGJvJyxcclxuICAgICAgICAgICAgICAgIGRhdGFQb2ludHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDb3Juc3RhbGsgSGVpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGlkOiAnYicsXHJcbiAgICAgICAgICAgICAgICB1bml0czogJ2luY2hlcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWNjb3VudElkOiAnYmlsYm8nLFxyXG4gICAgICAgICAgICAgICAgZGF0YVBvaW50czogW10sXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BlcmNpcGlhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpZDogJ2MnLFxyXG4gICAgICAgICAgICAgICAgdW5pdHM6ICdpbmNoZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJZDogJ2JpbGJvJyxcclxuICAgICAgICAgICAgICAgIGRhdGFQb2ludHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIaWdoIFRlbXBlcmF0dXJlJyxcclxuICAgICAgICAgICAgICAgIGlkOiAnZCcsXHJcbiAgICAgICAgICAgICAgICB1bml0czogJ2RlZ3JlZXMgRidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('menu/menu',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../category-service", "../shared/category-change"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, category_service_1, category_change_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Menu = (function () {
        function Menu(categoryService, eventAggregator) {
            var _this = this;
            this.categoryService = categoryService;
            this.eventAggregator = eventAggregator;
            this.authenticated = true;
            this.categories = this.categoryService.getCategories();
            this.selectedCategory = null;
            this.eventAggregator.subscribe(category_change_1.CategoryChange, function (message) { return _this.select(message.contact); });
        }
        Menu.prototype.select = function (category) {
            this.selectedCategory = category;
        };
        return Menu;
    }());
    Menu = __decorate([
        aurelia_framework_1.inject(category_service_1.CategoryService, aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [category_service_1.CategoryService, aurelia_event_aggregator_1.EventAggregator])
    ], Menu);
    exports.Menu = Menu;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLElBQUk7UUFLYixjQUFvQixlQUFnQyxFQUFVLGVBQWdDO1lBQTlGLGlCQUtDO1lBTG1CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUMxRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQ0FBYyxFQUFFLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUM1RixDQUFDO1FBRU0scUJBQU0sR0FBYixVQUFjLFFBQWtCO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFDckMsQ0FBQztRQUNMLFdBQUM7SUFBRCxDQWZBLEFBZUMsSUFBQTtJQWZZLElBQUk7UUFEaEIsMEJBQU0sQ0FBQyxrQ0FBZSxFQUFFLDBDQUFlLENBQUM7eUNBTUEsa0NBQWUsRUFBMkIsMENBQWU7T0FMckYsSUFBSSxDQWVoQjtJQWZZLG9CQUFJIiwiZmlsZSI6Im1lbnUvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCB7IENhdGVnb3J5U2VydmljZSB9IGZyb20gJy4uL2NhdGVnb3J5LXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeUNoYW5nZSB9IGZyb20gJy4uL3NoYXJlZC9jYXRlZ29yeS1jaGFuZ2UnO1xyXG5cclxuQGluamVjdChDYXRlZ29yeVNlcnZpY2UsIEV2ZW50QWdncmVnYXRvcilcclxuZXhwb3J0IGNsYXNzIE1lbnUge1xyXG4gICAgcHVibGljIGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZENhdGVnb3J5OiBDYXRlZ29yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGVnb3J5U2VydmljZTogQ2F0ZWdvcnlTZXJ2aWNlLCBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3J5U2VydmljZS5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoQ2F0ZWdvcnlDaGFuZ2UsIG1lc3NhZ2UgPT4gdGhpcy5zZWxlY3QobWVzc2FnZS5jb250YWN0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdChjYXRlZ29yeTogQ2F0ZWdvcnkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('shared/category-change',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CategoryChange = (function () {
        function CategoryChange(category) {
            this.category = category;
        }
        return CategoryChange;
    }());
    exports.CategoryChange = CategoryChange;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9jYXRlZ29yeS1jaGFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFDRSx3QkFBbUIsUUFBa0I7WUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFJLENBQUM7UUFDNUMscUJBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLHdDQUFjIiwiZmlsZSI6InNoYXJlZC9jYXRlZ29yeS1jaGFuZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2F0ZWdvcnlDaGFuZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjYXRlZ29yeTogQ2F0ZWdvcnkpIHsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQvQ2F0ZWdvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiJzcmMifQ==

define("shared/Category", [],function(){});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQvQ2F0ZWdvcnlFbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiJzcmMifQ==

define("shared/CategoryEntity", [],function(){});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQvZGF0YVBvaW50LmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290Ijoic3JjIn0=

define("shared/dataPoint", [],function(){});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('dashboard/about/about',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var About = (function () {
        function About() {
            this.title = 'About Trackit Aurelia';
        }
        return About;
    }());
    exports.About = About;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9hYm91dC9hYm91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQ0ksVUFBSyxHQUFXLHVCQUF1QixDQUFDO1FBQzVDLENBQUM7UUFBRCxZQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSxzQkFBSyIsImZpbGUiOiJkYXNoYm9hcmQvYWJvdXQvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWJvdXQge1xyXG4gICAgdGl0bGU6IHN0cmluZyA9ICdBYm91dCBUcmFja2l0IEF1cmVsaWEnO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('dashboard/category/category-charting',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CategoryCharting = (function () {
        function CategoryCharting() {
        }
        return CategoryCharting;
    }());
    exports.CategoryCharting = CategoryCharting;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jYXRlZ29yeS9jYXRlZ29yeS1jaGFydGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBQ0EsQ0FBQztRQUFELHVCQUFDO0lBQUQsQ0FEQSxBQUNDLElBQUE7SUFEWSw0Q0FBZ0IiLCJmaWxlIjoiZGFzaGJvYXJkL2NhdGVnb3J5L2NhdGVnb3J5LWNoYXJ0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhdGVnb3J5Q2hhcnRpbmcge1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('dashboard/category/category-component',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../../shared/category-change", "../../category-service"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, category_change_1, category_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CategoryComponent = (function () {
        function CategoryComponent(categoryService, eventAggregator) {
            this.categoryService = categoryService;
            this.eventAggregator = eventAggregator;
            this.displayModes = ['Details', 'Data', 'Charting'];
            this.setDisplay(this.displayModes[0]);
        }
        CategoryComponent.prototype.activate = function (params, routeConfig) {
            var category = this.categoryService.getCategories().find(function (c) { return c.id == params.id; });
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
            this.eventAggregator.publish(new category_change_1.CategoryChange(this.category));
        };
        CategoryComponent.prototype.cancel = function () {
            this.category = JSON.parse(JSON.stringify(this.originalCategory));
        };
        CategoryComponent.prototype.changed = function () {
            console.log('changed');
        };
        CategoryComponent.prototype.delete = function () {
        };
        CategoryComponent.prototype.save = function () {
        };
        CategoryComponent.prototype.setDisplay = function (displayMode) {
            var selected = this.displayModes.find(function (d) { return d == displayMode; });
            if (selected) {
                this.selectedDisplayMode = displayMode;
            }
            else {
                this.selectedDisplayMode = this.displayModes[0];
            }
        };
        return CategoryComponent;
    }());
    CategoryComponent = __decorate([
        aurelia_framework_1.inject(category_service_1.CategoryService, aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [category_service_1.CategoryService, aurelia_event_aggregator_1.EventAggregator])
    ], CategoryComponent);
    exports.CategoryComponent = CategoryComponent;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jYXRlZ29yeS9jYXRlZ29yeS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBTUEsSUFBYSxpQkFBaUI7UUFPMUIsMkJBQW9CLGVBQWdDLEVBQVUsZUFBZ0M7WUFBMUUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQzFGLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCxvQ0FBUSxHQUFSLFVBQVMsTUFBTSxFQUFFLFdBQVc7WUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztZQUNqRixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDOUUsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLDBCQUEwQixDQUFDO1lBQzVDLENBQUM7WUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGdDQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUVELGtDQUFNLEdBQU47WUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFFRCxtQ0FBTyxHQUFQO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBRUQsa0NBQU0sR0FBTjtRQUVBLENBQUM7UUFFRCxnQ0FBSSxHQUFKO1FBRUEsQ0FBQztRQUVELHNDQUFVLEdBQVYsVUFBVyxXQUFtQjtZQUMxQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxXQUFXLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQUM3RCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUNWLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUM7WUFDM0MsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUM7UUFDTCxDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQXBEQSxBQW9EQyxJQUFBO0lBcERZLGlCQUFpQjtRQUQ3QiwwQkFBTSxDQUFDLGtDQUFlLEVBQUUsMENBQWUsQ0FBQzt5Q0FRQSxrQ0FBZSxFQUEyQiwwQ0FBZTtPQVByRixpQkFBaUIsQ0FvRDdCO0lBcERZLDhDQUFpQiIsImZpbGUiOiJkYXNoYm9hcmQvY2F0ZWdvcnkvY2F0ZWdvcnktY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBDYXRlZ29yeUNoYW5nZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jYXRlZ29yeS1jaGFuZ2UnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXRlZ29yeS1zZXJ2aWNlJztcclxuXHJcbkBpbmplY3QoQ2F0ZWdvcnlTZXJ2aWNlLCBFdmVudEFnZ3JlZ2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgY2F0ZWdvcnk6IENhdGVnb3J5O1xyXG4gICAgcHVibGljIGRpc3BsYXlNb2Rlczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgb3JpZ2luYWxDYXRlZ29yeTogQ2F0ZWdvcnk7XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWREaXNwbGF5TW9kZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXRlZ29yeVNlcnZpY2U6IENhdGVnb3J5U2VydmljZSwgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheU1vZGVzID0gWyAnRGV0YWlscycsICdEYXRhJywgJ0NoYXJ0aW5nJyBdO1xyXG4gICAgICAgIHRoaXMuc2V0RGlzcGxheSh0aGlzLmRpc3BsYXlNb2Rlc1swXSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFjdGl2YXRlKHBhcmFtcywgcm91dGVDb25maWcpIHtcclxuICAgICAgICB2YXIgY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3J5U2VydmljZS5nZXRDYXRlZ29yaWVzKCkuZmluZChjID0+IGMuaWQgPT0gcGFyYW1zLmlkKTtcclxuICAgICAgICBpZiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY2F0ZWdvcnkpKTtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuY2F0ZWdvcnkuZGVzY3JpcHRpb24gKyAnICgnICsgdGhpcy5jYXRlZ29yeS51bml0cyArICcpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gXCJTZWxlY3Qgb3IgQWRkIGEgQ2F0ZWdvcnlcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgQ2F0ZWdvcnlDaGFuZ2UodGhpcy5jYXRlZ29yeSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkpKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNwbGF5KGRpc3BsYXlNb2RlOiBzdHJpbmcpe1xyXG4gICAgICAgIHZhciBzZWxlY3RlZCA9IHRoaXMuZGlzcGxheU1vZGVzLmZpbmQoZCA9PiBkID09IGRpc3BsYXlNb2RlKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGlzcGxheU1vZGUgPSBkaXNwbGF5TW9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREaXNwbGF5TW9kZSA9IHRoaXMuZGlzcGxheU1vZGVzWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('dashboard/category/category-data',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CategoryData = (function () {
        function CategoryData() {
        }
        return CategoryData;
    }());
    exports.CategoryData = CategoryData;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jYXRlZ29yeS9jYXRlZ29yeS1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFDQSxDQUFDO1FBQUQsbUJBQUM7SUFBRCxDQURBLEFBQ0MsSUFBQTtJQURZLG9DQUFZIiwiZmlsZSI6ImRhc2hib2FyZC9jYXRlZ29yeS9jYXRlZ29yeS1kYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhdGVnb3J5RGF0YSB7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('dashboard/category/category-details',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CategoryDetails = (function () {
        function CategoryDetails() {
        }
        return CategoryDetails;
    }());
    exports.CategoryDetails = CategoryDetails;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jYXRlZ29yeS9jYXRlZ29yeS1kZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFDQSxDQUFDO1FBQUQsc0JBQUM7SUFBRCxDQURBLEFBQ0MsSUFBQTtJQURZLDBDQUFlIiwiZmlsZSI6ImRhc2hib2FyZC9jYXRlZ29yeS9jYXRlZ29yeS1kZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhdGVnb3J5RGV0YWlscyB7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('dashboard/contact/contact',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Contact = (function () {
        function Contact() {
            this.title = 'Contact Dane';
        }
        return Contact;
    }());
    exports.Contact = Contact;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jb250YWN0L2NvbnRhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtZQUNJLFVBQUssR0FBVyxjQUFjLENBQUM7UUFDbkMsQ0FBQztRQUFELGNBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLDBCQUFPIiwiZmlsZSI6ImRhc2hib2FyZC9jb250YWN0L2NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29udGFjdCB7XHJcbiAgICB0aXRsZTogc3RyaW5nID0gJ0NvbnRhY3QgRGFuZSc7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.css', ['module'], function(module) { module.exports = ".pure-button-success,\r\n.pure-button-error,\r\n.pure-button-warning,\r\n.pure-button-secondary {\r\n\tcolor: white;\r\n\tborder-radius: 4px;\r\n\ttext-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.pure-button-success {\r\n\tbackground: rgb(28, 184, 65); /* this is a green */\r\n}\r\n\r\n.pure-button-error {\r\n\tbackground: rgb(202, 60, 60); /* this is a maroon */\r\n}\r\n\r\n.pure-button-warning {\r\n\tbackground: rgb(223, 117, 20); /* this is an orange */\r\n}\r\n\r\n.pure-button-secondary {\r\n\tbackground: rgb(66, 184, 221); /* this is a light blue */\r\n}"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"purecss/build/pure-min.css\"></require><require from=\"purecss/build/grids-responsive-min.css\"></require><require from=\"./app.css\"></require><require from=\"./side-menu.css\"></require><require from=\"./menu/menu\"></require><require from=\"./dashboard/about/about\"></require><require from=\"./dashboard/contact/contact\"></require><require from=\"./dashboard/about/about\"></require><div id=\"layout\"><a href=\"#menu\" id=\"menuLink\" class=\"menu-link\"><span></span></a><div id=\"menu\"><menu style=\"margin:0 0 0 -40px\"></menu></div><div id=\"main\"><router-view></router-view></div></div></template>"; });
define('text!menu/menu.html', ['module'], function(module) { module.exports = "<template><div class=\"pure-menu\"><a class=\"pure-menu-heading\" href=\"#\">TrackIt</a><ul class=\"pure-menu-list\"><li if.bind=\"!authenticated\" class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\"><i class=\"fa fa-lg fa-sign-in\"></i>&nbsp;&nbsp;Sign In</a></li><li if.bind=\"authenticated\" class=\"pure-menu-item\"><button class=\"pure-button\"><i class=\"fa fa-lg fa-refresh\"></i></button> <button class=\"pure-button pure-button-success\"><i class=\"fa fa-lg fa-plus\"></i></button> <button class=\"pure-button pure-button-error\"><i class=\"fa fa-lg fa-remove\"></i></button></li><li if.bind=\"authenticated\" class=\"pure-menu-item\" repeat.for=\"category of categories\"><a class=\"pure-menu-link\" route-href=\"route: dashboard; params.bind: {id:category.id}\">${category.description}</a></li><li class=\"pure-menu-item menu-item-divided\"><a href=\"#/about\" class=\"pure-menu-link\"><i class=\"fa fa-lg fa-question-circle\"></i>&nbsp;&nbsp;About</a></li><li class=\"pure-menu-item\"><a href=\"#/contact\" class=\"pure-menu-link\"><i class=\"fa fa-lg fa-envelope\"></i>&nbsp;&nbsp;Contact</a></li><li if.bind=\"authenticated\" class=\"pure-menu-item menu-item-divided\"><a href=\"#\" class=\"pure-menu-link\"><i class=\"fa fa-lg fa-sign-out\"></i>&nbsp;&nbsp;Sign Bilbo Out</a></li></ul></div></template>"; });
define('text!side-menu.css', ['module'], function(module) { module.exports = "body {\n    color: #777;\n}\n\n.pure-img-responsive {\n    max-width: 100%;\n    height: auto;\n}\n\n/*\nAdd transition to containers so they can push in and out.\n*/\n#layout,\n#menu,\n.menu-link {\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -ms-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n\n/*\nThis is the parent `<div>` that contains the menu and the content area.\n*/\n#layout {\n    position: relative;\n    left: 0;\n    padding-left: 0;\n}\n    #layout.active #menu {\n        left: 220px;\n        width: 220px;\n    }\n\n    #layout.active .menu-link {\n        left: 220px;\n    }\n/*\nThe content `<div>` is where all your content goes.\n*/\n.content {\n    margin: 0 auto;\n    padding: 0 2em;\n    max-width: 800px;\n    margin-bottom: 50px;\n    line-height: 1.6em;\n}\n\n.header {\n     margin: 0;\n     color: #333;\n     text-align: center;\n     padding: 2.5em 2em 0;\n     border-bottom: 1px solid #eee;\n }\n    .header h1 {\n        margin: 0.2em 0;\n        font-size: 3em;\n        font-weight: 300;\n    }\n     .header h2 {\n        font-weight: 300;\n        color: #ccc;\n        padding: 0;\n        margin-top: 0;\n    }\n\n.content-subhead {\n    margin: 50px 0 20px 0;\n    font-weight: 300;\n    color: #888;\n}\n\n\n\n/*\nThe `#menu` `<div>` is the parent `<div>` that contains the `.pure-menu` that\nappears on the left side of the page.\n*/\n\n#menu {\n    margin-left: -220px; /* \"#menu\" width */\n    width: 220px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 1000; /* so the menu or its navicon stays above all content */\n    background: #191818;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n}\n    /*\n    All anchors inside the menu should be styled like this.\n    */\n    #menu a {\n        color: #999;\n        border: none;\n        padding: 0.6em 0 0.6em 0.6em;\n    }\n\n    /*\n    Remove all background/borders, since we are applying them to #menu.\n    */\n     #menu .pure-menu,\n     #menu .pure-menu ul {\n        border: none;\n        background: transparent;\n    }\n\n    /*\n    Add that light border to separate items into groups.\n    */\n    #menu .pure-menu ul,\n    #menu .pure-menu .menu-item-divided {\n        border-top: 1px solid #333;\n    }\n        /*\n        Change color of the anchor links on hover/focus.\n        */\n        #menu .pure-menu li a:hover,\n        #menu .pure-menu li a:focus {\n            background: #333;\n        }\n\n    /*\n    This styles the selected menu item `<li>`.\n    */\n    #menu .pure-menu-selected,\n    #menu .pure-menu-heading {\n        background: #1f8dd6;\n    }\n        /*\n        This styles a link within a selected menu item `<li>`.\n        */\n        #menu .pure-menu-selected a {\n            color: #fff;\n        }\n\n    /*\n    This styles the menu heading.\n    */\n    #menu .pure-menu-heading {\n        font-size: 110%;\n        color: #fff;\n        margin: 0;\n    }\n\n/* -- Dynamic Button For Responsive Menu -------------------------------------*/\n\n/*\nThe button to open/close the Menu is custom-made and not part of Pure. Here's\nhow it works:\n*/\n\n/*\n`.menu-link` represents the responsive menu toggle that shows/hides on\nsmall screens.\n*/\n.menu-link {\n    position: fixed;\n    display: block; /* show this only on small screens */\n    top: 0;\n    left: 0; /* \"#menu width\" */\n    background: #000;\n    background: rgba(0,0,0,0.7);\n    font-size: 10px; /* change this value to increase/decrease button size */\n    z-index: 10;\n    width: 2em;\n    height: auto;\n    padding: 2.1em 1.6em;\n}\n\n    .menu-link:hover,\n    .menu-link:focus {\n        background: #000;\n    }\n\n    .menu-link span {\n        position: relative;\n        display: block;\n    }\n\n    .menu-link span,\n    .menu-link span:before,\n    .menu-link span:after {\n        background-color: #fff;\n        width: 100%;\n        height: 0.2em;\n    }\n\n        .menu-link span:before,\n        .menu-link span:after {\n            position: absolute;\n            margin-top: -0.6em;\n            content: \" \";\n        }\n\n        .menu-link span:after {\n            margin-top: 0.6em;\n        }\n\n\n/* -- Responsive Styles (Media Queries) ------------------------------------- */\n\n/*\nHides the menu at `48em`, but modify this based on your app's needs.\n*/\n@media (min-width: 48em) {\n\n    .header,\n    .content {\n        padding-left: 2em;\n        padding-right: 2em;\n    }\n\n    #layout {\n        padding-left: 220px; /* left col width \"#menu\" */\n        left: 0;\n    }\n    #menu {\n        left: 220px;\n    }\n\n    .menu-link {\n        position: fixed;\n        left: 220px;\n        display: none;\n    }\n\n    #layout.active .menu-link {\n        left: 220px;\n    }\n}\n\n@media (max-width: 48em) {\n    /* Only apply this when the window is small. Otherwise, the following\n    case results in extra padding on the left:\n        * Make the window small.\n        * Tap the menu to trigger the active state.\n        * Make the window large again.\n    */\n    #layout.active {\n        position: relative;\n        left: 220px;\n    }\n}\n"; });
define('text!dashboard/about/about.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><h1>${title}</h1></div><div class=\"content\"><h3 class=\"content-subhead\">Sub-heading</h3><p>Some text.</p></div></template>"; });
define('text!dashboard/category/category-charting.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!dashboard/category/category-component.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><h1>${title}</h1></div><div class=\"pure-menu pure-menu-horizontal\"><ul class=\"pure-menu-list\"><li class=\"pure-menu-item\"><a click.delegate=\"setDisplay('Details')\" class=\"pure-menu-link\" href=\"javascript:void(0)\"><i class=\"fa fa-lg fa-edit\"></i>&nbsp;Details</a></li><li class=\"pure-menu-item\"><a click.delegate=\"setDisplay('Data')\" class=\"pure-menu-link\" href=\"javascript:void(0)\"><i class=\"fa fa-lg fa-database\"></i>&nbsp;Data</a></li><li class=\"pure-menu-item\"><a click.delegate=\"setDisplay('Charting')\" class=\"pure-menu-link\" href=\"javascript:void(0)\"><i class=\"fa fa-lg fa-chart\"></i>&nbsp;Charting</a></li></ul></div><div style=\"margin:0 0 0 20px\" if.bind=\"selectedDisplayMode == 'Details'\"><br><form class=\"pure-form pure-form-stacked\"><fieldset><div><button click.delegate=\"save()\" class=\"pure-button pure-button-primary\"><i class=\"fa fa-save\"></i>&nbsp;Save</button> <button click.delegate=\"cancel()\" class=\"pure-button\"><i class=\"fa fa-refresh\"></i>&nbsp;Cancel</button> <button click.delegate=\"delete()\" class=\"pure-button pure-button-error\"><i class=\"fa fa-remove\"></i>&nbsp;Delete</button></div><br><div class=\"pure-g\"><div class=\"pure-u-1 pure-u-sm-2-5\"><label for=\"description\">Description</label><input value.bind=\"category.description\" onchange.bind=\"changed()\" id=\"description\" class=\"pure-u-23-24\" type=\"text\"></div><div class=\"pure-u-1 pure-u-sm-2-5\"><label for=\"units\">Units</label><input value.bind=\"category.units\" id=\"units\" class=\"pure-u-23-24\" type=\"text\"></div><div class=\"pure-u-1 pure-u-sm-2-5\"><label for=\"id\">Id</label><input value.bind=\"category.id\" id=\"id\" class=\"pure-u-23-24\" disabled=\"disabled\" type=\"text\"></div></div></fieldset></form></div><div if.bind=\"selectedDisplayMode == 'Data'\"><h3>Data</h3></div><div if.bind=\"selectedDisplayMode == 'Charting'\"><h3>Charting</h3></div></template>"; });
define('text!dashboard/category/category-data.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!dashboard/category/category-details.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!dashboard/contact/contact.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><h1>${title}</h1></div><div class=\"content\"><h3 class=\"content-subhead\">Subheading</h3><p>Some text.</p></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
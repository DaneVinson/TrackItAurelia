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
                { route: 'dashboard', moduleId: 'dashboard/category/empty', name: 'empty' },
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLEdBQUc7UUFHZCxhQUFvQixlQUFnQztZQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDcEQsQ0FBQztRQUVELDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3pELE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO2dCQUM5RCxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7Z0JBQ25FLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztnQkFDM0UsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO2dCQUMxRSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHVDQUF1QyxFQUFFLElBQUksRUFBQyxXQUFXLEVBQUU7YUFDaEcsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUNILFVBQUM7SUFBRCxDQWpCQSxBQWlCQyxJQUFBO0lBakJZLEdBQUc7UUFEZiwwQkFBTSxDQUFDLGtDQUFlLENBQUM7eUNBSWUsa0NBQWU7T0FIekMsR0FBRyxDQWlCZjtJQWpCWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBDYXRlZ29yeVNlcnZpY2UgfSBmcm9tICcuL2NhdGVnb3J5LXNlcnZpY2UnO1xuXG5AaW5qZWN0KENhdGVnb3J5U2VydmljZSlcbmV4cG9ydCBjbGFzcyBBcHAge1xuICByb3V0ZXI6IFJvdXRlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGVnb3J5U2VydmljZTogQ2F0ZWdvcnlTZXJ2aWNlKSB7XG4gIH1cblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogJycsIG1vZHVsZUlkOiAnZGFzaGJvYXJkL2Fib3V0L2Fib3V0JywgbmFtZTogJ2Fib3V0J30sXG4gICAgICB7IHJvdXRlOiAnYWJvdXQnLCBtb2R1bGVJZDogJ2Rhc2hib2FyZC9hYm91dC9hYm91dCcsIG5hbWU6ICdhYm91dCd9LFxuICAgICAgeyByb3V0ZTogJ2NvbnRhY3QnLCBtb2R1bGVJZDogJ2Rhc2hib2FyZC9jb250YWN0L2NvbnRhY3QnLCBuYW1lOiAnY29udGFjdCd9LFxuICAgICAgeyByb3V0ZTogJ2Rhc2hib2FyZCcsIG1vZHVsZUlkOiAnZGFzaGJvYXJkL2NhdGVnb3J5L2VtcHR5JywgbmFtZTogJ2VtcHR5J30sXG4gICAgICB7IHJvdXRlOiAnZGFzaGJvYXJkLzppZCcsIG1vZHVsZUlkOiAnZGFzaGJvYXJkL2NhdGVnb3J5L2NhdGVnb3J5LWNvbXBvbmVudCcsIG5hbWU6J2Rhc2hib2FyZCcgfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('category-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CategoryService = (function () {
        function CategoryService() {
            this.accountId = 'dane';
            this.isBusy = false;
            this.newCount = 0;
            this.refreshCategories();
        }
        CategoryService.prototype.addNewCategory = function () {
            var count = this.newCount++;
            var newId = 'NewCategory' + count;
            var category = {
                accountId: this.accountId,
                dataPoints: [],
                description: newId,
                id: newId,
                units: ''
            };
            this.categories.push(category);
            var entity = this.newEntityFromCategory(category);
            entity.description = '';
            entity.dirty = true;
            entity.new = true;
            entity.valid = false;
            entity.units = '';
            this.categoryEntities.push(entity);
            return category.id;
        };
        CategoryService.prototype.cancelCategoryChanges = function (id) {
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
        };
        CategoryService.prototype.getCategory = function (id) {
            if (!this.categories || this.categories.length == 0) {
                return null;
            }
            return this.categories.find(function (c) { return c.id == id; });
        };
        CategoryService.prototype.getCategories = function (refresh) {
            if (refresh === void 0) { refresh = false; }
            if (!this.categories || refresh) {
                this.refreshCategories();
            }
            return this.categories;
        };
        CategoryService.prototype.getCategoryEntities = function (refresh) {
            if (refresh === void 0) { refresh = false; }
            if (!this.categories || refresh) {
                this.refreshCategories();
            }
            return this.categoryEntities;
        };
        CategoryService.prototype.getCategoryEntity = function (id) {
            if (!this.categories || this.categories.length == 0) {
                return null;
            }
            return this.categoryEntities.find(function (c) { return c.id == id; });
        };
        CategoryService.prototype.newEntityFromCategory = function (category) {
            return {
                accountId: category.accountId,
                dataPoints: category.dataPoints,
                deleted: false,
                description: category.description,
                dirty: false,
                id: category.id,
                new: false,
                units: category.units,
                valid: true
            };
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
                    _this.categoryEntities.push(_this.newEntityFromCategory(c));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFPSTtZQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFFRCx3Q0FBYyxHQUFkO1lBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzVCLElBQUksS0FBSyxHQUFHLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDbEMsSUFBSSxRQUFRLEdBQWE7Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCLEVBQUUsRUFBRSxLQUFLO2dCQUNULEtBQUssRUFBRSxFQUFFO2FBQ1osQ0FBQTtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN4QixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNwQixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztZQUNsQixNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNyQixNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRW5DLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCwrQ0FBcUIsR0FBckIsVUFBc0IsRUFBVTtZQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoRCxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNGLGNBQWMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztvQkFDOUMsY0FBYyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQy9CLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUMvQixjQUFjLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7b0JBQ2xELGNBQWMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUM3QixjQUFjLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7b0JBQ2hDLGNBQWMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO29CQUMzQixjQUFjLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7b0JBQ3RDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRCxxQ0FBVyxHQUFYLFVBQVksRUFBVTtZQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELHVDQUFhLEdBQWIsVUFBYyxPQUF3QjtZQUF4Qix3QkFBQSxFQUFBLGVBQXdCO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUM3QixDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztRQUVELDZDQUFtQixHQUFuQixVQUFvQixPQUF3QjtZQUF4Qix3QkFBQSxFQUFBLGVBQXdCO1lBQ3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUM3QixDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO1FBRUQsMkNBQWlCLEdBQWpCLFVBQWtCLEVBQVU7WUFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUVPLCtDQUFxQixHQUE3QixVQUE4QixRQUFrQjtZQUM1QyxNQUFNLENBQUM7Z0JBQ0gsU0FBUyxFQUFFLFFBQVEsQ0FBQyxTQUFTO2dCQUM3QixVQUFVLEVBQUUsUUFBUSxDQUFDLFVBQVU7Z0JBQy9CLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVztnQkFDakMsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUNmLEdBQUcsRUFBRSxLQUFLO2dCQUNWLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztnQkFDckIsS0FBSyxFQUFFLElBQUk7YUFDZCxDQUFDO1FBQ04sQ0FBQztRQUVPLDJDQUFpQixHQUF6QjtZQUFBLGlCQVdDO1lBVkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDekIsQ0FBQztZQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUM7UUFJTyxrQ0FBUSxHQUFoQjtZQUNJLE1BQU0sQ0FBQztnQkFDSDtvQkFDSSxTQUFTLEVBQUUsT0FBTztvQkFDbEIsVUFBVSxFQUFFLEVBQUU7b0JBQ2QsV0FBVyxFQUFFLG1CQUFtQjtvQkFDaEMsRUFBRSxFQUFFLEdBQUc7b0JBQ1AsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2dCQUNEO29CQUNJLFNBQVMsRUFBRSxPQUFPO29CQUNsQixVQUFVLEVBQUUsRUFBRTtvQkFDZCxXQUFXLEVBQUUsa0JBQWtCO29CQUMvQixFQUFFLEVBQUUsR0FBRztvQkFDUCxLQUFLLEVBQUUsUUFBUTtpQkFDbEI7Z0JBQ0Q7b0JBQ0ksU0FBUyxFQUFFLE9BQU87b0JBQ2xCLFVBQVUsRUFBRSxFQUFFO29CQUNkLFdBQVcsRUFBRSxjQUFjO29CQUMzQixFQUFFLEVBQUUsR0FBRztvQkFDUCxLQUFLLEVBQUUsUUFBUTtpQkFDbEI7Z0JBQ0Q7b0JBQ0ksU0FBUyxFQUFFLE9BQU87b0JBQ2xCLFVBQVUsRUFBRSxFQUFFO29CQUNkLFdBQVcsRUFBRSxrQkFBa0I7b0JBQy9CLEVBQUUsRUFBRSxHQUFHO29CQUNQLEtBQUssRUFBRSxXQUFXO2lCQUNyQjthQUNKLENBQUM7UUFDTixDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQXBKQSxBQW9KQyxJQUFBO0lBcEpZLDBDQUFlIiwiZmlsZSI6ImNhdGVnb3J5LXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2F0ZWdvcnlTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgYWNjb3VudElkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNhdGVnb3JpZXM6IENhdGVnb3J5W107XHJcbiAgICBwcml2YXRlIGNhdGVnb3J5RW50aXRpZXM6IENhdGVnb3J5RW50aXR5W107XHJcbiAgICBwdWJsaWMgaXNCdXN5OiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBuZXdDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYWNjb3VudElkID0gJ2RhbmUnO1xyXG4gICAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZXdDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQ2F0ZWdvcmllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE5ld0NhdGVnb3J5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGNvdW50ID0gdGhpcy5uZXdDb3VudCsrO1xyXG4gICAgICAgIHZhciBuZXdJZCA9ICdOZXdDYXRlZ29yeScgKyBjb3VudDtcclxuICAgICAgICB2YXIgY2F0ZWdvcnk6IENhdGVnb3J5ID0ge1xyXG4gICAgICAgICAgICBhY2NvdW50SWQ6IHRoaXMuYWNjb3VudElkLFxyXG4gICAgICAgICAgICBkYXRhUG9pbnRzOiBbXSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG5ld0lkLFxyXG4gICAgICAgICAgICBpZDogbmV3SWQsXHJcbiAgICAgICAgICAgIHVuaXRzOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgICAgdmFyIGVudGl0eSA9IHRoaXMubmV3RW50aXR5RnJvbUNhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgICAgICBlbnRpdHkuZGVzY3JpcHRpb24gPSAnJztcclxuICAgICAgICBlbnRpdHkuZGlydHkgPSB0cnVlO1xyXG4gICAgICAgIGVudGl0eS5uZXcgPSB0cnVlO1xyXG4gICAgICAgIGVudGl0eS52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIGVudGl0eS51bml0cyA9ICcnO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlFbnRpdGllcy5wdXNoKGVudGl0eSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjYXRlZ29yeS5pZDtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxDYXRlZ29yeUNoYW5nZXMoaWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHZhciBjYXRlZ29yeSA9IHRoaXMuZ2V0Q2F0ZWdvcnkoaWQpO1xyXG4gICAgICAgIHZhciBjYXRlZ29yeUVudGl0eSA9IHRoaXMuZ2V0Q2F0ZWdvcnlFbnRpdHkoaWQpO1xyXG4gICAgICAgIGlmIChjYXRlZ29yeSAmJiBjYXRlZ29yeUVudGl0eSkge1xyXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnlFbnRpdHkubmV3KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlFbnRpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlFbnRpdHkuYWNjb3VudElkID0gY2F0ZWdvcnkuYWNjb3VudElkO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlFbnRpdHkuZGF0YVBvaW50cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlFbnRpdHkuZGVsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlFbnRpdHkuZGVzY3JpcHRpb24gPSBjYXRlZ29yeS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5RW50aXR5LmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUVudGl0eS5pZCA9IGNhdGVnb3J5LmlkO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlFbnRpdHkubmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUVudGl0eS51bml0cyA9IGNhdGVnb3J5LnVuaXRzO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlFbnRpdHkudmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldENhdGVnb3J5KGlkOiBzdHJpbmcpOiBDYXRlZ29yeSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhdGVnb3JpZXMgfHwgdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzLmZpbmQoYyA9PiBjLmlkID09IGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXRlZ29yaWVzKHJlZnJlc2g6IGJvb2xlYW4gPSBmYWxzZSk6IENhdGVnb3J5W10ge1xyXG4gICAgICAgIGlmICghdGhpcy5jYXRlZ29yaWVzIHx8IHJlZnJlc2gpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ2F0ZWdvcmllcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhdGVnb3J5RW50aXRpZXMocmVmcmVzaDogYm9vbGVhbiA9IGZhbHNlKTogQ2F0ZWdvcnlFbnRpdHlbXSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhdGVnb3JpZXMgfHwgcmVmcmVzaCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3J5RW50aXRpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2F0ZWdvcnlFbnRpdHkoaWQ6IHN0cmluZyk6IENhdGVnb3J5RW50aXR5IHtcclxuICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcmllcyB8fCB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3J5RW50aXRpZXMuZmluZChjID0+IGMuaWQgPT0gaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV3RW50aXR5RnJvbUNhdGVnb3J5KGNhdGVnb3J5OiBDYXRlZ29yeSk6IENhdGVnb3J5RW50aXR5IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhY2NvdW50SWQ6IGNhdGVnb3J5LmFjY291bnRJZCxcclxuICAgICAgICAgICAgZGF0YVBvaW50czogY2F0ZWdvcnkuZGF0YVBvaW50cyxcclxuICAgICAgICAgICAgZGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjYXRlZ29yeS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgZGlydHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXHJcbiAgICAgICAgICAgIG5ldzogZmFsc2UsXHJcbiAgICAgICAgICAgIHVuaXRzOiBjYXRlZ29yeS51bml0cyxcclxuICAgICAgICAgICAgdmFsaWQ6IHRydWUgLy8gYXNzdW1lIHRoZSBpbnB1dCBjYXRlZ29yeSB3YXMgdmFsaWRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVmcmVzaENhdGVnb3JpZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jYWxsSHR0cCgpO1xyXG4gICAgICAgIGlmICghdGhpcy5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhdGVnb3J5RW50aXRpZXMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yaWVzICYmIHRoaXMuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeUVudGl0aWVzLnB1c2godGhpcy5uZXdFbnRpdHlGcm9tQ2F0ZWdvcnkoYykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNhbGxIdHRwKCk6IENhdGVnb3J5W10ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJZDogJ2JpbGJvJyxcclxuICAgICAgICAgICAgICAgIGRhdGFQb2ludHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCZWFuc3Byb3V0IExlbmd0aCcsXHJcbiAgICAgICAgICAgICAgICBpZDogJ2EnLFxyXG4gICAgICAgICAgICAgICAgdW5pdHM6ICdpbmNoZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJZDogJ2JpbGJvJyxcclxuICAgICAgICAgICAgICAgIGRhdGFQb2ludHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDb3Juc3RhbGsgSGVpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGlkOiAnYicsXHJcbiAgICAgICAgICAgICAgICB1bml0czogJ2luY2hlcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYWNjb3VudElkOiAnYmlsYm8nLFxyXG4gICAgICAgICAgICAgICAgZGF0YVBvaW50czogW10sXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BlcmNpcGlhdGlvbicsXHJcbiAgICAgICAgICAgICAgICBpZDogJ2MnLFxyXG4gICAgICAgICAgICAgICAgdW5pdHM6ICdpbmNoZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJZDogJ2JpbGJvJyxcclxuICAgICAgICAgICAgICAgIGRhdGFQb2ludHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIaWdoIFRlbXBlcmF0dXJlJyxcclxuICAgICAgICAgICAgICAgIGlkOiAnZCcsXHJcbiAgICAgICAgICAgICAgICB1bml0czogJ2RlZ3JlZXMgRidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
define('menu/menu',["require", "exports", "aurelia-framework", "aurelia-router", "aurelia-event-aggregator", "../category-service", "../shared/category-change"], function (require, exports, aurelia_framework_1, aurelia_router_1, aurelia_event_aggregator_1, category_service_1, category_change_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Menu = (function () {
        function Menu(categoryService, eventAggregator, router) {
            var _this = this;
            this.categoryService = categoryService;
            this.eventAggregator = eventAggregator;
            this.router = router;
            this.authenticated = true;
            this.categories = this.categoryService.getCategories();
            this.selectedCategory = null;
            this.eventAggregator.subscribe(category_change_1.CategoryChange, function (message) { return _this.select(message.contact); });
        }
        Menu.prototype.deleteCategory = function () {
            console.log('delete');
        };
        Menu.prototype.newCategory = function () {
            var id = this.categoryService.addNewCategory();
            this.router.navigate('dashboard/' + id);
        };
        Menu.prototype.refreshCategories = function () {
            this.categories = this.categoryService.getCategories(true);
            this.router.navigate('dashboard');
        };
        Menu.prototype.select = function (category) {
            this.selectedCategory = category;
        };
        return Menu;
    }());
    Menu = __decorate([
        aurelia_framework_1.inject(category_service_1.CategoryService, aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router),
        __metadata("design:paramtypes", [category_service_1.CategoryService, aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router])
    ], Menu);
    exports.Menu = Menu;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQSxJQUFhLElBQUk7UUFLYixjQUFvQixlQUFnQyxFQUFVLGVBQWdDLEVBQVUsTUFBYztZQUF0SCxpQkFLQztZQUxtQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQ2xILElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGdDQUFjLEVBQUUsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBQzVGLENBQUM7UUFFTSw2QkFBYyxHQUFyQjtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUVNLDBCQUFXLEdBQWxCO1lBQ0ksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVNLGdDQUFpQixHQUF4QjtZQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVNLHFCQUFNLEdBQWIsVUFBYyxRQUFrQjtZQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLENBQUM7UUFDTCxXQUFDO0lBQUQsQ0E3QkEsQUE2QkMsSUFBQTtJQTdCWSxJQUFJO1FBRGhCLDBCQUFNLENBQUMsa0NBQWUsRUFBRSwwQ0FBZSxFQUFFLHVCQUFNLENBQUM7eUNBTVIsa0NBQWUsRUFBMkIsMENBQWUsRUFBa0IsdUJBQU07T0FMN0csSUFBSSxDQTZCaEI7SUE3Qlksb0JBQUkiLCJmaWxlIjoibWVudS9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBDYXRlZ29yeVNlcnZpY2UgfSBmcm9tICcuLi9jYXRlZ29yeS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2F0ZWdvcnlDaGFuZ2UgfSBmcm9tICcuLi9zaGFyZWQvY2F0ZWdvcnktY2hhbmdlJztcclxuXHJcbkBpbmplY3QoQ2F0ZWdvcnlTZXJ2aWNlLCBFdmVudEFnZ3JlZ2F0b3IsIFJvdXRlcilcclxuZXhwb3J0IGNsYXNzIE1lbnUge1xyXG4gICAgcHVibGljIGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZENhdGVnb3J5OiBDYXRlZ29yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGVnb3J5U2VydmljZTogQ2F0ZWdvcnlTZXJ2aWNlLCBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3J5U2VydmljZS5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoQ2F0ZWdvcnlDaGFuZ2UsIG1lc3NhZ2UgPT4gdGhpcy5zZWxlY3QobWVzc2FnZS5jb250YWN0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZUNhdGVnb3J5KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3Q2F0ZWdvcnkoKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpcy5jYXRlZ29yeVNlcnZpY2UuYWRkTmV3Q2F0ZWdvcnkoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSgnZGFzaGJvYXJkLycrIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVmcmVzaENhdGVnb3JpZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yeVNlcnZpY2UuZ2V0Q2F0ZWdvcmllcyh0cnVlKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSgnZGFzaGJvYXJkJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZWxlY3QoY2F0ZWdvcnk6IENhdGVnb3J5KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9jYXRlZ29yeS1jaGFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFDRSx3QkFBbUIsUUFBd0I7WUFBeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFBSSxDQUFDO1FBQ2xELHFCQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSx3Q0FBYyIsImZpbGUiOiJzaGFyZWQvY2F0ZWdvcnktY2hhbmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhdGVnb3J5Q2hhbmdlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2F0ZWdvcnk6IENhdGVnb3J5RW50aXR5KSB7IH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQvQ2F0ZWdvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiJzcmMifQ==

define("shared/Category", [],function(){});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQvQ2F0ZWdvcnlFbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiJzcmMifQ==

define("shared/CategoryEntity", [],function(){});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQvZGF0YVBvaW50LmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290Ijoic3JjIn0=

define("shared/dataPoint", [],function(){});

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
define('dashboard/category/category-component',["require", "exports", "aurelia-framework", "aurelia-router", "aurelia-event-aggregator", "../../shared/category-change", "../../category-service"], function (require, exports, aurelia_framework_1, aurelia_router_1, aurelia_event_aggregator_1, category_change_1, category_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CategoryComponent = (function () {
        function CategoryComponent(categoryService, bindingEngine, eventAggregator, router) {
            this.categoryService = categoryService;
            this.bindingEngine = bindingEngine;
            this.eventAggregator = eventAggregator;
            this.router = router;
            this.displayModes = ['Details', 'Data', 'Charting'];
            this.setDisplay(this.displayModes[0]);
        }
        Object.defineProperty(CategoryComponent.prototype, "canDelete", {
            get: function () {
                if (!this.categoryEntity) {
                    return false;
                }
                return !this.categoryEntity.deleted && !this.categoryEntity.new;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CategoryComponent.prototype, "canSave", {
            get: function () {
                if (!this.categoryEntity) {
                    return false;
                }
                this.categoryEntity.dirty = this.category.description != this.categoryEntity.description ||
                    this.category.units != this.categoryEntity.units ||
                    this.categoryEntity.deleted;
                var valid = true;
                if (!this.categoryEntity.description || !this.categoryEntity.units) {
                    valid = false;
                }
                this.categoryEntity.valid = valid;
                return this.categoryEntity.deleted || (this.categoryEntity.dirty && this.categoryEntity.valid);
            },
            enumerable: true,
            configurable: true
        });
        CategoryComponent.prototype.activate = function (params, routeConfig) {
            var categoryEntity = this.categoryService.getCategoryEntity(params.id);
            if (categoryEntity) {
                this.categoryEntity = categoryEntity;
                this.category = this.categoryService.getCategory(this.categoryEntity.id);
                this.title = this.category.description;
                if (this.category.units) {
                    this.title += ' (' + this.category.units + ')';
                }
            }
            else {
                this.router.navigate('dashboard');
            }
            this.eventAggregator.publish(new category_change_1.CategoryChange(this.categoryEntity));
        };
        CategoryComponent.prototype.cancel = function () {
            this.categoryService.cancelCategoryChanges(this.categoryEntity.id);
            this.router.navigate('dashboard');
        };
        CategoryComponent.prototype.changed = function () {
            this.categoryEntity.dirty = true;
            if (this.categoryEntity && this.categoryEntity.description && this.categoryEntity.units) {
                this.categoryEntity.valid = true;
            }
            else {
                this.categoryEntity.valid = false;
            }
            console.log('valid: ' + this.categoryEntity.valid + ', dirty: ' + this.categoryEntity.dirty);
            return true;
        };
        CategoryComponent.prototype.delete = function () {
            this.categoryEntity.deleted = true;
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
    __decorate([
        aurelia_framework_1.computedFrom('categoryEntity', 'categoryEntity.deleted', 'categoryEntity.new'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], CategoryComponent.prototype, "canDelete", null);
    __decorate([
        aurelia_framework_1.computedFrom('categoryEntity', 'categoryEntity.description', 'categoryEntity.units', 'categoryEntity.deleted'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], CategoryComponent.prototype, "canSave", null);
    CategoryComponent = __decorate([
        aurelia_framework_1.inject(category_service_1.CategoryService, aurelia_framework_1.BindingEngine, aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router),
        __metadata("design:paramtypes", [category_service_1.CategoryService, aurelia_framework_1.BindingEngine, aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router])
    ], CategoryComponent);
    exports.CategoryComponent = CategoryComponent;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jYXRlZ29yeS9jYXRlZ29yeS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBT0EsSUFBYSxpQkFBaUI7UUFPMUIsMkJBQW9CLGVBQWdDLEVBQVUsYUFBNEIsRUFBVSxlQUFnQyxFQUFVLE1BQWM7WUFBeEksb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7WUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBQ3hKLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFHRCxzQkFBSSx3Q0FBUztpQkFBYjtnQkFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUNELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUE7WUFDbkUsQ0FBQzs7O1dBQUE7UUFHRCxzQkFBSSxzQ0FBTztpQkFBWDtnQkFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUdELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVztvQkFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNB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QVcsV0FBbUI7WUFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksV0FBVyxFQUFoQixDQUFnQixDQUFDLENBQUM7WUFDN0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztnQkFDVixJQUFJLENBQUMsbUJBQW1CLEdBQUcsV0FBVyxDQUFDO1lBQzNDLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDO1FBQ0wsQ0FBQztRQUNMLHdCQUFDO0lBQUQsQ0E3RkEsQUE2RkMsSUFBQTtJQWhGRztRQURDLGdDQUFZLENBQUMsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQUUsb0JBQW9CLENBQUM7OztzREFNOUU7SUFHRDtRQURDLGdDQUFZLENBQUMsZ0JBQWdCLEVBQUUsNEJBQTRCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLENBQUM7OztvREFvQjlHO0lBeENRLGlCQUFpQjtRQUQ3QiwwQkFBTSxDQUFDLGtDQUFlLEVBQUUsaUNBQWEsRUFBRSwwQ0FBZSxFQUFFLHVCQUFNLENBQUM7eUNBUXZCLGtDQUFlLEVBQXlCLGlDQUFhLEVBQTJCLDBDQUFlLEVBQWtCLHVCQUFNO09BUG5KLGlCQUFpQixDQTZGN0I7SUE3RlksOENBQWlCIiwiZmlsZSI6ImRhc2hib2FyZC9jYXRlZ29yeS9jYXRlZ29yeS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCaW5kaW5nRW5naW5lLCBpbmplY3QsIGNvbXB1dGVkRnJvbSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBDYXRlZ29yeUNoYW5nZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jYXRlZ29yeS1jaGFuZ2UnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jYXRlZ29yeS1zZXJ2aWNlJztcclxuXHJcbkBpbmplY3QoQ2F0ZWdvcnlTZXJ2aWNlLCBCaW5kaW5nRW5naW5lLCBFdmVudEFnZ3JlZ2F0b3IsIFJvdXRlcilcclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5Q29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgY2F0ZWdvcnk6IENhdGVnb3J5O1xyXG4gICAgcHVibGljIGNhdGVnb3J5RW50aXR5OiBDYXRlZ29yeUVudGl0eTtcclxuICAgIHB1YmxpYyBkaXNwbGF5TW9kZXM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIHNlbGVjdGVkRGlzcGxheU1vZGU6IHN0cmluZztcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2F0ZWdvcnlTZXJ2aWNlOiBDYXRlZ29yeVNlcnZpY2UsIHByaXZhdGUgYmluZGluZ0VuZ2luZTogQmluZGluZ0VuZ2luZSwgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheU1vZGVzID0gWyAnRGV0YWlscycsICdEYXRhJywgJ0NoYXJ0aW5nJyBdO1xyXG4gICAgICAgIHRoaXMuc2V0RGlzcGxheSh0aGlzLmRpc3BsYXlNb2Rlc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbSgnY2F0ZWdvcnlFbnRpdHknLCAnY2F0ZWdvcnlFbnRpdHkuZGVsZXRlZCcsICdjYXRlZ29yeUVudGl0eS5uZXcnKVxyXG4gICAgZ2V0IGNhbkRlbGV0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcnlFbnRpdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gIXRoaXMuY2F0ZWdvcnlFbnRpdHkuZGVsZXRlZCAmJiAhdGhpcy5jYXRlZ29yeUVudGl0eS5uZXdcclxuICAgIH0gIFxyXG5cclxuICAgIEBjb21wdXRlZEZyb20oJ2NhdGVnb3J5RW50aXR5JywgJ2NhdGVnb3J5RW50aXR5LmRlc2NyaXB0aW9uJywgJ2NhdGVnb3J5RW50aXR5LnVuaXRzJywgJ2NhdGVnb3J5RW50aXR5LmRlbGV0ZWQnKVxyXG4gICAgZ2V0IGNhblNhdmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhdGVnb3J5RW50aXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCBkaXJ0eVxyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlFbnRpdHkuZGlydHkgPSB0aGlzLmNhdGVnb3J5LmRlc2NyaXB0aW9uICE9IHRoaXMuY2F0ZWdvcnlFbnRpdHkuZGVzY3JpcHRpb24gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS51bml0cyAhPSB0aGlzLmNhdGVnb3J5RW50aXR5LnVuaXRzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlFbnRpdHkuZGVsZXRlZDtcclxuXHJcbiAgICAgICAgLy8gc2V0IHZhbGlkXHJcbiAgICAgICAgdmFyIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcnlFbnRpdHkuZGVzY3JpcHRpb24gfHwgIXRoaXMuY2F0ZWdvcnlFbnRpdHkudW5pdHMpIHtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeUVudGl0eS52YWxpZCA9IHZhbGlkOyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gY2FuIHNhdmUgaWYgZGVsZXRlZCBvciBib3RoIGRpcnR5IGFuZCB2YWxpZFxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhdGVnb3J5RW50aXR5LmRlbGV0ZWQgfHwgKHRoaXMuY2F0ZWdvcnlFbnRpdHkuZGlydHkgJiYgdGhpcy5jYXRlZ29yeUVudGl0eS52YWxpZCk7XHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZUNvbmZpZykge1xyXG4gICAgICAgIHZhciBjYXRlZ29yeUVudGl0eSA9IHRoaXMuY2F0ZWdvcnlTZXJ2aWNlLmdldENhdGVnb3J5RW50aXR5KHBhcmFtcy5pZCk7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5RW50aXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlFbnRpdHkgPSBjYXRlZ29yeUVudGl0eTtcclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnlTZXJ2aWNlLmdldENhdGVnb3J5KHRoaXMuY2F0ZWdvcnlFbnRpdHkuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5jYXRlZ29yeS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jYXRlZ29yeS51bml0cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSArPSAnICgnICsgdGhpcy5jYXRlZ29yeS51bml0cyArICcpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBDYXRlZ29yeUNoYW5nZSh0aGlzLmNhdGVnb3J5RW50aXR5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlTZXJ2aWNlLmNhbmNlbENhdGVnb3J5Q2hhbmdlcyh0aGlzLmNhdGVnb3J5RW50aXR5LmlkKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSgnZGFzaGJvYXJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5RW50aXR5LmRpcnR5ID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeUVudGl0eSAmJiB0aGlzLmNhdGVnb3J5RW50aXR5LmRlc2NyaXB0aW9uICYmIHRoaXMuY2F0ZWdvcnlFbnRpdHkudW5pdHMpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeUVudGl0eS52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5RW50aXR5LnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygndmFsaWQ6ICcgKyB0aGlzLmNhdGVnb3J5RW50aXR5LnZhbGlkICsgJywgZGlydHk6ICcrIHRoaXMuY2F0ZWdvcnlFbnRpdHkuZGlydHkpO1xyXG4gICAgICAgIC8vIHJldHVybiB0cnVlIHNvIHRoZSBET00gZXZlbnQgY29udGludWVzIHByb2Nlc3NpbmcgYXMgdXN1YWxcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeUVudGl0eS5kZWxldGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc3BsYXkoZGlzcGxheU1vZGU6IHN0cmluZyl7XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gdGhpcy5kaXNwbGF5TW9kZXMuZmluZChkID0+IGQgPT0gZGlzcGxheU1vZGUpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREaXNwbGF5TW9kZSA9IGRpc3BsYXlNb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERpc3BsYXlNb2RlID0gdGhpcy5kaXNwbGF5TW9kZXNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

define('dashboard/category/empty',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmptyDashboard = (function () {
        function EmptyDashboard() {
            this.title = 'Select or Add a Category';
        }
        return EmptyDashboard;
    }());
    exports.EmptyDashboard = EmptyDashboard;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jYXRlZ29yeS9lbXB0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUdJO1lBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRywwQkFBMEIsQ0FBQztRQUM1QyxDQUFDO1FBQ0wscUJBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQU5ZLHdDQUFjIiwiZmlsZSI6ImRhc2hib2FyZC9jYXRlZ29yeS9lbXB0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFbXB0eURhc2hib2FyZCB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSAnU2VsZWN0IG9yIEFkZCBhIENhdGVnb3J5JztcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"purecss/build/pure-min.css\"></require><require from=\"purecss/build/grids-responsive-min.css\"></require><require from=\"./app.css\"></require><require from=\"./side-menu.css\"></require><require from=\"./menu/menu\"></require><require from=\"./dashboard/about/about\"></require><require from=\"./dashboard/contact/contact\"></require><require from=\"./dashboard/about/about\"></require><div id=\"layout\"><a href=\"#menu\" id=\"menuLink\" class=\"menu-link\"><span></span></a><div id=\"menu\"><menu style=\"margin:0 0 0 -40px\"></menu></div><div id=\"main\"><router-view></router-view></div></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = ".pure-button-success,\r\n.pure-button-error,\r\n.pure-button-warning,\r\n.pure-button-secondary {\r\n\tcolor: white;\r\n\tborder-radius: 2px;\r\n\ttext-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.pure-button-success {\r\n\tbackground: rgb(28, 184, 65); /* this is a green */\r\n}\r\n\r\n.pure-button-error {\r\n\tbackground: rgb(202, 60, 60); /* this is a maroon */\r\n}\r\n\r\n.pure-button-warning {\r\n\tbackground: rgb(223, 117, 20); /* this is an orange */\r\n}\r\n\r\n.pure-button-secondary {\r\n\tbackground: rgb(66, 184, 221); /* this is a light blue */\r\n}"; });
define('text!menu/menu.html', ['module'], function(module) { module.exports = "<template><div class=\"pure-menu\"><a class=\"pure-menu-heading\" href=\"#\">TrackIt</a><ul class=\"pure-menu-list\"><li if.bind=\"!authenticated\" class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\"><i class=\"fa fa-lg fa-sign-in\"></i>&nbsp;&nbsp;Sign In</a></li><li if.bind=\"authenticated\" class=\"pure-menu-item\"><button click.delegate=\"refreshCategories()\" class=\"pure-button\"><i class=\"fa fa-lg fa-refresh\"></i></button> <button click.delegate=\"newCategory()\" class=\"pure-button pure-button-success\"><i class=\"fa fa-lg fa-plus\"></i></button> <button click.delegate=\"deleteCategory()\" class=\"pure-button pure-button-error\"><i class=\"fa fa-lg fa-remove\"></i></button></li><li if.bind=\"authenticated\" class=\"pure-menu-item\" repeat.for=\"category of categories\"><a class=\"pure-menu-link\" route-href=\"route: dashboard; params.bind: {id:category.id}\">${category.description}</a></li><li class=\"pure-menu-item menu-item-divided\"><a href=\"#/about\" class=\"pure-menu-link\"><i class=\"fa fa-lg fa-question-circle\"></i>&nbsp;&nbsp;About</a></li><li class=\"pure-menu-item\"><a href=\"#/contact\" class=\"pure-menu-link\"><i class=\"fa fa-lg fa-envelope\"></i>&nbsp;&nbsp;Contact</a></li><li if.bind=\"authenticated\" class=\"pure-menu-item menu-item-divided\"><a href=\"#\" class=\"pure-menu-link\"><i class=\"fa fa-lg fa-sign-out\"></i>&nbsp;&nbsp;Sign Bilbo Out</a></li></ul></div></template>"; });
define('text!side-menu.css', ['module'], function(module) { module.exports = "body {\n    color: #777;\n}\n\n.pure-img-responsive {\n    max-width: 100%;\n    height: auto;\n}\n\n/*\nAdd transition to containers so they can push in and out.\n*/\n#layout,\n#menu,\n.menu-link {\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -ms-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n\n/*\nThis is the parent `<div>` that contains the menu and the content area.\n*/\n#layout {\n    position: relative;\n    left: 0;\n    padding-left: 0;\n}\n    #layout.active #menu {\n        left: 220px;\n        width: 220px;\n    }\n\n    #layout.active .menu-link {\n        left: 220px;\n    }\n/*\nThe content `<div>` is where all your content goes.\n*/\n.content {\n    margin: 0 auto;\n    padding: 0 2em;\n    max-width: 800px;\n    margin-bottom: 50px;\n    line-height: 1.6em;\n}\n\n.header {\n     margin: 0;\n     color: #333;\n     text-align: center;\n     padding: 2.5em 2em 0;\n     border-bottom: 1px solid #eee;\n }\n    .header h1 {\n        margin: 0.2em 0;\n        font-size: 3em;\n        font-weight: 300;\n    }\n     .header h2 {\n        font-weight: 300;\n        color: #ccc;\n        padding: 0;\n        margin-top: 0;\n    }\n\n.content-subhead {\n    margin: 50px 0 20px 0;\n    font-weight: 300;\n    color: #888;\n}\n\n\n\n/*\nThe `#menu` `<div>` is the parent `<div>` that contains the `.pure-menu` that\nappears on the left side of the page.\n*/\n\n#menu {\n    margin-left: -220px; /* \"#menu\" width */\n    width: 220px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 1000; /* so the menu or its navicon stays above all content */\n    background: #191818;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n}\n    /*\n    All anchors inside the menu should be styled like this.\n    */\n    #menu a {\n        color: #999;\n        border: none;\n        padding: 0.6em 0 0.6em 0.6em;\n    }\n\n    /*\n    Remove all background/borders, since we are applying them to #menu.\n    */\n     #menu .pure-menu,\n     #menu .pure-menu ul {\n        border: none;\n        background: transparent;\n    }\n\n    /*\n    Add that light border to separate items into groups.\n    */\n    #menu .pure-menu ul,\n    #menu .pure-menu .menu-item-divided {\n        border-top: 1px solid #333;\n    }\n        /*\n        Change color of the anchor links on hover/focus.\n        */\n        #menu .pure-menu li a:hover,\n        #menu .pure-menu li a:focus {\n            background: #333;\n        }\n\n    /*\n    This styles the selected menu item `<li>`.\n    */\n    #menu .pure-menu-selected,\n    #menu .pure-menu-heading {\n        background: #1f8dd6;\n    }\n        /*\n        This styles a link within a selected menu item `<li>`.\n        */\n        #menu .pure-menu-selected a {\n            color: #fff;\n        }\n\n    /*\n    This styles the menu heading.\n    */\n    #menu .pure-menu-heading {\n        font-size: 110%;\n        color: #fff;\n        margin: 0;\n    }\n\n/* -- Dynamic Button For Responsive Menu -------------------------------------*/\n\n/*\nThe button to open/close the Menu is custom-made and not part of Pure. Here's\nhow it works:\n*/\n\n/*\n`.menu-link` represents the responsive menu toggle that shows/hides on\nsmall screens.\n*/\n.menu-link {\n    position: fixed;\n    display: block; /* show this only on small screens */\n    top: 0;\n    left: 0; /* \"#menu width\" */\n    background: #000;\n    background: rgba(0,0,0,0.7);\n    font-size: 10px; /* change this value to increase/decrease button size */\n    z-index: 10;\n    width: 2em;\n    height: auto;\n    padding: 2.1em 1.6em;\n}\n\n    .menu-link:hover,\n    .menu-link:focus {\n        background: #000;\n    }\n\n    .menu-link span {\n        position: relative;\n        display: block;\n    }\n\n    .menu-link span,\n    .menu-link span:before,\n    .menu-link span:after {\n        background-color: #fff;\n        width: 100%;\n        height: 0.2em;\n    }\n\n        .menu-link span:before,\n        .menu-link span:after {\n            position: absolute;\n            margin-top: -0.6em;\n            content: \" \";\n        }\n\n        .menu-link span:after {\n            margin-top: 0.6em;\n        }\n\n\n/* -- Responsive Styles (Media Queries) ------------------------------------- */\n\n/*\nHides the menu at `48em`, but modify this based on your app's needs.\n*/\n@media (min-width: 48em) {\n\n    .header,\n    .content {\n        padding-left: 2em;\n        padding-right: 2em;\n    }\n\n    #layout {\n        padding-left: 220px; /* left col width \"#menu\" */\n        left: 0;\n    }\n    #menu {\n        left: 220px;\n    }\n\n    .menu-link {\n        position: fixed;\n        left: 220px;\n        display: none;\n    }\n\n    #layout.active .menu-link {\n        left: 220px;\n    }\n}\n\n@media (max-width: 48em) {\n    /* Only apply this when the window is small. Otherwise, the following\n    case results in extra padding on the left:\n        * Make the window small.\n        * Tap the menu to trigger the active state.\n        * Make the window large again.\n    */\n    #layout.active {\n        position: relative;\n        left: 220px;\n    }\n}\n"; });
define('text!dashboard/about/about.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><h1>${title}</h1></div><div class=\"content\"><h3 class=\"content-subhead\">Sub-heading</h3><p>Some text.</p></div></template>"; });
define('text!dashboard/category/category-charting.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!dashboard/category/category-component.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><h1>${title}</h1></div><div class=\"pure-menu pure-menu-horizontal\"><ul class=\"pure-menu-list\"><li class=\"pure-menu-item\"><a click.delegate=\"setDisplay('Details')\" class=\"pure-menu-link\" href=\"javascript:void(0)\"><i class=\"fa fa-lg fa-edit\"></i>&nbsp;Details</a></li><li class=\"pure-menu-item\"><a click.delegate=\"setDisplay('Data')\" class=\"pure-menu-link\" href=\"javascript:void(0)\"><i class=\"fa fa-lg fa-database\"></i>&nbsp;Data</a></li><li class=\"pure-menu-item\"><a click.delegate=\"setDisplay('Charting')\" class=\"pure-menu-link\" href=\"javascript:void(0)\"><i class=\"fa fa-lg fa-chart\"></i>&nbsp;Charting</a></li></ul></div><div style=\"margin:0 0 0 20px\" if.bind=\"selectedDisplayMode == 'Details'\"><br><form class=\"pure-form pure-form-stacked\" autocomplete=\"off\"><fieldset><div><button click.delegate=\"save()\" class=\"pure-button ${categoryEntity.deleted ? 'pure-button-error' : 'pure-button-primary'}\" disabled.bind=\"!canSave\"><i class=\"fa fa-save\"></i>&nbsp;Save</button> <button click.delegate=\"cancel()\" class=\"pure-button\"><i class=\"fa fa-refresh\"></i>&nbsp;Cancel</button> <button click.delegate=\"delete()\" class=\"pure-button pure-button-error\" disabled.bind=\"!canDelete\"><i class=\"fa fa-remove\"></i>&nbsp;Delete</button></div><br><div class=\"pure-g\"><div class=\"pure-u-1 pure-u-sm-2-5\"><label for=\"description\">Description</label><input value.bind=\"categoryEntity.description\" required id=\"description\" class=\"pure-u-23-24\" type=\"text\"></div><div class=\"pure-u-1 pure-u-sm-2-5\"><label for=\"units\">Units</label><input value.bind=\"categoryEntity.units\" required id=\"units\" class=\"pure-u-23-24\" type=\"text\"></div><div class=\"pure-u-1 pure-u-sm-2-5\"><label for=\"id\">Id</label><input value.bind=\"categoryEntity.id\" id=\"id\" class=\"pure-u-23-24\" disabled=\"disabled\" type=\"text\"></div></div></fieldset></form></div><div if.bind=\"selectedDisplayMode == 'Data'\"><h3>Data</h3></div><div if.bind=\"selectedDisplayMode == 'Charting'\"><h3>Charting</h3></div></template>"; });
define('text!dashboard/category/category-data.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!dashboard/category/category-details.html', ['module'], function(module) { module.exports = "<template></template>"; });
define('text!dashboard/category/empty.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><h1>${title}</h1></div></template>"; });
define('text!dashboard/contact/contact.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><h1>${title}</h1></div><div class=\"content\"><h3 class=\"content-subhead\">Subheading</h3><p>Some text.</p></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
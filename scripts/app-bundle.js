var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "./web-api"], function (require, exports, aurelia_framework_1, web_api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(webApi) {
            this.webApi = webApi;
        }
        App.prototype.configureRouter = function (config, router) {
            config.map([
                { route: '', moduleId: 'dashboard/about/about', name: 'about' },
                { route: 'about', moduleId: 'dashboard/about/about', name: 'about' },
                { route: 'contact', moduleId: 'dashboard/contact/contact', name: 'contact' },
                { route: 'dashboard', moduleId: 'dashboard/about/about', name: 'about' },
                { route: 'dashboard/:id', moduleId: 'dashboard/category/category-detail', name: 'dashboard' }
            ]);
            this.router = router;
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.inject(web_api_1.WebApi),
        __metadata("design:paramtypes", [web_api_1.WebApi])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLEdBQUc7UUFHZCxhQUFvQixNQUFjO1lBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNsQyxDQUFDO1FBRUQsNkJBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQWM7WUFDekQsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7Z0JBQzlELEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQztnQkFDbkUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDO2dCQUMzRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7Z0JBQ3ZFLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsb0NBQW9DLEVBQUUsSUFBSSxFQUFDLFdBQVcsRUFBRTthQUM3RixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBQ0gsVUFBQztJQUFELENBakJBLEFBaUJDLElBQUE7SUFqQlksR0FBRztRQURmLDBCQUFNLENBQUMsZ0JBQU0sQ0FBQzt5Q0FJZSxnQkFBTTtPQUh2QixHQUFHLENBaUJmO0lBakJZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IFdlYkFwaSB9IGZyb20gJy4vd2ViLWFwaSc7XG5cbkBpbmplY3QoV2ViQXBpKVxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHJvdXRlcjogUm91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2ViQXBpOiBXZWJBcGkpIHtcbiAgfVxuXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiAnJywgbW9kdWxlSWQ6ICdkYXNoYm9hcmQvYWJvdXQvYWJvdXQnLCBuYW1lOiAnYWJvdXQnfSxcbiAgICAgIHsgcm91dGU6ICdhYm91dCcsIG1vZHVsZUlkOiAnZGFzaGJvYXJkL2Fib3V0L2Fib3V0JywgbmFtZTogJ2Fib3V0J30sXG4gICAgICB7IHJvdXRlOiAnY29udGFjdCcsIG1vZHVsZUlkOiAnZGFzaGJvYXJkL2NvbnRhY3QvY29udGFjdCcsIG5hbWU6ICdjb250YWN0J30sXG4gICAgICB7IHJvdXRlOiAnZGFzaGJvYXJkJywgbW9kdWxlSWQ6ICdkYXNoYm9hcmQvYWJvdXQvYWJvdXQnLCBuYW1lOiAnYWJvdXQnfSxcbiAgICAgIHsgcm91dGU6ICdkYXNoYm9hcmQvOmlkJywgbW9kdWxlSWQ6ICdkYXNoYm9hcmQvY2F0ZWdvcnkvY2F0ZWdvcnktZGV0YWlsJywgbmFtZTonZGFzaGJvYXJkJyB9XG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

define('web-api',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WebApi = (function () {
        function WebApi() {
            this.isBusy = false;
        }
        WebApi.prototype.getCategories = function (refresh) {
            if (refresh === void 0) { refresh = false; }
            if (!this.categories || refresh) {
                this.categories = [
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
            }
            return this.categories;
        };
        return WebApi;
    }());
    exports.WebApi = WebApi;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFJSTtZQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7UUFFRCw4QkFBYSxHQUFiLFVBQWMsT0FBd0I7WUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtZQUNsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRztvQkFDZDt3QkFDSSxTQUFTLEVBQUUsT0FBTzt3QkFDbEIsVUFBVSxFQUFFLEVBQUU7d0JBQ2QsV0FBVyxFQUFFLG1CQUFtQjt3QkFDaEMsRUFBRSxFQUFFLEdBQUc7d0JBQ1AsS0FBSyxFQUFFLFFBQVE7cUJBQ2xCO29CQUNEO3dCQUNJLFNBQVMsRUFBRSxPQUFPO3dCQUNsQixVQUFVLEVBQUUsRUFBRTt3QkFDZCxXQUFXLEVBQUUsa0JBQWtCO3dCQUMvQixFQUFFLEVBQUUsR0FBRzt3QkFDUCxLQUFLLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0Q7d0JBQ0ksU0FBUyxFQUFFLE9BQU87d0JBQ2xCLFVBQVUsRUFBRSxFQUFFO3dCQUNkLFdBQVcsRUFBRSxjQUFjO3dCQUMzQixFQUFFLEVBQUUsR0FBRzt3QkFDUCxLQUFLLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0Q7d0JBQ0ksU0FBUyxFQUFFLE9BQU87d0JBQ2xCLFVBQVUsRUFBRSxFQUFFO3dCQUNkLFdBQVcsRUFBRSxrQkFBa0I7d0JBQy9CLEVBQUUsRUFBRSxHQUFHO3dCQUNQLEtBQUssRUFBRSxXQUFXO3FCQUNyQjtpQkFDSixDQUFDO1lBQ04sQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7UUFDTCxhQUFDO0lBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtJQTNDWSx3QkFBTSIsImZpbGUiOiJ3ZWItYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdlYkFwaSB7XHJcbiAgICBwcml2YXRlIGNhdGVnb3JpZXM6IENhdGVnb3J5W107XHJcbiAgICBwdWJsaWMgaXNCdXN5OiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2F0ZWdvcmllcyhyZWZyZXNoOiBib29sZWFuID0gZmFsc2UpOiBDYXRlZ29yeVtdIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2F0ZWdvcmllcyB8fCByZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6ICdiaWxibycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVBvaW50czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCZWFuc3Byb3V0IExlbmd0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdhJyxcclxuICAgICAgICAgICAgICAgICAgICB1bml0czogJ2luY2hlcydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiAnYmlsYm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQb2ludHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29ybnN0YWxrIEhlaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdiJyxcclxuICAgICAgICAgICAgICAgICAgICB1bml0czogJ2luY2hlcydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiAnYmlsYm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQb2ludHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGVyY2lwaWF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuaXRzOiAnaW5jaGVzJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6ICdiaWxibycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVBvaW50czogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdIaWdoIFRlbXBlcmF0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ2QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuaXRzOiAnZGVncmVlcyBGJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllcztcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('menu/menu',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../web-api", "../shared/category-change"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, web_api_1, category_change_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Menu = (function () {
        function Menu(webApi, eventAggregator) {
            var _this = this;
            this.webApi = webApi;
            this.eventAggregator = eventAggregator;
            this.authenticated = true;
            this.categories = webApi.getCategories();
            this.selectedCategory = null;
            this.eventAggregator.subscribe(category_change_1.CategoryChange, function (message) { return _this.select(message.contact); });
        }
        Menu.prototype.select = function (category) {
            this.selectedCategory = category;
        };
        return Menu;
    }());
    Menu = __decorate([
        aurelia_framework_1.inject(web_api_1.WebApi, aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [web_api_1.WebApi, aurelia_event_aggregator_1.EventAggregator])
    ], Menu);
    exports.Menu = Menu;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLElBQUk7UUFLYixjQUFvQixNQUFjLEVBQVUsZUFBZ0M7WUFBNUUsaUJBS0M7WUFMbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUN4RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGdDQUFjLEVBQUUsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBQzVGLENBQUM7UUFFTSxxQkFBTSxHQUFiLFVBQWMsUUFBa0I7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNyQyxDQUFDO1FBQ0wsV0FBQztJQUFELENBZkEsQUFlQyxJQUFBO0lBZlksSUFBSTtRQURoQiwwQkFBTSxDQUFDLGdCQUFNLEVBQUUsMENBQWUsQ0FBQzt5Q0FNQSxnQkFBTSxFQUEyQiwwQ0FBZTtPQUxuRSxJQUFJLENBZWhCO0lBZlksb0JBQUkiLCJmaWxlIjoibWVudS9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgV2ViQXBpIH0gZnJvbSAnLi4vd2ViLWFwaSc7XHJcbmltcG9ydCB7IENhdGVnb3J5Q2hhbmdlIH0gZnJvbSAnLi4vc2hhcmVkL2NhdGVnb3J5LWNoYW5nZSc7XHJcblxyXG5AaW5qZWN0KFdlYkFwaSwgRXZlbnRBZ2dyZWdhdG9yKVxyXG5leHBvcnQgY2xhc3MgTWVudSB7XHJcbiAgICBwdWJsaWMgYXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdO1xyXG4gICAgcHVibGljIHNlbGVjdGVkQ2F0ZWdvcnk6IENhdGVnb3J5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgd2ViQXBpOiBXZWJBcGksIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHdlYkFwaS5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoQ2F0ZWdvcnlDaGFuZ2UsIG1lc3NhZ2UgPT4gdGhpcy5zZWxlY3QobWVzc2FnZS5jb250YWN0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdChjYXRlZ29yeTogQ2F0ZWdvcnkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQvY2F0ZWdvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiJzcmMifQ==

define("shared/category", [],function(){});



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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('dashboard/category/category-detail',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../../shared/category-change", "../../web-api"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, category_change_1, web_api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CategoryDetail = (function () {
        function CategoryDetail(webApi, eventAggregator) {
            this.webApi = webApi;
            this.eventAggregator = eventAggregator;
        }
        CategoryDetail.prototype.activate = function (params, routeConfig) {
            var category = this.webApi.getCategories().find(function (c) { return c.id == params.id; });
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
            this.eventAggregator.publish(new category_change_1.CategoryChange(this.category));
        };
        return CategoryDetail;
    }());
    CategoryDetail = __decorate([
        aurelia_framework_1.inject(web_api_1.WebApi, aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [web_api_1.WebApi, aurelia_event_aggregator_1.EventAggregator])
    ], CategoryDetail);
    exports.CategoryDetail = CategoryDetail;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jYXRlZ29yeS9jYXRlZ29yeS1kZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBTUEsSUFBYSxjQUFjO1FBS3ZCLHdCQUFvQixNQUFjLEVBQVUsZUFBZ0M7WUFBeEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUM1RSxDQUFDO1FBRUQsaUNBQVEsR0FBUixVQUFTLE1BQU0sRUFBRSxXQUFXO1lBQ3hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7WUFDeEUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQzdFLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRywwQkFBMEIsQ0FBQztZQUM1QyxDQUFDO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQ0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFDTCxxQkFBQztJQUFELENBdEJBLEFBc0JDLElBQUE7SUF0QlksY0FBYztRQUQxQiwwQkFBTSxDQUFDLGdCQUFNLEVBQUUsMENBQWUsQ0FBQzt5Q0FNQSxnQkFBTSxFQUEyQiwwQ0FBZTtPQUxuRSxjQUFjLENBc0IxQjtJQXRCWSx3Q0FBYyIsImZpbGUiOiJkYXNoYm9hcmQvY2F0ZWdvcnkvY2F0ZWdvcnktZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBDYXRlZ29yeUNoYW5nZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jYXRlZ29yeS1jaGFuZ2UnO1xyXG5pbXBvcnQgeyBXZWJBcGkgfSBmcm9tICcuLi8uLi93ZWItYXBpJztcclxuXHJcbkBpbmplY3QoV2ViQXBpLCBFdmVudEFnZ3JlZ2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeURldGFpbCB7XHJcbiAgICBwdWJsaWMgY2F0ZWdvcnk6IENhdGVnb3J5O1xyXG4gICAgcHVibGljIG9yaWdpbmFsQ2F0ZWdvcnk6IENhdGVnb3J5O1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJBcGk6IFdlYkFwaSwgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhY3RpdmF0ZShwYXJhbXMsIHJvdXRlQ29uZmlnKSB7XHJcbiAgICAgICAgdmFyIGNhdGVnb3J5ID0gdGhpcy53ZWJBcGkuZ2V0Q2F0ZWdvcmllcygpLmZpbmQoYyA9PiBjLmlkID09IHBhcmFtcy5pZCk7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNhdGVnb3J5KSk7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmNhdGVnb3J5LmRlc2NyaXB0aW9uICsgJygnICsgdGhpcy5jYXRlZ29yeS51bml0cyArICcpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gXCJTZWxlY3Qgb3IgQWRkIGEgQ2F0ZWdvcnlcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgQ2F0ZWdvcnlDaGFuZ2UodGhpcy5jYXRlZ29yeSkpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"purecss/build/pure-min.css\"></require><require from=\"./app.css\"></require><require from=\"./side-menu.css\"></require><require from=\"./menu/menu\"></require><require from=\"./dashboard/about/about\"></require><require from=\"./dashboard/contact/contact\"></require><require from=\"./dashboard/about/about\"></require><div id=\"layout\"><a href=\"#menu\" id=\"menuLink\" class=\"menu-link\"><span></span></a><div id=\"menu\"><menu style=\"margin:0 0 0 -40px\"></menu></div><div id=\"main\"><router-view></router-view></div></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = ".pure-button-success,\r\n.pure-button-error,\r\n.pure-button-warning,\r\n.pure-button-secondary {\r\n\tcolor: white;\r\n\tborder-radius: 4px;\r\n\ttext-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.pure-button-success {\r\n\tbackground: rgb(28, 184, 65); /* this is a green */\r\n}\r\n\r\n.pure-button-error {\r\n\tbackground: rgb(202, 60, 60); /* this is a maroon */\r\n}\r\n\r\n.pure-button-warning {\r\n\tbackground: rgb(223, 117, 20); /* this is an orange */\r\n}\r\n\r\n.pure-button-secondary {\r\n\tbackground: rgb(66, 184, 221); /* this is a light blue */\r\n}"; });
define('text!side-menu.css', ['module'], function(module) { module.exports = "body {\n    color: #777;\n}\n\n.pure-img-responsive {\n    max-width: 100%;\n    height: auto;\n}\n\n/*\nAdd transition to containers so they can push in and out.\n*/\n#layout,\n#menu,\n.menu-link {\n    -webkit-transition: all 0.2s ease-out;\n    -moz-transition: all 0.2s ease-out;\n    -ms-transition: all 0.2s ease-out;\n    -o-transition: all 0.2s ease-out;\n    transition: all 0.2s ease-out;\n}\n\n/*\nThis is the parent `<div>` that contains the menu and the content area.\n*/\n#layout {\n    position: relative;\n    left: 0;\n    padding-left: 0;\n}\n    #layout.active #menu {\n        left: 220px;\n        width: 220px;\n    }\n\n    #layout.active .menu-link {\n        left: 220px;\n    }\n/*\nThe content `<div>` is where all your content goes.\n*/\n.content {\n    margin: 0 auto;\n    padding: 0 2em;\n    max-width: 800px;\n    margin-bottom: 50px;\n    line-height: 1.6em;\n}\n\n.header {\n     margin: 0;\n     color: #333;\n     text-align: center;\n     padding: 2.5em 2em 0;\n     border-bottom: 1px solid #eee;\n }\n    .header h1 {\n        margin: 0.2em 0;\n        font-size: 3em;\n        font-weight: 300;\n    }\n     .header h2 {\n        font-weight: 300;\n        color: #ccc;\n        padding: 0;\n        margin-top: 0;\n    }\n\n.content-subhead {\n    margin: 50px 0 20px 0;\n    font-weight: 300;\n    color: #888;\n}\n\n\n\n/*\nThe `#menu` `<div>` is the parent `<div>` that contains the `.pure-menu` that\nappears on the left side of the page.\n*/\n\n#menu {\n    margin-left: -220px; /* \"#menu\" width */\n    width: 220px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    z-index: 1000; /* so the menu or its navicon stays above all content */\n    background: #191818;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n}\n    /*\n    All anchors inside the menu should be styled like this.\n    */\n    #menu a {\n        color: #999;\n        border: none;\n        padding: 0.6em 0 0.6em 0.6em;\n    }\n\n    /*\n    Remove all background/borders, since we are applying them to #menu.\n    */\n     #menu .pure-menu,\n     #menu .pure-menu ul {\n        border: none;\n        background: transparent;\n    }\n\n    /*\n    Add that light border to separate items into groups.\n    */\n    #menu .pure-menu ul,\n    #menu .pure-menu .menu-item-divided {\n        border-top: 1px solid #333;\n    }\n        /*\n        Change color of the anchor links on hover/focus.\n        */\n        #menu .pure-menu li a:hover,\n        #menu .pure-menu li a:focus {\n            background: #333;\n        }\n\n    /*\n    This styles the selected menu item `<li>`.\n    */\n    #menu .pure-menu-selected,\n    #menu .pure-menu-heading {\n        background: #1f8dd6;\n    }\n        /*\n        This styles a link within a selected menu item `<li>`.\n        */\n        #menu .pure-menu-selected a {\n            color: #fff;\n        }\n\n    /*\n    This styles the menu heading.\n    */\n    #menu .pure-menu-heading {\n        font-size: 110%;\n        color: #fff;\n        margin: 0;\n    }\n\n/* -- Dynamic Button For Responsive Menu -------------------------------------*/\n\n/*\nThe button to open/close the Menu is custom-made and not part of Pure. Here's\nhow it works:\n*/\n\n/*\n`.menu-link` represents the responsive menu toggle that shows/hides on\nsmall screens.\n*/\n.menu-link {\n    position: fixed;\n    display: block; /* show this only on small screens */\n    top: 0;\n    left: 0; /* \"#menu width\" */\n    background: #000;\n    background: rgba(0,0,0,0.7);\n    font-size: 10px; /* change this value to increase/decrease button size */\n    z-index: 10;\n    width: 2em;\n    height: auto;\n    padding: 2.1em 1.6em;\n}\n\n    .menu-link:hover,\n    .menu-link:focus {\n        background: #000;\n    }\n\n    .menu-link span {\n        position: relative;\n        display: block;\n    }\n\n    .menu-link span,\n    .menu-link span:before,\n    .menu-link span:after {\n        background-color: #fff;\n        width: 100%;\n        height: 0.2em;\n    }\n\n        .menu-link span:before,\n        .menu-link span:after {\n            position: absolute;\n            margin-top: -0.6em;\n            content: \" \";\n        }\n\n        .menu-link span:after {\n            margin-top: 0.6em;\n        }\n\n\n/* -- Responsive Styles (Media Queries) ------------------------------------- */\n\n/*\nHides the menu at `48em`, but modify this based on your app's needs.\n*/\n@media (min-width: 48em) {\n\n    .header,\n    .content {\n        padding-left: 2em;\n        padding-right: 2em;\n    }\n\n    #layout {\n        padding-left: 220px; /* left col width \"#menu\" */\n        left: 0;\n    }\n    #menu {\n        left: 220px;\n    }\n\n    .menu-link {\n        position: fixed;\n        left: 220px;\n        display: none;\n    }\n\n    #layout.active .menu-link {\n        left: 220px;\n    }\n}\n\n@media (max-width: 48em) {\n    /* Only apply this when the window is small. Otherwise, the following\n    case results in extra padding on the left:\n        * Make the window small.\n        * Tap the menu to trigger the active state.\n        * Make the window large again.\n    */\n    #layout.active {\n        position: relative;\n        left: 220px;\n    }\n}\n"; });
define('text!menu/menu.html', ['module'], function(module) { module.exports = "<template><div class=\"pure-menu\"><a class=\"pure-menu-heading\" href=\"#\">TrackIt</a><ul class=\"pure-menu-list\"><li if.bind=\"!authenticated\" class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\"><i class=\"fa fa-lg fa-sign-in\"></i>&nbsp;&nbsp;Sign In</a></li><li if.bind=\"authenticated\" class=\"pure-menu-item\"><button class=\"pure-button\"><i class=\"fa fa-lg fa-refresh\"></i></button> <button class=\"pure-button pure-button-success\"><i class=\"fa fa-lg fa-plus\"></i></button> <button class=\"pure-button pure-button-error\"><i class=\"fa fa-lg fa-remove\"></i></button></li><li if.bind=\"authenticated\" class=\"pure-menu-item\" repeat.for=\"category of categories\"><a class=\"pure-menu-link\" route-href=\"route: dashboard; params.bind: {id:category.id}\">${category.description}</a></li><li class=\"pure-menu-item menu-item-divided\"><a href=\"#/about\" class=\"pure-menu-link\"><i class=\"fa fa-lg fa-question-circle\"></i>&nbsp;&nbsp;About</a></li><li class=\"pure-menu-item\"><a href=\"#/contact\" class=\"pure-menu-link\"><i class=\"fa fa-lg fa-envelope\"></i>&nbsp;&nbsp;Contact</a></li><li if.bind=\"authenticated\" class=\"pure-menu-item menu-item-divided\"><a href=\"#\" class=\"pure-menu-link\"><i class=\"fa fa-lg fa-sign-out\"></i>&nbsp;&nbsp;Sign Bilbo Out</a></li></ul></div></template>"; });
define('text!dashboard/about/about.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><h1>${title}</h1></div><div class=\"content\"><h3 class=\"content-subhead\">Sub-heading</h3><p>Some text.</p></div></template>"; });
define('text!dashboard/category/category-detail.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><h1>${title}</h1></div><div class=\"content\"></div></template>"; });
define('text!dashboard/contact/contact.html', ['module'], function(module) { module.exports = "<template><div class=\"header\"><h1>${title}</h1></div><div class=\"content\"><h3 class=\"content-subhead\">Subheading</h3><p>Some text.</p></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
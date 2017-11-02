import { Config } from 'angular-ecmascript/module-helpers';
 
import compassTemplateUrl from '../templates/compass.html';
import tabsTemplateUrl from '../templates/tabs.html';
 
export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: tabsTemplateUrl
      })
      .state('tab.compass', {
        url: '/compass',
        views: {
          'tab-compass': {
            templateUrl: compassTemplateUrl,
            controller: 'CompassCtrl as compass'
          }
        }
      });
 
    this.$urlRouterProvider.otherwise('tab/compass');
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
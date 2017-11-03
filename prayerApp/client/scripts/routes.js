import { Config } from 'angular-ecmascript/module-helpers';
 
import compassTemplateUrl from '../templates/compass.html';
import timingTemplateUrl from '../templates/timing.html';
import notificationsTemplateUrl from '../templates/notifications.html';
import settingsTemplateUrl from '../templates/settings.html';
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
      })
      .state('tab.timing', {
        url: '/timing',
        views: {
          'tab-timing': {
            templateUrl: timingTemplateUrl,
            controller: 'TimingCtrl as timing'
          }
        }
      })
      .state('tab.notifications', {
        url: '/notifications',
        views: {
          'tab-notifications': {
            templateUrl: notificationsTemplateUrl,
            controller: 'NotificationsCtrl as notifications'
          }
        }
      })
      .state('tab.settings', {
        url: '/settings',
        views: {
          'tab-settings': {
            templateUrl: settingsTemplateUrl,
            controller: 'SettingsCtrl as settings'
          }
        }
      });
 
    this.$urlRouterProvider.otherwise('tab/compass');
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
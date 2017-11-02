import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';
 
// Modules
import CompassCtrl from '../controllers/compass.controller';
import RoutesConfig from '../routes'; 

var App = 'PrayerApp';
 
// App
Angular.module(App, [
  'angular-meteor',
  'ionic'
]);
 
new Loader(App)
  .load(CompassCtrl)
  .load(RoutesConfig);

// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}
 
function onReady() {
  Angular.bootstrap(document, [App]);
}
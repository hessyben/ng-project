import angular from "angular";
import uiRouter from "angular-ui-router";
import router from "./router";

import home from "./modules/home/index.js";

(function(){
    'use strict';
    var app = angular.module("app", [
          "ui.router",
          "app.home"
    ]);
    app.config(router);
    angular.element(document).ready(function() {
         angular.bootstrap(document, ["app"]);
    });
     
}());


import angular from "angular";
import homeCtrl from "./config.ctrl.js";

const homeModule = angular.module("app.home", []);
homeModule.controller("homeCtrl", homeCtrl);

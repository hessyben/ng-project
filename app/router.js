router.$inject = ["$stateProvider", "$urlRouterProvider"];
function router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "modules/home/home.html",
            controller: "homeCtrl",
            controllerAs: "home"
        })
}

export default router;
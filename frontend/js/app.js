let app = new angular.module('pizza', ['ngRoute']);


app.run(function ($rootScope){
    $rootScope.title = "Terracotta pie";
    $rootScope.author = "ZB";
    $rootScope.year = new Date().getFullYear();
})

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        controller: "mainCtrl",
        templateUrl: "views/main.html"
    })
    .when('/add', {
        controller: "addCtrl",
        templateUrl: "views/add.html"
    })
    .when('/update/:id', {
        controller: "updateCtrl",
        templateUrl: "views/update.html"
    })
    .otherwise('/')

});
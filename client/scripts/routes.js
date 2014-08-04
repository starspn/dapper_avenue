/**
 * Created by sibusiso on 2014/08/05.
 */
dapperApp.config(function($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl:'client/views/main.html',
            controller:'mainController'
        })
        .when('/about',{
            templateUrl:'client/views/about.html',
            controller:'mainController'
        })
        .when('/howitworks',{
            templateUrl:'client/views/howitworks.html',
            controller:'mainController'
        })
        .when('/journal',{
            templateUrl:'client/views/journal.html',
            controller:'mainController'
        })
});
/**
 * Created by sibusiso on 2014/08/05.
 */
var dapperApp = angular.module('dapperApp',['ngRoute','ui.bootstrap']);

dapperApp.config(function($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl:'client/views/home.html',
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
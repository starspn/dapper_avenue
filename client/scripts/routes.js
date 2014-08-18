/**
 * Created by sibusiso on 2014/08/05.
 */
dapperApp.config(function($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl:'/views/main.html',
            controller:'mainController'
        })
        .when('/about',{
            templateUrl:'/views/about.html',
            controller:'mainController'
        })
        .when('/howitworks',{
            templateUrl:'/views/howitworks.html',
            controller:'mainController'
        })
        .when('/journal',{
            templateUrl:'/views/journal.html',
            controller:'mainController'
        })
        .when('/carouselmodal',{
            templateUrl:'/views/modal-carousel.html',
            controller:'ModalController'
        })
});
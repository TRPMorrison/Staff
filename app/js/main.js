;
(function() {

    'use strict';

    angular.module('staff', ['ngRoute'])

    .config(function($routeProvider) {
        $routeProvider

            .when('/', {
            templateUrl: '.js/dashboard/dashboard.tpl.html',
            controller: 'Dashboard'
        })

        .when('/login', {
            templateUrl: '.js/login/login.tpl.html',
            controller: 'Login'
        })

        .when('/logout', {
            templateUrl: '.js/logout/logout.tpl.html',
            controller: 'Logout'
        })

        .when('/register', {
            templateUrl: '.js/register/register.tpl.html',
            controller: 'Register'
        })

        .when('/private', {
            templateUrl: '.js/private/private.tpl.html',
            controller: 'Private'
        })

        .when('/public', {
            templateUrl: '.js/public/public.tpl.html',
            controller: 'Public'
        })

        .when('/search', {
            templateUrl: '.js/search/search.tpl.html',
            controller: 'Search'
        });

    });


}());

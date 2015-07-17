$(document).ready(function(){
      $('.parallax').parallax();
    });
 $('.modal-trigger').leanModal({
   dismissible: true, // Modal can be dismissed by clicking outside of the modal
   opacity: '.5', // Opacity of modal background
   in_duration: 300, // Transition in duration
   out_duration: 200, // Transition out duration
   ready: function() {
     // alert('Ready');
   }, // Callback for Modal open
   complete: function() {
       // alert('Closed');
     } // Callback for Modal close
 });




 // ;(function() {

 //   'use strict';

 //   angular.module('staff', ['ngRoute', 'ui.router', 'ngCookies', 'UserModule'])

 //   .constant('PARSE', {
 //     URL: 'https://api.parse.com/1/',
 //     CONFIG: {
 //       headers: {
 //         'X-Parse-Application-Id': 'JkvjX6JIKiOArqMEloPtlQuc6vSHtjlpE1MLBwZ3',
 //         'X-Parse-REST-API-Key': 'EHWEn2vW3pwTh7Qxg1PFUq25Rn8YyCyV2tVsDQEF'
 //       }
 //     }
 //   })

 //   .config(['$routeProvider',
 //     function($routeProvider) {

 //       $routeProvider.when('/', {
 //         templateUrl: '.js/dashboard/dashboard.tpl.html',
 //         controller: 'Dashboard'
 //       })

 //       .when('/login', {
 //         templateUrl: '.js/login/login.tpl.html',
 //         controller: 'Login'
 //       })

 //       .when('/logout', {
 //         templateUrl: '.js/logout/logout.tpl.html',
 //         controller: 'Logout'
 //       })

 //       .when('/register', {
 //         templateUrl: '.js/register/register.tpl.html',
 //         controller: 'Register'
 //       })

 //       .when('/private', {
 //         templateUrl: '.js/private/private.tpl.html',
 //         controller: 'Private'
 //       })

 //       .when('/public', {
 //         templateUrl: '.js/public/public.tpl.html',
 //         controller: 'Public'
 //       })

 //       .when('/search', {
 //         templateUrl: '.js/search/search.tpl.html',
 //         controller: 'Search'
 //       });

 //     }

 //   ]);


 // }());


 // ;(function() {

 //   'use strict';

 //   angular.module('staff', ['ngRoute', 'ui.router', 'ngCookies', 'UserModule'])

 //   .config(function($routeProvider) {
 //       $routeProvider


 //   .constant('PARSE', {
 //       URL: 'https://api.parse.com/1/',
 //       CONFIG: {
 //         headers: {
 //           'X-Parse-Application-Id': 'JkvjX6JIKiOArqMEloPtlQuc6vSHtjlpE1MLBwZ3',
 //           'X-Parse-REST-API-Key': 'EHWEn2vW3pwTh7Qxg1PFUq25Rn8YyCyV2tVsDQEF',
 //           'Content-Type': 'application/json'
 //         }
 //       }
 //     })
 // .config(function($stateProvider, $urlRouterProvider) {

 //   $urlRouterProvider.otherwise('/');

 //   $routeProvider

 //   .when('/', {
 //   templateUrl: '.js/dashboard/dashboard.tpl.html',
 //   controller: 'Dashboard'
 // })

 // .when('/login', {
 //     templateUrl: '.js/user/login.tpl.html',
 //     controller: 'Login'
 // })

 // .when('login', {
 //   url: '/',
 //   templateUrl: 'js/user/login.tpl.html',
 //   controller: 'User'
 // })

 // .when('/register', {
 //     templateUrl: '.js/user/register.tpl.html',
 //     controller: 'Register'
 // })

 //       .when('register', {
 //         url: '/register',
 //         templateUrl: 'js/user/register.tpl.html',
 //         controller: 'User'
 //       })

 //       .when('/private', {
 //         templateUrl: '.js/private/private.tpl.html',
 //         controller: 'Private'
 //       })

 //       .when('/public', {
 //         templateUrl: '.js/public/public.tpl.html',
 //         controller: 'Public'
 //       })

 //       .when('/search', {
 //         templateUrl: '.js/search/search.tpl.html',
 //         controller: 'Search'
 //       });


 //     })

 //   .run(['$rootScope', 'UserFactory', 'PARSE',

 //     function($rootScope, UserFactory, PARSE) {

 //       $rootScope.$on('$routeChangeStart', function() {

 //         // Run my Login Status
 //         UserFactory.status();

 //       });

 //     }

 //   ]);


 // }());

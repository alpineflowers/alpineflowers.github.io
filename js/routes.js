angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.alpineFlowers', {
    url: '/home',
    views: {
      'tab2': {
        templateUrl: 'templates/alpineFlowers.html',
        controller: 'alpineFlowersCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.identificationFeatures'
      2) Using $state.go programatically:
        $state.go('tabsController.identificationFeatures');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /home/tab2/IDfeatures
      /home/tab3/IDfeatures
  */
  .state('tabsController.identificationFeatures', {
    url: '/IDfeatures',
    views: {
      'tab2': {
        templateUrl: 'templates/identificationFeatures.html',
        controller: 'identificationFeaturesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/identificationFeatures.html',
        controller: 'identificationFeaturesCtrl'
      }
    }
  })

  .state('tabsController.botanicalTerms', {
    url: '/glossary',
    views: {
      'tab2': {
        templateUrl: 'templates/botanicalTerms.html',
        controller: 'botanicalTermsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/home',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.plantName'
      2) Using $state.go programatically:
        $state.go('tabsController.plantName');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /home/tab2/plantnames
      /home/tab1/plantnames
  */
  .state('tabsController.plantName', {
    url: '/plantnames',
    views: {
      'tab2': {
        templateUrl: 'templates/plantName.html',
        controller: 'plantNameCtrl'
      },
      'tab1': {
        templateUrl: 'templates/plantName.html',
        controller: 'plantNameCtrl'
      }
    }
  })

  .state('tabsController.contactUs', {
    url: '/contact',
    views: {
      'tab4': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/home/home')


});
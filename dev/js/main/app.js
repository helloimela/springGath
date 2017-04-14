var app = angular.module('sthlm2017', [
  'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
    .when("/home", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
    .when("/howto",{templateUrl: "partials/howto.html", controller: "HomeCtrl"});
    // Pages

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
}]);

app.controller('MainCtrl', ['$http','$scope','$location',function($http, $scope, $location){
	$scope.go = function ( path ) {
	  $location.path( path );
	};
}]);

app.controller('HomeCtrl', ['$http','$scope','$location',function($http, $scope, $location){
  $scope.modal= {
      show: false
    };

    $scope.imageUrl='';
  
  $scope.toggleModal = function(img){
    $scope.modal.show = !($scope.modal.show);
    $scope.imageUrl = img;
  };

  $scope.locations=[{
    question:'Here takes place the ceremonial activity of changing those in charge of protecting the head of state.',
    bonusPoint:'img/09.jpg'
  },{
    question:'The democratic representatives of the people congregate here, shaping the country.',
    bonusPoint:'img/10.jpg'
  },{
    question:'Where you can see a statue of one of Sweden’s most respected musicians, Evert Taube',
    bonusPoint:'img/06.jpg'
  },{
    question:'Where you can see the most photographed buildings in STHLM',
    bonusPoint:'img/07.jpg'
  },{
    question:'Where you can step your feet at the very centre point of the Swedish capital',
    bonusPoint:'img/08.jpg'
  }];
}]);

app.directive('modal',function(){
  return {
      restrict: 'E',
      transclude: true,
      scope: {
        showModal: '=',
        modalUrl: '=info'
      },
      template: '<div class="modal-wrapper" ng-show="showModal" ng-click="modalClicked()">'+
                '<div class="rows">'+
                  '<div class="col-md-offset-3 col-md-6 col-sm-12">'+
                    '<img ng-src="{{modalUrl}}" class="image-modal">'+
                  '</div>'+
                  '<div class="col-sm-12 pull-center"><a href="" class="h4" ng-click="modalClicked()">Close</a></div>'+
                '</div>'+
              '</div>',
      link: function (scope, element, attrs) {
        
        scope.modalClicked = function () {
          scope.showModal = false;
        }
      }
    }
});
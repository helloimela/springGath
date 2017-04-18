var app = angular.module('sthlm2017', [
  'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
    .when("/home", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
    .when("/group", {templateUrl: "partials/group.html", controller: "HomeCtrl"})
    .when("/howto",{templateUrl: "partials/howto.html", controller: "HomeCtrl"});
    // Pages

    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
}]);

app.controller('MainCtrl', ['$http','$scope','$location',function($http, $scope, $location){
	$scope.mobileNav='';
  $scope.go = function ( path ) {
	  $location.path( path );
	};
  $scope.goMenu = function ( path ) {
    $location.path( path );
    $scope.mobileNav=($scope.mobileNav==='')?'in':'';
  };
  $scope.menuClick = function(){
    $scope.mobileNav=($scope.mobileNav==='')?'in':'';
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
    question:'My sides are yellow-coloured; the eerie music will guide you through me.',
    bonusPoint:'img/04.jpg'
  },{
    question:'The width of an arm span at the narrowest, I am named after a German-born trader.',
    bonusPoint:''
  },{
    question:'Overlooking the skyline of Gamla Stan and Nörrmalm is a place where one can dine in the sky.',
    bonusPoint:'img/03.jpg'
  },{
    question:'Where you can step your feet at the very centre point of the Swedish capital.',
    bonusPoint:'img/07.jpg'
  },{
    question:'I am an island where one can see the sunboat. I am an island where one can see a statue of a famous Swedish musician. I am an island where one can see what was once a luxury yacht moored.',
    bonusPoint:'img/05.jpg'
  },{
    question:'Here takes place the ceremonial activity of changing those in charge of protecting the head of state.',
    bonusPoint:'img/08.jpg'
  },{
    question:'The democratic representatives of the people congregate here, shaping the country.',
    bonusPoint:'img/09.jpg'
  },{
    question:'The food feast upon the bestowal of the Nobel prize takes place here.',
    bonusPoint:'img/10.jpg'
  },{
    question:'The focal point of multiple transportation modes.',
    bonusPoint:'img/11.jpg'
  },{
    question:'I host remnants of a 17th century-naval instrument of war.',
    bonusPoint:'img/12.jpg'
  },{
    question:'Though many museums are located on Djurgården, I can show you the cultural history of this country.',
    bonusPoint:'img/13.jpg'
  },{
    question:'Now moored next to the bridge of crowns, my masts are without sails.',
    bonusPoint:'img/15.jpg'
  },{
    question:'Very popular with both locals and tourists alike, one may have seen it pictured with a red house on the left and a yellow house on the right.',
    bonusPoint:''
  },{
    question:'A place to skate in the winter, a place to see pink flower petals in the spring.',
    bonusPoint:'img/01.jpg'
  },{
    question:'I decorate myself with crowns. I seek to connect two masses of lands that are separated by water.',
    bonusPoint:'img/14.jpg'
  }];

  $scope.groups=[{
    title:'Kelompok 1',
    members:['Abdul Kadir Mukarram','Reskandi Chastelia Rudjito','Fitriandika Nurenza','Iwan darmadi']
  },{
    title:'Kelompok 2',
    members:['Abraham Setiawan','Titi Sari Nurul Rachmawati','Tamara Adys Nabila','Yuda Chryspian Colombus']
  },{
    title:'Kelompok 3',
    members:['Agung Chris','Reza Fachrizal','Khalida','Nora Nindi Arista']
  },{
    title:'Kelompok 4',
    members:['Aidilla Pradini','Jeffry Leonardo William','Marlodieka Wibawa','Fatimah Ilona Asa Sabsono']
  },{
    title:'Kelompok 5',
    members:['Suci Layung Sari','Resti Kinanti Rudjito','Nanda Asridinan Noor','Immanuel Sanka']
  },{
    title:'Kelompok 6',
    members:['Alicia Nevriana','Ramadhan Sagala','Rizka Pravitianasari','Jody Raditya Hanindyawan Handoko']
  },{
    title:'Kelompok 7',
    members:['Annisa Sarah','Wibie Christianto','Stefio Yosse Andrean','Kartika Dyah Palupi']
  },{
    title:'Kelompok 8',
    members:['Dintani Yudhitya Noorzakiah Naimah','Agus Salam','Topan Rahmatul Iman','Made Sania Saraswati']
  },{
    title:'Kelompok 9',
    members:['Gregorius Kristian Purwidi','Uri arta ramadhani','Yasmin Nabila','Michael Wijaya Saputra ']
  },{
    title:'Kelompok 10',
    members:['Hilfi Amri','Angela Sima Nariswari','Habib Hamidy','Nadhirah Seraphine']
  },{
    title:'Kelompok 11',
    members:['Ilman Nuran Zaini','Kiki Rizki','Bayu Ardiyanto','Nuruddin Kamil']
  },{
    title:'Kelompok 12',
    members:['Iqlima Fuqoha','Philipe Gunawan','Christianto Chandra Kusuma','Rahmanu Hermawan']
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
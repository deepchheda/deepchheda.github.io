var neuApp = angular.module('neuApp',['ngRoute','ngResource']);

neuApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/myNeu Central.html',
            controller: 'homeController'
        }).  
        when('/home', {
            templateUrl: 'views/x.html',
             controller: 'myNeuCentralController'
        }).    
        when('/myNeu Central', {
            templateUrl: 'views/myNeu Central.html',
             controller: 'myNeuCentralController'
        }).              
        when('/Self-Service', {
            templateUrl: 'views/myNeu Central.html',
             controller: 'selfServiceController'
        }).
        when('/Community', {
            templateUrl: 'views/myNeu Central.html',
            controller: 'communityController'
        }).
        when('/Experential Learning/Co-op', {
            templateUrl: 'views/myNeu Central.html',
            controller:'coopController'
        }).
        when('/careerDevelopment', {
            templateUrl: 'views/careerDevelopment.html'
        }).
        when('/Husky Nation', {
            templateUrl: 'views/myNeu Central.html',
            controller: 'homeController'
        }).
        when('/InfoChannels', {
           templateUrl: 'views/myNeu Central.html',
            controller: 'infoController'
        }).        
        when('/Career Development', {
             templateUrl: 'views/myNeu Central.html',
            controller: 'carreerController'
        }).        
        otherwise({
            redirectTo: '/'
        });

    // $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);


neuApp.factory('favService',function(){
        return {
         favourites: [{"header":"Welcome to myNeu",
  "id" : "dummy",
  "contentArray": [
        {
  "subContents":[
  {"link":"http://www.google.com",
      "linkTitle":"Volunteer",
      "description":"This page contains all your favourites from different tabs, to try out goto any of the tabs from the navbar on the top of the page. <b>Access all your favourite by clicking on the NEU logo </b>"}
    
    ]
        }
        ]
        }]
    };
});

neuApp.controller('navbarController', function($scope) {

    $scope.sections = ["Husky Nation","myNeu Central","Self-Service",
                       "Community","Experential Learning/Co-op","Career Development","InfoChannels"];   
    $scope.keywords = [{"Department": "Husky Nation", "Categories":["ayush", "deep", "akash", "surekha"]},
    {"Department": "myNeuCentral", "Categories":["ayush", "nishant", "sabrish", "tushar"]}];
});

neuApp.controller('homeController', ['$scope', '$http', 'favService',
    function($scope, $http, favService) {
        $scope.favourites = favService.favourites ;
        $http.get('js/huskyNation.json').success(function(data) {
            $scope.sections = data;
            console.log($scope.sections);
        })
        $scope.addToFav = function(section) {
            console.log(section);
        var add = true;
        if($scope.favourites.length===1 && $scope.favourites[0].id === 'dummy'){
            $scope.favourites.splice(0,1);
        }        
        for(var i=0;i<$scope.favourites.length;i++){
            if($scope.favourites[i].id===section.id){
                add = false;
            }
        }
        if(add) {
            $scope.favourites.push(section);        
        }
        console.log($scope.favourites);
        };
    }]);

neuApp.controller('myNeuCentralController', ['$scope', '$http', 'favService',
    function($scope, $http, favService) {
        $scope.favourites = favService.favourites ;
        $http.get('js/myNeuCentral.json').success(function(data) {
            $scope.sections = data;
            // console.log($scope.sections);
        })
        $scope.addToFav = function(section) {
            console.log(section);
            // console.log(section.isFav);
            var add = true;
            if($scope.favourites.length===1 && $scope.favourites[0].id === 'dummy'){
                $scope.favourites.splice(0,1);
            }              
            for(var i=0;i<$scope.favourites.length;i++){
                if($scope.favourites[i].id===section.id){
                    add = false;
                }
            }
            if(add) {
                $scope.favourites.push(section);        
            }
            console.log($scope.favourites);
            section.isFav = true;
            // console.log(section.isFav);
        }
        $scope.delFromFav = function(section) {
            console.log(section);   
            var index = $scope.favourites.indexOf(section);  
            $scope.favourites.splice(index, 1);
            console.log($scope.favourites);    
            // console.log(section.isFav);     
        };
    }]);

neuApp.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

neuApp.controller('selfServiceController', ['$scope', '$http', 'favService',
    function($scope, $http, favService) {
        $scope.favourites = favService.favourites ;
        $http.get('js/selfService.json').success(function(data) {
            $scope.sections = data;
            // console.log($scope.sections);
        })
        $scope.addToFav = function(section) {
            console.log(section);
            console.log(section.isFav);
            var add = true
            if($scope.favourites.length===1 && $scope.favourites[0].id === 'dummy'){
                $scope.favourites.splice(0,1);
            }  
            for(var i=0;i<$scope.favourites.length;i++){
                if($scope.favourites[i].id===section.id){
                    add = false;
                }
            }
            if(add) {
                $scope.favourites.push(section);        
            }
            console.log($scope.favourites);
            section.isFav = true;
            console.log(section.isFav);
        }
        $scope.delFromFav = function(section) {
            console.log(section);   
            var index = $scope.favourites.indexOf(section);  
            $scope.favourites.splice(index, 1);
            console.log($scope.favourites);    
            // console.log(section.isFav);     
        };
    }]);

neuApp.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

neuApp.controller('coopController', ['$scope', '$http', 'favService',
    function($scope, $http, favService) {
        $scope.favourites = favService.favourites ;
        $http.get('js/coop.json').success(function(data) {
            $scope.sections = data;
            // console.log($scope.sections);
        })
        $scope.addToFav = function(section) {
            console.log(section);
            console.log(section.isFav);
            var add = true;
            if($scope.favourites.length===1 && $scope.favourites[0].id === 'dummy'){
                $scope.favourites.splice(0,1);
            }              
            for(var i=0;i<$scope.favourites.length;i++){
                if($scope.favourites[i].id===section.id){
                    add = false;
                }
            }
            if(add) {
                $scope.favourites.push(section);        
            }
            console.log($scope.favourites);
            section.isFav = true;
            console.log(section.isFav);
        }
        $scope.delFromFav = function(section) {
            console.log(section);   
            var index = $scope.favourites.indexOf(section);  
            $scope.favourites.splice(index, 1);
            console.log($scope.favourites);    
            // console.log(section.isFav);     
        };
    }]);

neuApp.controller('communityController', ['$scope', '$http', 'favService',
    function($scope, $http, favService) {
        $scope.favourites = favService.favourites ;
        $http.get('js/community.json').success(function(data) {
            $scope.sections = data;
            // console.log($scope.sections);
        })
        $scope.addToFav = function(section) {
            console.log(section);
            console.log(section.isFav);
            var add = true;
            if($scope.favourites.length===1 && $scope.favourites[0].id === 'dummy'){
                $scope.favourites.splice(0,1);
            }              
            for(var i=0;i<$scope.favourites.length;i++){
                if($scope.favourites[i].id===section.id){
                    add = false;
                }
            }
            if(add) {
                $scope.favourites.push(section);        
            }
            console.log($scope.favourites);
            section.isFav = true;
            console.log(section.isFav);
        }
        $scope.delFromFav = function(section) {
            console.log(section);   
            var index = $scope.favourites.indexOf(section);  
            $scope.favourites.splice(index, 1);
            console.log($scope.favourites);    
            // console.log(section.isFav);     
        };
    }]);

neuApp.controller('infoController', ['$scope', '$http', 'favService',
    function($scope, $http, favService) {
        $scope.favourites = favService.favourites ;
        $http.get('js/infoChannels.json').success(function(data) {
            $scope.sections = data;
            // console.log($scope.sections);
        })
        $scope.addToFav = function(section) {
            console.log(section);
            console.log(section.isFav);
            var add = true;
            if($scope.favourites.length===1 && $scope.favourites[0].id === 'dummy'){
                $scope.favourites.splice(0,1);
            }              
            for(var i=0;i<$scope.favourites.length;i++){
                if($scope.favourites[i].id===section.id){
                    add = false;
                }
            }
            if(add) {
                $scope.favourites.push(section);        
            }
            console.log($scope.favourites);
            section.isFav = true;
            console.log(section.isFav);
        }
        $scope.delFromFav = function(section) {
            console.log(section);   
            var index = $scope.favourites.indexOf(section);  
            $scope.favourites.splice(index, 1);
            console.log($scope.favourites);    
            // console.log(section.isFav);     
        };
    }]);

neuApp.controller('carreerController', ['$scope', '$http', 'favService',
    function($scope, $http, favService) {
        $scope.favourites = favService.favourites ;
        $http.get('js/carrers.json').success(function(data) {
            $scope.sections = data;
            // console.log($scope.sections);
        })
        $scope.addToFav = function(section) {
            console.log(section);
            console.log(section.isFav);
            var add = true;
            if($scope.favourites.length===1 && $scope.favourites[0].id === 'dummy'){
                $scope.favourites.splice(0,1);
            }  
            for(var i=0;i<$scope.favourites.length;i++){
                if($scope.favourites[i].id===section.id){
                    add = false;
                }
            }
            if(add) {
                $scope.favourites.push(section);        
            }
            console.log($scope.favourites);
            section.isFav = true;
            console.log(section.isFav);
        }
        $scope.delFromFav = function(section) {
            console.log(section);   
            var index = $scope.favourites.indexOf(section);  
            $scope.favourites.splice(index, 1);
            console.log($scope.favourites);    
            // console.log(section.isFav);     
        };
    }]);

neuApp.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});



neuApp.controller('xController', function($scope, favourites) {
        $scope.favourites = favourites;
    });
var AnemaSoftwaresInc = angular.module('AnemaSoftwaresInc', ['ngRoute','ngSanitize']);
 
AnemaSoftwaresInc.config(function($routeProvider) {$routeProvider
.when('/', {templateUrl : 'view/Home.html?view='})
.when('/Page/:q', {templateUrl : 'view/Page.html?view='})
.when('/News', {templateUrl : 'view/News.html?view='})
.when('/Offers', {templateUrl : 'view/Offers.html?view='})
.when('/Tracksheets', {templateUrl : 'view/Tracksheets.html?view='})
.when('/Payment', {templateUrl : 'view/Payment.html?view='})
.when('/Blog', {templateUrl : 'view/Blog.html?view='})
.when('/Tips', {templateUrl : 'view/Tips.html?view='})
.when('/Contact', {templateUrl : 'view/Contact.html?view='})
.when('/Website', {templateUrl : 'view/Website.html?view='})
/*.otherwise({ redirectTo: '/Home/Indore'})*/
;
;});

 
AnemaSoftwaresInc.controller('MainController',function($scope,$http,$routeParams) {
$http.get("http://cdn.anemaindia.com/apps/bullmart/ajax/News.php",{cache: true}).success(function(response){$scope.News = response;});
$http.get("http://cdn.anemaindia.com/apps/bullmart/ajax/Offers.php",{cache: true}).success(function(response){$scope.Offers = response;});
$http.get("http://cdn.anemaindia.com/apps/bullmart/ajax/Payment.php",{cache: true}).success(function(response){$scope.Payment = response;});
 
});
 
 
AnemaSoftwaresInc.controller('TracksheetsController',function($scope,$http,$routeParams) {
$http.get("http://cdn.anemaindia.com/apps/bullmart/ajax/Tracksheets.php",{cache: true}) 
.success(function(response){$scope.Tracksheets = response;$scope.loading = false;});
$scope.TracksheetF = function(){
$http({ method:'POST',headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}, url:'http://cdn.anemaindia.com/apps/bullmart/ajax/Tracksheets.php?S&', data: $scope.TracksheetSearch})
.success(function(response){$scope.Tracksheets=response;
}).error(function(response){$scope.response=0;})
};

});

 
 
AnemaSoftwaresInc.controller('BlogController',function($scope,$http,$routeParams) {
$http.get("http://cdn.anemaindia.com/apps/bullmart/ajax/Blog.php",{xcache: true}) 
.success(function(response){$scope.Blog = response;$scope.loading = false;})
;
});

AnemaSoftwaresInc.controller('TipsController',function($scope,$http,$routeParams) {
$http.get("http://cdn.anemaindia.com/apps/bullmart/ajax/Tips.php",{xcache: true}) 
.success(function(response){$scope.Tips = response;$scope.loading = false;})
;
});
 

AnemaSoftwaresInc.controller('PageController',function($scope,$http,$routeParams) {
$scope.q=$routeParams.q;	
$http.get("http://cdn.anemaindia.com/apps/bullmart/ajax/Page.php?Page="+$routeParams.q,{cache: true}) 
.success(function(response){$scope.Page = response;$scope.loading = false;})
;
});
 

AnemaSoftwaresInc.controller('WebsiteController',function($scope,$http,$routeParams) {
$scope.Url=$routeParams.Url;
});

 
 

  
  
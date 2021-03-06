(function(){
 'use strict'

  angular.module('LunchCheck', [])
  .controller('LcController', LcController);

  LcController.$inject=['$scope','$filter'];

  function LcController($scope, $filter){
    $scope.lunchMenuList = "";
    $scope.message = "";
    $scope.fontColor = "green";
    $scope.borderColor = "";
    

  	$scope.checkList = function (){
	 	if(!$scope.lunchMenuList || $scope.lunchMenuList == ''){
	  		$scope.message = "Please enter data first";
	  		$scope.fontColor = " red";
	  		$scope.borderColor = " borderRed";
	  	}else {
	       var list = $scope.lunchMenuList.split(',');
	       if(list.length > 3){
	       	  $scope.message = "Too much";
	       	  $scope.fontColor = " red";
	       	  $scope.borderColor = " borderRed";
	       }else{
	       	$scope.message = "Enjoy";
	       	$scope.fontColor = " green";
	       	$scope.borderColor = "";
	       }
	  	 }
   };


  }

})(window);


(function() {
  'use strict';


  angular.module('filtros.data', []).filter('data', function($filter)
  {
   return function(entrada)
   {

     if(entrada == null){ return ""; }

     var _data = $filter('date')(entrada, 'dd-MM-yyyy');

     return _data.toUpperCase();

   };
 });

})();

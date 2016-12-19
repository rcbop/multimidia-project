(function() {
  'use strict';

  angular
  .module('multimidiaProject')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, mediaService, toastr) {
    var vm = this;

    vm.mediaTypes = [];
    vm.classAnimation = '';
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getMediaTypes();

      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr(message) {
      toastr.info(message);
      vm.classAnimation = '';
    }

    function getMediaTypes(){
      vm.mediaTypes = mediaService.getMediaTypes();
    }
  }
})();

(function() {
  'use strict';

  angular
  .module('multimidiaProject')
  .controller('PlayerController', playerController);

  /** @ngInject */
  function playerController($log, $scope, questionsService, toastr) {
    var vm = this;

    vm.videoEnded = false;
    vm.quiz = {};
    vm.questions = questionsService.getQuestions();

    $scope.$on('vjsVideoReady', function (e, data) {
      vm.video = data.player;

      vm.video.on('play', function () {
        vm.videoEnded = false;
        $log.log('Video playing ::', this.id());
      });

      vm.video.on('pause', function() {
        $log.log('Video paused ::');
      });

      vm.video.on('ended', function() {
        $log.log('Video ended ::');
        hideVideoAndShowQuiz();
      });
    });

    function hideVideoAndShowQuiz() {
      vm.videoEnded = true;
      $scope.showQuiz = true;
      vm.video.hide();
    }

    vm.validateAndSend = function (data) {
      toastr.info(data);
    };
  }
})();

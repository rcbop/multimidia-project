(function() {
  'use strict';

  angular
  .module('multimidiaProject')
  .controller('PlayerController', playerController);

  /** @ngInject */
  function playerController($log, $scope, questionsService, toastr, $window) {
    var vm = this;

    vm.validateForm = _validateForm;
    vm.videoEnded = false;
    vm.showQuiz = true;
    vm.questions = questionsService.getQuestions();

    $scope.$on('vjsVideoReady', function (e, data) {
      vm.video = data.player;

      vm.video.on('play', function () {
        vm.videoEnded = false;
        $log.log('Video playing ::');
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
      vm.showQuiz = true;
      vm.video.hide();
    }

    function _validateForm() {

      if (vm.videoEnded === false){
        toastr.warning('ATENÇÃO : Você ainda não terminou de ver o vídeo');
      } else {
        toastr.info('Calculando acertos!');
      }

      var correctAnswers = 0;
      angular.forEach(vm.questions, function(question) {
          if (question.radioValue == question.correct){
            correctAnswers = correctAnswers + 1;
          }
      });

      setTimeout(function(){
        var percentage =  correctAnswers / vm.questions.length * 100;

        toastr.info('Você acertou ' + percentage + "% do exame.", "Resultado", {timeOut: 3000});

        setTimeout(function(){
          $window.location.href = '/';
        }, 3000);

      }, 1000);

    }
  }
})();

(function() {
  'use strict';

  angular
      .module('multimidiaProject')
      .service('mediaService', mediaService);

  function mediaService() {
      var data = [
            {
              'title': 'Tutorial AWS EC2',
              'url': '/player',
              'description': 'Uma vídeo aula sobre o serviço EC2 da AWS',
              'logo': 'aws-icon.png',
              'message': 'Carregando video aula'
            },
            {
              'title': 'Livro de Sistemas Multimídia',
              'url': 'https://drive.google.com/open?id=0B3Sh8eYLj1ByZXNCaEVjZmIwaW8',
              'description': 'Livro da disciplina hospedado no google drive online no formato pdf',
              'logo': 'ms-book.png',
              'message': 'Abrindo pdf no Google drive'
            },
            {
              'title': 'Repositório GitHub',
              'url': 'https://github.com/rcbop/multimidia-project',
              'description': 'Repositório git no github com o código fonte da solução',
              'logo': 'github.gif',
              'message': 'Redirecionando'
            }
      ];

      this.getMediaTypes = getMediaTypes;

      function getMediaTypes(){
        return data;
      }
  }
})();

(function() {
  'use strict';

  angular
      .module('multimidiaProject')
      .service('midiaService', midiaService);

  function midiaService() {
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
              'description': 'Livro da discplina online no formato pdf',
              'logo': 'ms-book.png',
              'message': 'Abrindo pdf no Google drive'
            }
      ];

      this.getMidiaTypes = getMidiaTypes;

      function getMidiaTypes(){
        return data;
      }
  }
})();

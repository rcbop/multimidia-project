(function() {
  'use strict';

  angular
  .module('multimidiaProject')
  .service('questionsService', questionsService);

  /** @ngInject */
  function questionsService() {
    this.getQuestions = getQuestions;

    var questions = [
      { id: 1,
        qst: "O que significa EC2? ",
      alts: [
        { label: 'Economic Container Cloud.', value: 1 },
        { label: 'Elastic Compute Cloud.', value: 2, correct:true },
        { label: 'Eloquent Computers Cloud.', value: 3 },
        { label: 'Economic Computer Cluster.', value: 4 }]
      },
      { id: 2,
        qst: "Qual a maior vantagem do EC2?",
      alts: [
        { label: 'Reduz significativamente o tempo para escalar um serviço.', value: 1,correct:true },
        { label: 'Uma plataforma de computação na núvem infalível.', value: 2 },
        { label: 'Suporte dedicado exclusivo 24/7.', value: 3 },
        { label: 'Conexão de altíssima velocidade.', value: 4 }]
      },
      { id: 3,
        qst: "Quais as formas de cobrança? ",
      alts: [
        { label: 'Por hora e por dia', value: 1 },
        { label: 'Sob medida, por request e por quantidade', value: 2 },
        { label: 'Sob demanda, reservas por capacidade, preço variável por "spot"', value: 3,correct:true },
        { label: 'Por velocidade de internet e por tamanho da memória', value: 4 }]
      },
      { id: 4,
        qst: "Quais destes são tipos de instancia válidas de EC2? ",
      alts: [
        { label: 'T2.micro,F30.master,M4.micro', value: 1 },
        { label: 'T2,M3,M4', value: 2,correct:true },
        { label: 'I2,I33,Mig29', value: 3 },
        { label: '8086,Mips,86x64', value: 4 }]
      },
      { id: 5,
        qst: "O que significa EBS? ",
      alts: [
        { label: 'Elastic Beanstalk', value: 1 },
        { label: 'Elastic Boster Stack', value: 2 },
        { label: 'Elastic Block Store', value: 3,correct:true },
        { label: 'Elastic Black Stash', value: 4 }]
      }
    ];

    function getQuestions() {
      return questions;
    }
  }

})();

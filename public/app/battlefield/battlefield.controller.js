(function (){
  'use strict';
  angular
    .module('app')
	  .controller('BattlefieldController', BattlefieldController);

  BattlefieldController.$inject = ['battlefieldFactory', 'battlefieldLogicFactory'];

  function BattlefieldController(battlefieldFactory, battlefieldLogicFactory, $scope) {

    // abbreviate
    var vm = this;
    var bf = battlefieldFactory;

		vm.choices = bf.get('choices');
	  vm.setChoice = bf.setChoice;
    vm.winsAgainst = battlefieldLogicFactory.winsAgainst;
    vm.losesAgainst = battlefieldLogicFactory.losesAgainst;


    vm.getChoice = function(person) {
      return bf.get(person + 'Choice');
    };

    vm.getHealth = function(person) {
      return bf.get(person + 'Health');
    };

    vm.get = bf.get;

    vm.currentHover = '';



    vm.hover = function(choice) {
      console.log('hi');
      vm.currentHover = choice;
    };

    vm.unhover = function() {
      vm.currentHover = '';
    };
  }
})();
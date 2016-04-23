export function MaltDirective(){
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/malt/malt.html',
    scope: {
    },
    controller: MaltController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

export class MaltController {
	constructor() {
	
	}
}
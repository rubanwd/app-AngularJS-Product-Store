'use strict';

angular.
  module('mainPage').
  component('mainPage', {
    templateUrl: 'app-components/main-page/main-page.template.html',
    controller: ['Phone',
      function mainPageController(Phone) {

        let self = this;
        
        self.orderProp = 'age';

        self.product = Phone.query();

      }
    ]
  });

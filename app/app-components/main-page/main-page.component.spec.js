'use strict';

describe('mainPage Controller', function() {

  var $controller,
      $scope,
      QueryService;

  beforeEach(module('mainPage'));

  beforeEach(function () {

    QueryService = jasmine.createSpyObj('QueryService', [
      'query'
    ]); 

    module(function ($provide) {
      $provide.value('QueryService', QueryService);
    });

    QueryService.query();

  });

  beforeEach(inject(function($componentController, $rootScope) {

    $scope = $rootScope.$new();
    $controller = $componentController('mainPage', {
      $scope: $scope
    });

  }));

  it('should be defined and call services', function() {
    expect($controller).toBeDefined();
    expect(QueryService.query).toHaveBeenCalled();
  });

  it('test mainPage Controller props', function() {
    expect($controller.orderProp).toBe('age');
  });

});
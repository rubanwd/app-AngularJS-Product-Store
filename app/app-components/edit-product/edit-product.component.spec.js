'use strict';

describe('editProduct Controller', function() {

  var $controller,
      $scope,
      QueryService;

  beforeEach(module('editProduct'));

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
    $controller = $componentController('editProduct', {
      $scope: $scope
    });

    $controller.clearMessage();

  }));

  it('should be defined and call services', function() {
    expect($controller).toBeDefined();
    expect(QueryService.query).toHaveBeenCalled();
  });

  it('test editProduct Controller props', function() {
    expect($controller.setImage()).toBeUndefined();
    expect($controller.message).toBe(false);
  });

});
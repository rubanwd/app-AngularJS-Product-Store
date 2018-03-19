'use strict';

describe('singleProduct Controller', function() {

  var $controller,
      $scope,
      QueryService;

  beforeEach(module('singleProduct'));

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
    $controller = $componentController('singleProduct', {
      $scope: $scope
    });

  }));

  it('should be defined and call services', function() {
    expect($controller).toBeDefined();
    expect(QueryService.query).toHaveBeenCalled();
  });

  it('test singleProduct Controller props', function() {
    expect($controller.setImage()).toBeUndefined();
  });

});
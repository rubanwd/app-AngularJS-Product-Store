'use strict';

describe('editStore Controller', function() {

  var $controller,
      $scope,
      GetService,
      QueryService,
      GetServicePromise,
      QueryServicePromise;

  beforeEach(module('editStore'));

  beforeEach(function () {
    GetService = jasmine.createSpyObj('GetService', [
      'get',
      'save'
    ]);

    QueryService = jasmine.createSpyObj('QueryService', [
      'query'
    ]); 

    module(function ($provide) {
      $provide.value('GetService', GetService);
      $provide.value('QueryService', QueryService);
    });

    GetService.get();
    QueryService.query();


  });

  beforeEach(inject(function($componentController, $rootScope, $q) {

    // GetServicePromise = $q.defer();
    // QueryServicePromise = $q.defer();

    // GetService.get.and.returnValue({ $promise: GetServicePromise.promise });
    // QueryService.query.and.returnValue({ $promise: QueryServicePromise.promise });

    // GetServicePromise.resolve('MOCK DATA');
    // QueryServicePromise.resolve('MOCK DATA');

    $scope = $rootScope.$new();

    $controller = $componentController('editStore', {
      $scope: $scope
    });

    $controller.uploadFiles([]);
    $controller.clearMessage();
    $controller.selectProduct();

    

  }));

  it('should be defined and call services', function() {
    expect($controller).toBeDefined();
    expect(GetService.get).toHaveBeenCalled();
    expect(QueryService.query).toHaveBeenCalled();
  });

  it('test editStore Controller props', function() {
    expect($controller.orderProp).toBe('age');
    expect($controller.message).toBe(false);
    expect($controller.clickedProduct).toBeUndefined();
    expect($controller.newProduct).toEqual({});
    expect($controller.files).toEqual([]);
    expect($controller.errFiles).toBeUndefined();
  });

});

angular.
  module('api').
  
  factory('Phone', ['$resource',
    function($resource) {
      return $resource('http://localhost:3000' + '/:id', {id: '@_id'}, {
        
        query: {
            method: 'GET',
            isArray: true
        },

        save: {
            method: 'POST',
            isArray: false,
            url: 'http://localhost:3000'
        },

        update: {
            method: 'PUT'
        },

        delete: {
            method: 'DELETE',
            isArray: false
        }
        
      });
    }

  ]);

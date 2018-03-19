'use strict';

angular.
  	module('editProduct').
  	component('editProduct', {
    	templateUrl: 'app-components/edit-product/edit-product.template.html',
    	controller: ['Phone', '$routeParams', '$timeout',
      		function EditProductController(Phone, $routeParams, $timeout) {
      			
        		let self = this;

            self.message = "";

            self.setImage = function setImage(imageUrl) {
              self.mainImageUrl = imageUrl;
            };

            self.singleProduct = Phone.get({ id: $routeParams.productId }, function() {
              self.singleProduct.price = +self.singleProduct.price;
              self.setImage(self.singleProduct.images[0]);
            });

            console.log('message', self.singleProduct);

            self.saveEdit = function() {

                Phone.get({id: $routeParams.productId}).$promise.then(function(res) {

                    let e = res;

                    e.name = self.singleProduct.name;
                    e.snippet = self.singleProduct.snippet;
                    e.description = self.singleProduct.description;
                    e.price = self.singleProduct.price;

                    Phone.update(e)
                  
                });
              
                self.message = "All changes was completed successful!";

                $timeout(function () {
                  self.message = "";
                }, 3000);

            };

            self.clearMessage = function(){
              self.message = false;
            };
      		}
    	]
      
  	});
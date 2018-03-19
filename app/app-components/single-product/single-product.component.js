'use strict';

angular.
    module('singleProduct').
    component('singleProduct', {
      templateUrl: 'app-components/single-product/single-product.template.html',
      controller: ['Phone', '$routeParams',
          function SingleProductController(Phone, $routeParams) {
            
            let self = this;
            
            self.setImage = function setImage(imageUrl) {
              self.mainImageUrl = imageUrl;
            };

            self.singleProduct = Phone.get({ id: $routeParams.productId }, function() {
              self.setImage(self.singleProduct.images[0]);
            });

          }
      ]
    });
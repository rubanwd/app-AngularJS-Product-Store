'use strict';

angular.
  	module('editStore').
  		component('editStore', {

	 		templateUrl: 'app-components/edit-store/edit-store.template.html',

	 		controller: ['Phone', 'Upload', '$timeout',
				function EditStoreController(Phone, Upload, $timeout) {

		  			let self = this;

		  			self.orderProp = 'age';

		  			self.message = "";

		  			self.clickedProduct = {};


		  			// get all products

		  			self.product = Phone.query();
		  			
		  			// 

		  			self.newProduct = {};


		  			// Add images

				  	self.uploadFiles = function(files, errFiles) {


				        self.files = files;
				        self.errFiles = errFiles;

				        angular.forEach(files, function(file) {
				            file.upload = Upload.upload({
				                url: 'http://localhost:3000/upload-image',
				                file: file

				            });

				            file.upload.then(function (response) {
				                $timeout(function () {
				                    file.result = response.data;
				                });
				            }, function (response) {
				                if (response.status > 0)
				                    self.errorMsg = response.status + ': ' + response.data;
				            }, function (evt) {
				                file.progress = Math.min(100, parseInt(100.0 * 
				                                         evt.loaded / evt.total));
				            });

				        });
				        
				    }

				    //


		  			self.saveProduct = function() {

		  				// id core

			 			self.id = self.newProduct.name;
			 			function spaceToDash(value) {
							return value.replace(/\s+/g, '-').toLowerCase();
			 			};
			 			self.idToDash = spaceToDash(self.id);
			 			self.newProduct._id = self.idToDash;

			 			//
			 			

			 			// age core

			 			let newArray = self.product.map(function(item){
							return item.age;
						});
						let ageValue = newArray.sort(function(a,b){return b-a;})[0] + 1;
						if(!ageValue) {
							self.newProduct.age = 0;
						} else {
							self.newProduct.age = ageValue;
						}


						//


						// Add images core


						if (self.files) {

							let addImages = self.files.map(function(item) {
								let href = 'img/phones/';
								return href + item.name;
							});
							self.newProduct.images = addImages;

						} else {

							let defaultImage = ["img/phones/new-product.jpg"];
							self.newProduct.images = defaultImage;

						}



						// add core

			 			let result = Phone.save(JSON.stringify(self.newProduct));
			 			self.product.push(self.newProduct);
			 			self.newProduct = {
							_id: "",
					 		name: "",
					 		snippet: "",
					 		description: "",
					 
					 		price: null,
					 		age: null,

					 		images: []
			 			};

			 			//

			 			self.message = "New product was added successfully!";

			 			$timeout(function () {
			 				self.message = "";
			 			}, 3000);

			 
		  			};


		  			self.clearMessage = function(){
			 			self.message = false;
		 	 		};


		  			self.selectProduct = function(prod){
			 			self.clickedProduct = prod;
		  			};


		  			self.deleteProduct = function(){

		  				Phone.delete({id: self.clickedProduct._id}, function(resp){
						  console.log('This product was deleted successful!');
						});
			 			self.product.splice(self.product.indexOf(self.clickedProduct), 1);
		  			};

				}
	 		]

  	});

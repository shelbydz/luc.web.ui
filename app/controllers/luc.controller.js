/**
 *
 * Created by shawn on 5/29/15.
 */

(function() {

    var lucController = angular.module('lucController',[]);

    lucController.controller('dataController', ['$http',
        function(http){
            var model = {
                name: "",
                airDate: new Date(),
                writer: "",
            };
            var allSongs = {};

            var self = this;
            self.model = model;
            self.allSongs = allSongs;
            self.message = 'data';

            self.submit = function() {
                //TODO: rest call to submit data
              console.log('submitted ' + self.model.name + ' '  + self.model.airDate);
            };

            self.delete = function(id) {
                //TODO: rest call to delete data
                console.log('deleted ' + id);
            };

            self.retrieve = function() {
                //TODO: rest call to retrieve data
            }
        }



    ]);

    lucController.controller('adminController', ['$http',
        function(http){
            var self = this;
            self.message = 'admin';
        }
    ]);
})();

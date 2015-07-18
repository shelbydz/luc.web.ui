/**
 *
 * Created by shawn on 5/29/15.
 */

(function () {

    var lucController = angular.module('lucController', []);

    lucController.controller('dataController', ['$http', '$filter',
        function (http, filter) {
            var model = {
                name: "",
                airDate: new Date(),
                writer: "",
                episode: 0,
            };
            var allSongs = {};

            var self = this;
            self.model = model;
            self.allSongs = allSongs;
            self.message = 'data';

            self.submit = function () {
                //TODO: rest call to submit data
                console.log('submitted ' + self.model.name + ' ' + self.model.airDate);
                self.model.airDate = filter('date')(self.model.airDate, 'yyyy-MM-dd');
                var data = angular.toJson(self.model);
                http.post('http://localhost:5000/episode', data)
                    .success(function(){
                        console.log('great success!');
                    })
                    .error(function(data, status, headers, config){
                        console.error('uh oh');
                    })

            };

            self.delete = function (id) {
                //TODO: rest call to delete data
                console.log('deleted ' + id);
            };

            self.retrieve = function () {
                //TODO: rest call to retrieve data
            }
        }
    ]);

    lucController.controller('adminController', ['$http',
        function (http) {
            var self = this;
            self.message = 'admin';
        }
    ]);

    lucController.controller('resultsController', ['$http', '$scope', '$filter',
        function (http, scope, filter) {
            var self = this;
            self.editable = '<input ng-class=';
            self.model = [];
            self.message = 'results';

            self.gridOptions = {
                data: 'vm.model',
                enableCellSelection: true,
                enableRowSelection: false,
                enableCellEdit: true,
                columnDefs:[
                    {field:'episodeNumber', displayName:'Number'},
                    {field:'writer', displayName:'Writer'},
                    {field:'name', displayName:'Name'},
                    {field:'airDate', displayName:'Air Date', cellFilter:'date'}
                ]
            };
            self.getData = function() {
                http.get('http://localhost:5000/grid')
                    .success(function(data){
                        self.model = data;
                    })
                    .error(function(data, status, headers, config){
                        console.error('uh oh!');
                        console.error(data)
                    })
            };
            self.getData();

            var updateRow = function(data) {

                data.airDate = filter('date')(data.airDate, 'yyyy-MM-dd');

                http.post('http://localhost:5000/episode', data)
                    .success(function(){
                        console.log(('great success!'));
                    })
                    .error(function(){
                       console.error('uh oh');
                    });
            };

            scope.$on('ngGridEventEndCellEdit', function(evt){
                console.log(evt.targetScope.row.entity);
                updateRow(evt.targetScope.row.entity);
            })

        }
    ])

})();

app.factory('DB', function($http, $q) {
    const url = "http://localhost:8000/api";

    return {

        selectAll: function(table) {
            let deferred = $q.defer();
            $http({
                    method: 'GET',
                    url: url + '/' + table,
                })
                .then(
                    function(res) {
                        deferred.resolve(res.data);
                    },
                    function(err) {
                        deferred.reject(err);
                    }
                );
            return deferred.promise;
        },

        select: function(table, field,id) {
            let deferred = $q.defer();
            $http({
                    method: 'GET',
                    url: url + '/' + table + '/' + field + '/' + id,
                })
                .then(
                    function(res) {
                        deferred.resolve(res.data);
                    },
                    function(err) {
                        deferred.reject(err);
                    }
                );
            return deferred.promise;
        },

        insert: function(table, values) {
            let deferred = $q.defer();
            $http({
                    method: 'POST',
                    url: url + '/' + table,
                    data: values
                })
                .then(
                    function(res) {
                        deferred.resolve(res.data);
                    },
                    function(err) {
                        deferred.reject(err);
                    }
                );
            return deferred.promise;
        },

        update: function(table,field,  id, values) {
            let deferred = $q.defer();
            $http({
                    method: 'PATCH',
                    url: url + '/' + table + '/' + field + '/' + id,
                    data: values
                })
                .then(
                    function(res) {
                        deferred.resolve(res.data);
                    },
                    function(err) {
                        deferred.reject(err);
                    }
                );
            return deferred.promise;
        },

        delete: function(table, field, id) {
            let deferred = $q.defer();
            $http({
                    method: 'DELETE',
                    url: url + '/' + table + '/' + field + '/' + id,
                })
                .then(
                    function(res) {
                        deferred.resolve(res.data);
                    },
                    function(err) {
                        deferred.reject(err);
                    }
                );
            return deferred.promise;
        }
    }
});
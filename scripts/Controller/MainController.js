app.controller('MainController', function ($scope, $http) {

    var onUserComplete = function (response) {
        $scope.person = response.data;
        $scope.errorClass = "unhide";
        $scope.secondCss = "hide";

        $http.get($scope.person.repos_url)
            .then(onRepos, onError);
    };

    var onRepos = function ( response ) {
        $scope.repos = response.data;
    };
    var onError = function (reason) {
        $scope.error = "Could not get this user " + reason.error;
        $scope.errorClass = "hide";
        $scope.secondCss = "unhide";
    };

    $scope.search = function (username) {
        $http.get("https://api.github.com/users/" + username)
            .then(onUserComplete, onError);
    };

    $scope.userName = 'Angular';
    $scope.nameItem = 'GitHub Viewer';
});

app.controller('SecondController', function ($scope) {
    $scope.test = "Woo Hoo";
});
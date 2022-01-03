angular
  .module("Fix4u")
  .controller("HomeController", function ($scope, ProductsService) {
    $scope.producto = false;
    $scope.products = ProductsService.getProducts();
  })
  .controller(
    "ProductoController",
    function ($scope, ProductsService, $routeParams) {
      $scope.producto = true;
      $scope.products = ProductsService.getProducts().filter(
        (el) => el.id == $routeParams.id
      );
    }
  )
  .controller(
    "CategoriaController",
    function ($scope, ProductsService, $routeParams) {
      $scope.producto = false;
      $scope.products = ProductsService.getProducts().filter(
        (el) => el.idCategoria == $routeParams.id
      );
    }
  )
  .controller("LoginController", function ($scope, LoginService, $location) {
    $scope.submit = () => {
      const res = LoginService.login($scope.login);
      if (res) {
        $location.path("/dashboard");
        $scope.login = {};
      }
    };
  })
  .controller("DashboardController", function ($scope) {})
  .controller(
    "DashboardCategoriasController",
    function ($scope, CategoriesService, $location) {
      $scope.categories = CategoriesService.read();

      $scope.submit = () => {
        CategoriesService.create($scope.category);
        $scope.category = {};
      };

      $scope.edit = (category) => {
        $location.path(`/dashboard/categorias/${category}`);
      };

      $scope.delete = (category) => {
        $scope.categories = CategoriesService.delete(category);
      };
    }
  )
  .controller(
    "DashboardCategoriasEditController",
    function ($scope, CategoriesService, $routeParams, $location) {
      $scope.category = CategoriesService.read().find(
        (el) => el.id == $routeParams.id
      );

      $scope.submit = () => {
        CategoriesService.edit($scope.category);
        $scope.category = {};
        $location.path(`/dashboard/categorias`);
      };
    }
  )
  .controller(
    "DashboardProductosController",
    function ($scope, ProductsService, $location) {
      $scope.products = ProductsService.getProducts();

      $scope.crear = () => {
        $location.path(`/dashboard/productos/crear`);
      };

      $scope.edit = (product) => {
        $location.path(`/dashboard/productos/${product}`);
      };

      $scope.delete = (product) => {
        $scope.categories = ProductsService.delete(product);
      };
    }
  )
  .controller(
    "DashboardProductosCrearController",
    function ($scope, CategoriesService, ProductsService, $location) {
      $scope.categories = CategoriesService.read();

      $scope.submit = () => {
        $scope.product.foto = "";
        ProductsService.create($scope.product);
        $scope.product = {};
        $location.path(`/dashboard/productos`);
      };
    }
  )
  .controller(
    "DashboardProductosEditController",
    function (
      $scope,
      CategoriesService,
      ProductsService,
      $routeParams,
      $location
    ) {
      $scope.categories = CategoriesService.read();
      $scope.product = ProductsService.getProducts().find(
        (el) => el.id == $routeParams.id
      );

      $scope.submit = () => {
        ProductsService.edit($scope.product);
        $scope.product = {};
        $location.path(`/dashboard/productos`);
      };

      $scope.onFileSelected = (event) => {
        $scope.product.foto = $scope.product.foto[0];
        console.log($scope.product.foto);
      };
    }
  )
  .directive("input", function () {
    return {
      restrict: "E",
      scope: {
        ngModel: "=",
        ngChange: "&",
        type: "@",
      },
      link: function (scope, element, attrs) {
        if (scope.type.toLowerCase() != "file") {
          return;
        }
        element.bind("change", function () {
          let files = element[0].files;
          scope.ngModel = files;
          scope.$apply();
          scope.ngChange();
        });
      },
    };
  });

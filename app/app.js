angular
  .module("Fix4u", ["ngRoute", "LocalStorageModule"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        controller: "HomeController",
        templateUrl: "/app/templates/home.html",
      })
      .when("/login", {
        controller: "LoginController",
        templateUrl: "/app/templates/login.html",
      })
      .when("/producto/:id", {
        controller: "ProductoController",
        templateUrl: "/app/templates/home.html",
      })
      .when("/categoria/:id", {
        controller: "CategoriaController",
        templateUrl: "/app/templates/home.html",
      })
      .when("/dashboard", {
        controller: "DashboardController",
        templateUrl: "/app/templates/dashboard/dashboard.html",
      })
      .when("/dashboard/categorias", {
        controller: "DashboardCategoriasController",
        templateUrl: "/app/templates/dashboard/categorias/categorias.html",
      })
      .when("/dashboard/categorias/:id", {
        controller: "DashboardCategoriasEditController",
        templateUrl: "/app/templates/dashboard/categorias/categorias-edit.html",
      })
      .when("/dashboard/productos", {
        controller: "DashboardProductosController",
        templateUrl: "/app/templates/dashboard/productos/productos.html",
      })
      .when("/dashboard/productos/crear", {
        controller: "DashboardProductosCrearController",
        templateUrl: "/app/templates/dashboard/productos/productos-crear.html",
      })
      .when("/dashboard/productos/:id", {
        controller: "DashboardProductosEditController",
        templateUrl: "/app/templates/dashboard/productos/productos-edit.html",
      })
      .otherwise("/");
  });

angular
  .module("Fix4u")
  .service("LoginService", function (localStorageService, constUsers) {
    this.key = "token";

    this.login = (login) => {
      let user = constUsers.filter((user) => user.name === login.email);
      user = user.find((pass) => pass.password === login.password) ?? false;
      if (user) {
        localStorageService.set(this.key, "token");
        return true;
      }
      return false;
    };
  })
  .service(
    "CategoriesService",
    function (localStorageService, constCategories) {
      this.key = "categories";
      this.categories = localStorageService.get(this.key) ?? constCategories;

      localStorageService.set(this.key, this.categories);

      this.create = (category) => {
        category.id = this.categories.reduce((acc, el) =>
          acc > el.id ? acc : el.id + 1
        );
        this.categories.push(category);
        this.update();
      };

      this.read = () => this.categories;

      this.update = () => {
        localStorageService.set(this.key, this.categories);
      };

      this.edit = (category) => {
        this.delete(category);
        this.categories.push(category);
        this.update();
      };

      this.delete = (category) => {
        this.categories = this.categories.filter((el) => el.id !== category.id);
        this.update();
        return this.read();
      };
    }
  )
  .service(
    "ProductsService",
    function (localStorageService, CategoriesService, constProducts) {
      this.key = "products";
      this.categories = CategoriesService.read();
      this.products = localStorageService.get(this.key) ?? constProducts;

      localStorageService.set(this.key, this.products);

      this.getProducts = () => {
        this.categories = CategoriesService.read();
        let products = this.products.map((product) => {
          const find = this.categories.find(
            (cat) => cat.id === product.categoria
          );
          return {
            id: product.id,
            nombre: product.nombre,
            stock: product.stock,
            precio: product.precio,
            foto: product.foto,
            idCategoria: find ? product.categoria : "sin-categoria",
            categoria: find
              ? this.categories.find((cat) => cat.id === product.categoria)
                  .nombre
              : "sin-categoria",
          };
        });
        return products;
      };

      this.create = (product) => {
        product.categoria = Number(product.categoria);
        product.id = this.products.reduce((acc, el) =>
          acc > el.id ? acc : el.id + 1
        );
        this.products.push(product);
        this.update();
      };

      this.update = () => {
        localStorageService.set(this.key, this.products);
      };

      this.edit = (product) => {
        product.categoria = Number(product.categoria);
        this.delete(product);
        this.products.push(product);
        this.update();
      };

      this.delete = (product) => {
        this.products = this.products.filter((el) => el.id !== product.id);
        this.update();
        return this.getProducts();
      };
    }
  );

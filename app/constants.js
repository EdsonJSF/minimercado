angular
  .module("Fix4u")
  .constant("constUsers", [
    {
      id: 1,
      name: "edson",
      email: "edsonjsf1990@gmail.com",
      password: "123456",
    },
  ])
  .constant("constCategories", [
    {
      id: 1,
      nombre: "vegetales",
    },
    {
      id: 2,
      nombre: "carniceria",
    },
    {
      id: 3,
      nombre: "pescaderia",
    },
    {
      id: 4,
      nombre: "harinas",
    },
    {
      id: 5,
      nombre: "azúcar",
    },
  ])
  .constant("constProducts", [
    {
      id: 1,
      nombre: "Cebollas",
      stock: 10,
      precio: 3000,
      foto: "cebolla.jpg",
      categoria: 1,
    },
    {
      id: 2,
      nombre: "Carne Molida",
      stock: 10,
      precio: 3000,
      foto: "carne-molida.jpg",
      categoria: 2,
    },
    {
      id: 3,
      nombre: "Filete de Mero",
      stock: 10,
      precio: 3000,
      foto: "filete-de-mero.jpg",
      categoria: 3,
    },
    {
      id: 4,
      nombre: "Harina Leudante",
      stock: 10,
      precio: 3000,
      foto: "harina-leudante.jpg",
      categoria: 4,
    },
    {
      id: 5,
      nombre: "Stevia",
      stock: 10,
      precio: 3000,
      foto: "azucar-stevia.jpg",
      categoria: 5,
    },
  ]);

const productos = [
  {
      nombre: "Café Caramel con Chocolate",
      precio: 59.9,
      imagen: "cafe_01",
      categoria_id: 1,
      id: 1
    },
    {
      nombre: "Café Frio con Chocolate Grande",
      precio: 49.9,
      imagen: "cafe_02",
      categoria_id: 1,
      id: 2
    },
    {
      nombre: "Latte Frio con Chocolate Grande",
      precio: 54.9,
      imagen: "cafe_03",
      categoria_id: 1,
      id: 3
    },
    {
      nombre: "Latte Frio con Chocolate Grande",
      precio: 54.9,
      imagen: "cafe_04",
      categoria_id: 1,
      id: 4
    },
    {
      nombre: "Malteada Fria con Chocolate Grande",
      precio: 54.9,
      imagen: "cafe_05",
      categoria_id: 1,
      id: 5
    },
    {
      nombre: "Café Mocha Caliente Chico",
      precio: 39.9,
      imagen: "cafe_06",
      categoria_id: 1,
      id: 6
    },
    {
      nombre: "Café Mocha Caliente Grande con Chocolate",
      precio: 59.9,
      imagen: "cafe_07",
      categoria_id: 1,
      id: 7
    },
    {
      nombre: "Café Caliente Capuchino Grande",
      precio: 59.9,
      imagen: "cafe_08",
      categoria_id: 1,
      id: 8
    },
    {
      nombre: "Café Mocha Caliente Mediano",
      precio: 49.9,
      imagen: "cafe_09",
      categoria_id: 1,
      id: 9
    },
    {
      nombre: "Café Mocha Frio con Caramelo Mediano",
      precio: 49.9,
      imagen: "cafe_10",
      categoria_id: 1,
      id: 10
    },
    {
      nombre: "Café Mocha Frio con Chocolate Mediano",
      precio: 49.9,
      imagen: "cafe_11",
      categoria_id: 1,
      id: 11
    },
    {
      nombre: "Café Espresso",
      precio: 29.9,
      imagen: "cafe_12",
      categoria_id: 1,
      id: 12
    },
    {
      nombre: "Café Capuchino Grande con Caramelo",
      precio: 59.9,
      imagen: "cafe_13",
      categoria_id: 1,
      id: 13
    },
    {
      nombre: "Café Caramelo Grande",
      precio: 59.9,
      imagen: "cafe_14",
      categoria_id: 1,
      id: 14
    },
    {
      nombre: "Paquete de 3 donas de Chocolate",
      precio: 39.9,
      imagen: "donas_01",
      categoria_id: 4,
      id: 15
    },
    {
      nombre: "Paquete de 3 donas Glaseadas",
      precio: 39.9,
      imagen: "donas_02",
      categoria_id: 4,
      id: 16
    },
    {
      nombre: "Dona de Fresa ",
      precio: 19.9,
      imagen: "donas_03",
      categoria_id: 4,
      id: 17
    },
    {
      nombre: "Dona con Galleta de Chocolate ",
      precio: 19.9,
      imagen: "donas_04",
      categoria_id: 4,
      id: 18
    },
    {
      nombre: "Dona glass con Chispas Sabor Fresa ",
      precio: 19.9,
      imagen: "donas_05",
      categoria_id: 4,
      id: 19
    },
    {
      nombre: "Dona glass con Chocolate ",
      precio: 19.9,
      imagen: "donas_06",
      categoria_id: 4,
      id: 20
    },
    {
      nombre: "Dona de Chocolate con MÁS Chocolate ",
      precio: 19.9,
      imagen: "donas_07",
      categoria_id: 4,
      id: 21
    },
    {
      nombre: "Paquete de 3 donas de Chocolate ",
      precio: 39.9,
      imagen: "donas_08",
      categoria_id: 4,
      id: 22
    },
    {
      nombre: "Paquete de 3 donas con Vainilla y Chocolate ",
      precio: 39.9,
      imagen: "donas_09",
      categoria_id: 4,
      id: 23
    },
    {
      nombre: "Paquete de 6 Donas",
      precio: 69.9,
      imagen: "donas_10",
      categoria_id: 4,
      id: 24
    },
    {
      nombre: "Paquete de 3 Variadas",
      precio: 39.9,
      imagen: "donas_11",
      categoria_id: 4,
      id: 25
    },
    {
      nombre: "Dona Natural con Chocolate",
      precio: 19.9,
      imagen: "donas_12",
      categoria_id: 4,
      id: 26
    },
    {
      nombre: "Paquete de 3 Donas de Chocolate con Chispas",
      precio: 39.9,
      imagen: "donas_13",
      categoria_id: 4,
      id: 27
    },
    {
      nombre: "Dona Chocolate y Coco",
      precio: 19.9,
      imagen: "donas_14",
      categoria_id: 4,
      id: 28
    },
    {
      nombre: "Paquete Galletas de Chocolate",
      precio: 29.9,
      imagen: "galletas_01",
      categoria_id: 6,
      id: 29
    },
    {
      nombre: "Paquete Galletas de Chocolate y Avena",
      precio: 39.9,
      imagen: "galletas_02",
      categoria_id: 6,
      id: 30
    },
    {
      nombre: "Paquete de Muffins de Vainilla",
      precio: 39.9,
      imagen: "galletas_03",
      categoria_id: 6,
      id: 31
    },
    {
      nombre: "Paquete de 4 Galletas de Avena",
      precio: 24.9,
      imagen: "galletas_04",
      categoria_id: 6,
      id: 32
    },
    {
      nombre: "Galletas de Mantequilla Variadas",
      precio: 39.9,
      imagen: "galletas_05",
      categoria_id: 6,
      id: 33
    },
    {
      nombre: "Galletas de sabores frutales",
      precio: 39.9,
      imagen: "galletas_06",
      categoria_id: 6,
      id: 34
    },
    {
      nombre: "Hamburguesa Sencilla",
      precio: 59.9,
      imagen: "hamburguesas_01",
      categoria_id: 2,
      id: 35
    },
    {
      nombre: "Hamburguesa de Pollo",
      precio: 59.9,
      imagen: "hamburguesas_02",
      categoria_id: 2,
      id: 36
    },
    {
      nombre: "Hamburguesa de Pollo y Chili",
      precio: 59.9,
      imagen: "hamburguesas_03",
      categoria_id: 2,
      id: 37
    },
    {
      nombre: "Hamburguesa Queso y  Pepinos",
      precio: 59.9,
      imagen: "hamburguesas_04",
      categoria_id: 2,
      id: 38
    },
    {
      nombre: "Hamburguesa Cuarto de Libra",
      precio: 59.9,
      imagen: "hamburguesas_05",
      categoria_id: 2,
      id: 39
    },
    {
      nombre: "Hamburguesa Doble Queso",
      precio: 69.9,
      imagen: "hamburguesas_06",
      categoria_id: 2,
      id: 40
    },
    {
      nombre: "Hot Dog Especial",
      precio: 49.9,
      imagen: "hamburguesas_07",
      categoria_id: 2,
      id: 41
    },
    {
      nombre: "Paquete 2 Hot Dogs",
      precio: 69.9,
      imagen: "hamburguesas_08",
      categoria_id: 2,
      id: 42
    },
    {
      nombre: "4 Rebanadas de Pay de Queso",
      precio: 69.9,
      imagen: "pastel_01",
      categoria_id: 5,
      id: 43
    },
    {
      nombre: "Waffle Especial",
      precio: 49.9,
      imagen: "pastel_02",
      categoria_id: 5,
      id: 44
    },
    {
      nombre: "Croissants De la casa",
      precio: 39.9,
      imagen: "pastel_03",
      categoria_id: 5,
      id: 45
    },
    {
      nombre: "Pay de Queso",
      precio: 19.9,
      imagen: "pastel_04",
      categoria_id: 5,
      id: 46
    },
    {
      nombre: "Pastel de Chocolate",
      precio: 29.9,
      imagen: "pastel_05",
      categoria_id: 5,
      id: 47
    },
    {
      nombre: "Rebanada Pastel de Chocolate",
      precio: 29.9,
      imagen: "pastel_06",
      categoria_id: 5,
      id: 48
    },
    {
      nombre: "Pizza Spicy con Doble Queso",
      precio: 69.9,
      imagen: "pizzas_01",
      categoria_id: 3,
      id: 49
    },
    {
      nombre: "Pizza Jamón y Queso",
      precio: 69.9,
      imagen: "pizzas_02",
      categoria_id: 3,
      id: 50
    },
    {
      nombre: "Pizza Doble Queso",
      precio: 69.9,
      imagen: "pizzas_03",
      categoria_id: 3,
      id: 51
    },
    {
      nombre: "Pizza Especial de la Casa",
      precio: 69.9,
      imagen: "pizzas_04",
      categoria_id: 3,
      id: 52
    },
    {
      nombre: "Pizza Chorizo",
      precio: 69.9,
      imagen: "pizzas_05",
      categoria_id: 3,
      id: 53
    },
    {
      nombre: "Pizza Hawaiana",
      precio: 69.9,
      imagen: "pizzas_06",
      categoria_id: 3,
      id: 54
    },
    {
      nombre: "Pizza Tocino",
      precio: 69.9,
      imagen: "pizzas_07",
      categoria_id: 3,
      id: 55
    },
    {
      nombre: "Pizza Vegetales y Queso",
      precio: 69.9,
      imagen: "pizzas_08",
      categoria_id: 3,
      id: 56
    },
    {
      nombre: "Pizza Pepperoni y Queso",
      precio: 69.9,
      imagen: "pizzas_09",
      categoria_id: 3,
      id: 57
    },
    {
      nombre: "Pizza Aceitunas y Queso",
      precio: 69.9,
      imagen: "pizzas_10",
      categoria_id: 3,
      id: 58
    },
    {
      nombre: "Pizza Queso, Jamón y Champiñones",
      precio: 69.9,
      imagen: "pizzas_11",
      categoria_id: 3,
      id: 59
    }
]

export {
  productos 
}
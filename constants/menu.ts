import { ingredientName } from "./ingredients";

export const menu = [
  {
    id: 1,
    itemName: "Classic Cheese Burger",
    ingredientList: [
      ingredientName.Patty,
      ingredientName.Cheese,
      ingredientName.Lettuce,
      ingredientName.Tomato,
      ingredientName.Onion,
    ],
    basePrice: 8.99,
  },
  {
    id: 2,
    itemName: "Bacon Avocado Delight",
    ingredientList: [
      ingredientName.Patty,
      ingredientName.Bacon,
      ingredientName.Avocado,
      ingredientName.Lettuce,
      ingredientName.Mayo,
    ],
    basePrice: 10.99,
  },
  {
    id: 3,
    itemName: "BBQ Chicken Burger",
    ingredientList: [
      ingredientName.Chicken,
      ingredientName.BBQ_Sauce,
      ingredientName.Lettuce,
      ingredientName.Tomato,
      ingredientName.Onion,
    ],
    basePrice: 9.49,
  },
  {
    id: 4,
    itemName: "Mushroom Swiss Burger",
    ingredientList: [
      ingredientName.Patty,
      ingredientName.Mushroom,
      ingredientName.Cheese,
      ingredientName.Onion,
    ],
    basePrice: 9.99,
  },
  {
    id: 5,
    itemName: "Hawaiian Burger",
    ingredientList: [
      ingredientName.Patty,
      ingredientName.Pineapple,
      ingredientName.Ham,
      ingredientName.Cheese,
      ingredientName.Lettuce,
    ],
    basePrice: 10.49,
  },
  {
    id: 6,
    itemName: "Spicy Salami Burger",
    ingredientList: [
      ingredientName.Patty,
      ingredientName.Salami,
      ingredientName.Pepper,
      ingredientName.Onion,
      ingredientName.Mayo,
    ],
    basePrice: 9.99,
  },
  {
    id: 7,
    itemName: "Shrimp Surprise",
    ingredientList: [
      ingredientName.Shrimp,
      ingredientName.Lettuce,
      ingredientName.Tomato,
      ingredientName.Mayo,
    ],
    basePrice: 11.49,
  },
  {
    id: 8,
    itemName: "Egg Bacon Burger",
    ingredientList: [
      ingredientName.Patty,
      ingredientName.Bacon,
      ingredientName.Egg,
      ingredientName.Lettuce,
      ingredientName.Onion,
    ],
    basePrice: 9.99,
  },
  {
    id: 9,
    itemName: "Veggie Delight",
    ingredientList: [
      ingredientName.Halloumi,
      ingredientName.Cucumber,
      ingredientName.Avocado,
      ingredientName.Lettuce,
      ingredientName.Tomato,
    ],
    basePrice: 8.99,
  },
  {
    id: 10,
    itemName: "Surf 'n' Turf Burger",
    ingredientList: [
      ingredientName.Patty,
      ingredientName.Shrimp,
      ingredientName.Lettuce,
      ingredientName.Onion,
      ingredientName.Mayo,
    ],
    basePrice: 12.49,
  },
];

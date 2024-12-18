import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "./services/firebase";

const productos = [
  {
    id: 1,
    nombre: "Remera Goku",
    categoria: "remeras",
    precio: 12000,
    cantidad: 10,
    imagen: "/assets/remeragoku.webp",
  },
  {
    id: 2,
    nombre: "Buzo Vegeta",
    categoria: "buzos",
    precio: 25000,
    cantidad: 5,
    imagen: "/assets/buzovegeta.webp",
  },
  {
    id: 3,
    nombre: "Camiseta Piccolo",
    categoria: "camisetas",
    precio: 15000,
    cantidad: 8,
    imagen: "/assets/CamisetaPiccolo.webp",
  },
  {
    id: 4,
    nombre: "Remera Goku Doctrina Egoista",
    categoria: "remeras",
    precio: 12000,
    cantidad: 10,
    imagen: "/assets/doctrinaegoista.webp",
  },
  {
    id: 5,
    nombre: "Buzo Vegeta Super Saiyan",
    categoria: "buzos",
    precio: 25000,
    cantidad: 5,
    imagen: "/assets/BuzoVegetaSuperSaiyan.webp",
  },
  {
    id: 6,
    nombre: "camiseta Majin Boo",
    categoria: "camisetas",
    precio: 15000,
    cantidad: 8,
    imagen: "/assets/camisetaMajinBoo.webp",
  },
  {
    id: 7,
    nombre: "Remera Goku Niño",
    categoria: "remeras",
    precio: 12000,
    cantidad: 10,
    imagen: "/assets/goku1.webp",
  },
  {
    id: 8,
    nombre: "Buzo Goku Blue",
    categoria: "buzos",
    precio: 25000,
    cantidad: 5,
    imagen: "/assets/gokublue.webp",
  },
  {
    id: 9,
    nombre: " Camiseta vegeta",
    categoria: "camisetas",
    precio: 15000,
    cantidad: 8,
    imagen: "/assets/camisetavegeta.webp",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2500);
  });
};

// obtener los productos por categoria
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.categoria === categoryId));
    }, 2500);
  });
};

// obtener un solo producto por id
export const getProductByID = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((prod) => prod.id == productId));
    }, 2500);
  });
};

export const subirProductosFake = async () => {
  const bactch = writeBatch(db);
  const productRef = collection(db, "products");

  productos.forEach((item) => {
    const nuevoDoc = doc(productRef);
    bactch.set(nuevoDoc, item);
  });

  try {
    await bactch.commit();
    console.log("Todos los productos fueron cargados");
  } catch (error) {
    console.log("Error al subir productos", error);
  }
};

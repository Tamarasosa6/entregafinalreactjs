export const createProductAdapter = (doc) => {
    const data = doc.data()

    return {
        id: doc.id,
        nombre: data.nombre,
        categoria: data.categoria,
        imagen: data.imagen,
        precio: data.precio,
        cantidad: data.cantidad,
    }
}

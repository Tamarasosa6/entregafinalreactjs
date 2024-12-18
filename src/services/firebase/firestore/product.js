import { collection, getDoc, getDocs, query, where, doc } from "firebase/firestore"
import { db } from ".."
import { createProductAdapter } from "../../../adapters/ProductAdapter"

export const getProducts = (categoryId) => {
    const productsCollection = categoryId
    ? query(collection(db, "products"), where("categoria", "==", categoryId))
    : collection(db, "products")

    return getDocs(productsCollection)
        .then(querySnapshot => {
            const productAdapted = querySnapshot.docs.map((doc) => {
                return createProductAdapter(doc)
            })
            return productAdapted
        })
        .catch((error) => {
            return error
        })
}

export const getProductById = (itemId) => {
    const productDoc = doc(db, "products", itemId)

    return getDoc(productDoc)
        .then((querySnapshot) => {
            const productAdapted = createProductAdapter(querySnapshot)
            return productAdapted
        })
        .catch((error) => {
            return error
        })
}

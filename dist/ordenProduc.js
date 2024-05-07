import productsList from "./products.json" assert { type: "json" };
export function getProductSortedByPrice(product) {
    // Utiliza el método sort() para ordenar los productos por precio
    return product.sort((a, b) => a.price - b.price);
}
const productosOrdenados = getProductSortedByPrice(productsList);
console.log(productosOrdenados);

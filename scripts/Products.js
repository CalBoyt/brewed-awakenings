import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click", (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            const [,productId] = itemClicked.id.split("--")
            for (const productObject of products) {
                if (productObject.id === parseInt(productId)) {
                    window.alert(`${productObject.name} costs $${productObject.price}`)
                }
            }
        }
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}


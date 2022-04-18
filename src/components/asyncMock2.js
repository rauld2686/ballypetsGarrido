const products = [
    {
        id: 1,
        tittle: 'Bolsas',
        description: 'bolsas para desechos de mascotas',
        price: '1000',
        pictureUrl: 'https://cdn.shopify.com/s/files/1/0322/7792/1923/products/product-image-1419159239_1024x1024@2x.jpg?v=1590480570' 
    },
    {
        id: 2,
        tittle: 'Snacks',
        description: 'Premios para tu perro',
        price: '1000',
        pictureUrl: 'https://cdn.shopify.com/s/files/1/0322/7792/1923/products/product-image-1419159239_1024x1024@2x.jpg?v=1590480570' 
    }
]

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}


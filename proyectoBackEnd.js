class ProductManager 
{
    Products = [];
    idAuto = 1;
    
    getProducts()
    {
        return this.Products;
    }

    addProduct(product)
    {
        const { tittle, description, price, thumbnail, code, stock } = product;

        this.Products.push({ tittle, description, price, thumbnail, code, stock, id: this.idAuto });
        
        this.idAuto = this.idAuto + 1;
    }
}

const products = new ProductManager ();

products.addProduct({tittle: "Teclado", description: "Mecanico", price: 15000, thumbnail: "vacio", code: "c1", stock: 32, id: 1});

products.addProduct({tittle: "Mouse", description: "Gamer", price: 9800, thumbnail: "vacio", code: "c2", stock: 15, id: 1});

console.log(products);


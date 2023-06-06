const StorageController = (function () {



})()

const ProductController = (function () {

const Product = function(id,name,price){
    this.id = id;
    this.name = name;
    this.price = price;
}

const data = {
    products : [
        {id:1,name:'monitor',price:100},
        {id:2,name:'mouse',price:10},
        {id:3,name:'keyboard',price:50},
        {id:4,name:'Airpods',price:70},
    ],
    selectedProduct : null,
    totalPrice:0,
}

return {
    getProducts : () => data.products,
    getData: () => data
}

})();

const UIController = (function () {

    const Selectors = {
        productList : "#item-list"
    }

return {
   createProductList : (products) => {
       let html= ``;
       products.map(item => {
            html += `    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.price} $</td>
                        <td class="text-right">
                        <button type="submit" class="btn btn-warning btn-sm">
                         <i class="far fa-edit"></i>
                        </button>
                        </td>
                        </tr>
                       `
       })
       document.querySelector(Selectors.productList).innerHTML = html
   },
    getSelectors : () => {
       return Selectors;
    }
}

})();

const App = (function(ProductCtrl,UICtrl){

return {
    init: () => {
        console.log('savas baslasın');
        const products = ProductCtrl.getProducts();

        UICtrl.createProductList(products);
    }
}

})(ProductController,UIController);

App.init();

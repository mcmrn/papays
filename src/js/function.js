let carts = document.querySelectorAll('.btn_add');
let products = [
    {
        name: 'CHICKEN ADOBO',
        tag: 'A1',
        price: 75,
        Incart: 0,
        queue: 0
    },
    {
        name: 'PORK ADOBO',
        tag: 'A2',
        price: 75,
        Incart: 0,
        queue: 0
    },
    {
        name: 'ADOBONG BIKOL',
        tag: 'A3',
        price: 90,
        Incart: 0,
        queue: 0
    },
    {
        name: 'LAING',
        tag: 'A4',
        price: 75,
        Incart: 0,
        queue: 0
    },
    {
        name: 'ADOBONG KANGKONG',
        tag: 'A5',
        price: 50,
        Incart: 0,
        queue: 0
    },
    {
        name: 'RELYENONG TALONG',
        tag: 'A6',
        price: 75,
        Incart: 0,
        queue: 0
    },
    {
        name: 'CHOPSUEY',
        tag: 'A7',
        price: 75,
        Incart: 0,
        queue: 0
    },
    {
        name: 'PAKBET',
        tag: 'A8',
        price: 75,
        Incart: 0,
        queue: 0
    },
    {
        name: 'ADOBONG TALONG',
        tag: 'A9',
        price: 75,
        Incart: 0,
        queue: 0
    },
    {
        name: 'PRITONG TALONG WITH(OKRA AND EGG)',
        tag: 'A10',
        price: 75,
        Incart: 0,
        queue: 0
    },

 ];
 

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i])
        alert("ADDED TO CART");


    })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.banner__cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers' , productNumbers + 1)
        document.querySelector('.banner__cart span').textContent = productNumbers + 1;
    }
    else{ localStorage.setItem('cartNumbers' , 1);
    document.querySelector('.banner__cart span').textContent = 1;
}
setItems(product);

}

function setItems(product){
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems)
if(cartItems != null){

    if(cartItems[product.tag] == undefined){
        cartItems ={
            ...cartItems,
            [product.tag]:product
        }
    }
cartItems[product.tag].Incart += 1;

} else { 
    product.Incart = 1;

     cartItems ={
        [product.tag]: product
    }
}
        localStorage.setItem('productsIncart',JSON.stringify 
    (cartItems));
}


function totalCost(product){
    //console.log("price is",product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("my cart cost is" , cartCost)
    console.log(typeof cartCost)

    if(cartCost != null){
        cartCost = parseInt(cartCost)
        localStorage.setItem('totalCost',cartCost + product.price);
    } else {
        localStorage.setItem('totalCost',product.price);
    }

}


function displayCart(){
let cartItems =localStorage.getItem('productsIncart')
cartItems = JSON.parse(cartItems)
let productContainer = document.querySelector('.products')
let cartCost = localStorage.getItem('totalCost');



if(cartItems && productContainer){
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
        productContainer.innerHTML +=`
        <table>
        <div class="val">
          <tr>
              <span class="cart-name">${item.name}</span>
            <td>
            <th>
              <input class="cart-quantity" type="number" value="${item.Incart}" min="1" readonly="readonly" />
            </th></td>
            <td>Php ${item.price}.00</td>
            <td>Php ${item.Incart * item.price}.00</td>
            </tr> 
      <div>
      </table>
        `
        let productTotal = document.querySelector('.cart__total')
        productTotal.innerHTML += `
        <table>
        <div class="val">
          <tr>
              <span class="cart-name">${item.name}: x ${item.Incart}-------</span>
              <span class="cart-price" Php ${item.price}.00></span>
            Php ${item.Incart * item.price}.00
          </tr> 
      <div>
      </table>
        `
        ;
    });
    let productTotal = document.querySelector('.total1')
    productTotal.innerHTML += `
    _______________________________________
    
   </br></br> <span>Total cost </><span>of Php ${cartCost}.00 </span>
   `
}


let delCart = document.querySelectorAll('.btn-remove')
    for (let i=0; i < delCart.length; i++){
        delCart[i].addEventListener('click', () =>{
            removecart()
            alert("remove")

    
    
        })
    }

   




//-------------------------------------------------------------------------------------------------------
let removecart = document.querySelectorAll('.btn-remove');
for (let i=0; i < removecart.length; i++){
    removecart[i].addEventListener('click', () =>{
        clearlocalstorage()
       


    })
}

}
function clearlocalstorage(){
    localStorage.clear()
    location.reload()
    
}

onLoadCartNumbers()
displayCart()

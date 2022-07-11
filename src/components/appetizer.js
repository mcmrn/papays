let carts = document.getElementsByClassName("btn_add");

let products = [
  {
    name: "FRIED SHRIMP",
    tag: "C1",
    price: 70,
    Incart: 0,
  },
  {
    name: "ONION RINGS",
    tag: "C2",
    price: 50,
    Incart: 0,
  },
  {
    name: "CHEESE STICKS",
    tag: "C3",
    price: 50,
    Incart: 0,
  },
  {
    name: "NACHOS",
    tag: "C4",
    price: 120,
    Incart: 0,
  },
  {
    name: "LUMPIANG SHANGHAI",
    tag: "C5",
    price: 50,
    Incart: 0,
  },
  {
    name: "MOZARELLA STICKS",
    tag: "C6",
    price: 70,
    Incart: 0,
  },
  {
    name: "MACARONI SALAD",
    tag: "C7",
    price: 90,
    Incart: 0,
  },
  {
    name: "VEGETABLE SALAD",
    tag: "C8",
    price: 70,
    Incart: 0,
  },
  {
    name: "FISH AND KAMOTE FRIES",
    tag: "C9",
    price: 70,
    Incart: 0,
  },
  {
    name: "CORN SOUP",
    tag: "C10",
    price: 55,
    Incart: 0,
  },
  {
    name: "MUSHROOM SOUP",
    tag: "C11",
    price: 60,
    Incart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", (e) => {
    cartNumbers(products[i]);
    totalCost(products[i]);
    // alert("ADDED TO CART");
  });
}
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".banner__cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".banner__cart span").textContent =
      productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".banner__cart span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsIncart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].Incart += 1;
  } else {
    product.Incart = 1;

    cartItems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem("productsIncart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  console.log("my cart cost is", cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsIncart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
        
        
        <table>
        
        <div class="val">
          <tr>
            
              <span>${item.name}</span>
              <span class="cart-price"Php ${item.price}.00></span>
            <td>
            <th>
              <input class="cart-quantity" type="number" value="${
                item.Incart
              }" min="1" />
            </th></td>
            <td>Php ${item.Incart * item.price}.00</td>
            <td><button class ="btn-remove" type="button">Remove</i></button></td>
              
          </tr> 

      <div>
      </table>
        `;

      let productTotal = document.querySelector(".cart__total");
      productTotal.innerHTML += `
        <table>
        
        <div class="val">
          <tr>
            
              <span>${item.name} : </span>
              <span class="cart-price" Php ${item.price}.00></span>
            
            Php ${item.Incart * item.price}.00
            
              
          </tr> 

      <div>
      </table>
        
        `;
    });
    let productTotal = document.querySelector(".cart__total");
    productTotal.innerHTML += `
    ________________________
   </br></br> <span>Total cost </><span>of Php ${cartCost}.00 </span>
   `;
  }
}

onLoadCartNumbers();
displayCart();

let carts = document.querySelectorAll(".btn_add");

let products = [
  {
    name: "MINI BUY 1 TAKE 1",
    tag: "B1",
    price: 59,
    Incart: 0,
  },
  {
    name: "REGULAR BURGER",
    tag: "B2",
    price: 49,
    Incart: 0,
  },
  {
    name: "QUARTER POUNDER",
    tag: "B3",
    price: 105,
    Incart: 0,
  },
  {
    name: "DOUBLE QUARTER",
    tag: "B4",
    price: 175,
    Incart: 0,
  },
  {
    name: "TRIPLE QUARTER POUNDER",
    tag: "B5",
    price: 250,
    Incart: 0,
  },
  {
    name: "GIANT BURGER",
    tag: "B6",
    price: 449,
    Incart: 0,
  },
  {
    name: "DOUBLE GIANT BURGER",
    tag: "B7",
    price: 749,
    Incart: 0,
  },
  {
    name: "TRIPLE GIANT BURGER",
    tag: "B8",
    price: 995,
    Incart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
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
  //console.log("price is",product.price);
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

  console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
        
        
        <table>
        
        <div class="val">
          <tr>
            <td>
              ${item.name} <br />
              Php ${item.price}.00
            </td>
            <td>
              <input type="number" value="${item.Incart}" min="1" />
            </td>
            <td>Php ${item.Incart * item.price}.00</td>
            <td><button class ="btn btn-remove" type="button">Remove</i></button></td>
              
          </tr> 

      <div>
      </table>
        `;

      let productTotal = document.querySelector(".cart__total");
      productTotal.innerHTML += `
        <div class="cart__item">
        <span>${item.name}</span><span>........................Php ${item.price}.00</span>
        
        </div>
        
        `;
    });
    let productTotal = document.querySelector(".cart__total");
    productTotal.innerHTML += `
    ________________________
   </br></br> <span>Total:</><span>..............................Php ${cartCost}.00 </span>
   `;

    let buttoncart = document.querySelector(".appetizer__btn");
    buttoncart.innerHTML += `
   <button class="btn_add" type="button">Add to Cart</button> <button class="addbtn" type="button"><i class="fa-solid fa-plus"></i></button>
   
   `;
  }
}

onLoadCartNumbers();
displayCart();

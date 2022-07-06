if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

function ready()
{
var removeCartItemButtons = document.getElementsByClassName('btn-remove')
console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
button.addEventListener('click' , function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    }) 
}

var quantityInputs = document.getElementsByClassName('cart-quantity')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)

}

var addToCartButtons = document.getElementsByClassName('btn_add')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    
    button.addEventListener('click', function(){
        var button = event.target
        var appetizer__item = button.parentElement.parentElement
        var Title = appetizer__item.getElementsByClassName("food-name")[0].innerText
        var Price = appetizer__item.getElementsByClassName("food-price")[0].innerText
        console.log(Title, Price)
        localStorage.setItem('cartData',  Title + Price)
       
addItemToCart(Title,Price)



})
}

}


function addItemToCart(Title, Price){
  var cartRow = document.createElement('div')
  cartRow.innerText=Title
  



}

function cartNum(){
    let productNum =localStorage.getItem('cartNum')

    
  
if (productNum){

    localStorage.setItem('cartNum', productNum + 1)
} else{

    localStorage.setItem('cartNum', 1)
}

}

 

function addToCartClicked(event){
    var button = event.target
    var appetizer__item = button.parentElement.parentElement
    var foodN = appetizer__item.getElementsByClassName("food-price")[0].innerText
    console.log(foodN)


}

function quantityChanged(event){
var  input = event.target
if(isNaN(input.value) || input.value <= 0){
    input.value = 1
}
updateCartTotal()

}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart__checkout')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart__wrapper')
    var total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRows = cartRows[i]
        var priceElement = cartRows.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRows.getElementsByClassName('cart-quantity')
        [0]
        var price = parseFloat(priceElement.innerText.replace('Php',''))
        var quantity = quantityElement.value
        total = total + (price*quantity)
    }
    document.getElementsByClassName('Total-price')[0].innerText = 'Php' + total + '.00'
    
    }
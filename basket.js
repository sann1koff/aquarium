let buttons = document.querySelectorAll('.product-button-body');
let basketList = document.querySelector('.basket-list');
let price = document.querySelector('.price');
let sum = 0;
let buttonClear = document.querySelector('.basket-clear');

for(let button of buttons){
    button.onclick = function(){
        let newElement = document.createElement('li');
        basketList.append(newElement);
        newElement.textContent = button.dataset.id;
        sum = sum + Number(button.dataset.price);
        price.innerHTML =  sum;
    }
}

buttonClear.onclick = function(){
    price.innerHTML = 0;
    basketList.innerHTML = '';
}
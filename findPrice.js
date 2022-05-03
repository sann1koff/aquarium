let aquariumOrder = document.querySelector('.aqurium-order');
let findPricePage = document.querySelector('.find-price');
let findPricePageBody = document.querySelector('.find-price-container')

aquariumOrder.onclick = function(){
    findPricePage.classList.add('see');
    findPricePageBody.classList.add('see');
}

findPricePage.onclick = function(){
    findPricePage.classList.remove('see');
    findPricePageBody.classList.remove('see');
}


/*===========================*/
let priceButton = document.querySelector('.find-price-button');
let priceAquarium = document.querySelector('.price-aquarium');
let volumeAquarium = document.querySelector('.price-aquarium-volume');

priceButton.onclick = function(){
    let l = document.getElementById("lengthAqua").value;
    let h = document.getElementById("heightAqua").value;
    let w = document.getElementById("widthAqua").value;
    let t = document.getElementById("thicknessAqua").value;
    let priceOneLiter = 60;
    if(t>6){priceOneLiter = priceOneLiter + 10};
    let liter = Math.ceil(l*h*w/1000000);
    let price = liter*priceOneLiter
    priceAquarium.innerHTML = price + ' Рублей'
    volumeAquarium.innerHTML = liter + ' Литров'
}

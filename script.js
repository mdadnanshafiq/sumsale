let itemCard = document.getElementsByClassName('card');
let list = document.getElementById('list');
let totalPrice = document.getElementById('totalPrice');
let discount = document.getElementById('discount');
let grandTotal = document.getElementById('grandTotal');
let apply = document.getElementById('apply');
let coupon = document.getElementById('coupon');

let sumPrice = 0;
let disc = 0;
let grand = 0;
let count = 1;


for (let item of itemCard) {
    let buyBtn = item.querySelector('.btn');
    let itemName = item.querySelector('.itemName');
    let price = item.querySelectorAll('span')[1].textContent;
    let priceNumber = Number(price);
    buyBtn.addEventListener('click', function () {
        sumPrice += priceNumber;
        totalPrice.innerText = sumPrice.toFixed(2);
        apply.addEventListener('mousedown', code())
        discount.innerText = disc.toFixed(2);
        grand = sumPrice - disc;
        grandTotal.innerText = grand.toFixed(2);
        let li = document.createElement('li');
        li.innerText = count + '. ' + itemName.innerText;
        list.appendChild(li);
        count++;
    })
}

function code() {
    if (sumPrice >= 200 && coupon.value === 'SELL200') {
        disc = sumPrice * .20;
    } else {
        disc = 0;
    }
}
document.addEventListener('DOMContentLoaded', function() {
    var menubutton = document.querySelector('.menu-toggle');
    var mainlistDiv = document.querySelector('.navbar');

    menubutton.addEventListener('click', function () {
        mainlistDiv.classList.toggle('menu-active');
        menubutton.classList.toggle('active');
    });
});

const products = [
    {
        id: 0,
        image: 'Grip-Master-ex-120-540x456.jpg',
        title: 'Grip Master Tyre',
        price: 120,
    },
    {
        id: 1,
        image: 'urban-grip-1.jpg',
        title: 'Urban Tyre',
        price: 60,
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/1857/7163/products/24_57_d87a6ace-703b-4cea-8aa3-7be54a67c392_1024x1024.jpg?v=1489869470',
        title: 'Pro Trac tyre',
        price: 230,
    },
    {
        id: 3,
        image: 'https://www.team-bhp.com/forum/attachments/tyre-alloy-wheel-section/2072000d1603689394-maruti-suzuki-swift-tyre-wheel-upgrade-thread-20201023_170547.jpg',
        title: 'Swift Grip',
        price: 100,
    }
];

document.getElementById('root').innerHTML = products.map((item, index) => {
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${item.image}'></img>
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>$ ${item.price}.00</h2>
                <button onclick='addToCart(${index})'>Add to cart</button>
            </div>
        </div>
    `;
}).join('');

var cart = [];

function addToCart(index) {
    cart.push({...products[index]});
    displayCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

function displayCart() {
    let total = 0;
    const cartItemElement = document.getElementById('cartItem');
    const countElement = document.getElementById('count');

    if (cart.length === 0) {
        cartItemElement.innerHTML = 'Your cart is empty';
        document.getElementById('total').textContent = '$ 0.00';
        countElement.textContent = 0;
    } else {
        const cartItemsHTML = cart.map((item, index) => {
            total += item.price;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${item.image}'></img>
                    </div>
                    <p style='font-size:12px;'>${item.title}</p>
                    <h2 style='font-size: 15px;'>$ ${item.price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='removeItem(${index})'></i>
                </div>
            `;
        }).join('');

        cartItemElement.innerHTML = cartItemsHTML;
        document.getElementById('total').textContent = `$ ${total.toFixed(2)}`;
        countElement.textContent = cart.length;
    }
}

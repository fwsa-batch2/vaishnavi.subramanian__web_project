let cart = [];

function renderCoffee(coffeeList) {

    let length = coffeeList.length;
    let add = "";

    for (let i = 0; i < length; i++) {
        let a = coffeeList[i];
        let coffee = `
                <tr>                
                    <h1 class="coffee_name">
                        ${a.coffeeName}
                    </h1>
                           
                    <img src="${a.imageUrl}" class="coffee_image" alt="image">
                   
                    <p class="coffee_description">
                        ${a.description}   
                    </p>

                    <p class="coffee_price">
                        ₹ ${a.price}
                    </p>

                    <button data-coffee="${a.coffeeName}" onclick="addToCart(event)" class="button_cart">
                        Add to cart
                     </button>
                </tr> `;
        add = add + coffee;
    }
    document.getElementById("coffeeList").innerHTML = add;
}

function addToCart(event) {

    const data_coffee = event.target.dataset.coffee;
    const coffeeObject = parsed.find(item => item.coffeeName === data_coffee);

    let numberOfQuantity = parseFloat(prompt("Enter the number of quantity"));

    const cartItem = {
        name: coffeeObject.coffeeName,
        image: coffeeObject.imageUrl,
        price: parseFloat(coffeeObject.price),
        quantity: numberOfQuantity
    };

    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "./cart.html";
}

function onLoad() {
    let items = JSON.parse(localStorage.getItem("cart"));
    if (items != null) {
        cart = items;
    } else {
        localStorage.setItem("cart", JSON.stringify([]));
    }
    return cart;
}

const parsed = JSON.parse(localStorage.getItem("toBeAdded"));
renderCoffee(parsed);
onLoad();
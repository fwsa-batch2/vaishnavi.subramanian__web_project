function onPageLoad() {
    let allList = JSON.parse(localStorage.getItem("coffeeLists"));
    if (allList != null) {
        list = allList;
    } else {
        list = [];
        localStorage.setItem("coffeeLists", JSON.stringify(list));
    }
    return list;
}
onPageLoad();

function renderCoffee(coffeeList) {


    let length = coffeeList.length;
    let add = "";

    for (let i = 0; i < length; i++) {
        let a = coffeeList[i];
        let coffee = `
            <tr>    
                <div>
                    <h1 class="coffee_name" id="coffeeName">
                        ${ a.coffeeName }
                    </h1>
                </div>
                <div>
                    <img src="${ a.imageUrl }" class="coffee_image" id="img" alt="">

                    <span>
                        <p class="coffee_description">
                            ${ a.description }   
                        </p>
                        <p class="coffee_price" id="price">
                            ${ "₹" + a.price }
                        </p>
                        <button onclick="addToCart()" class="button_cart">
                            Add to cart
                        </button>
                    </span>

                </div>

            </tr> 
            `;
        add = add + coffee;
    }
    document.getElementById("coffeeList").innerHTML = add;

}

let parsed = JSON.parse(localStorage.getItem("toBeAdded"));
console.table(parsed);
renderCoffee(parsed);



function addToCart() {
    let list = [];

    let coffeeName = document.getElementById("coffeeName").innerText;
    let imgUrl = document.getElementById("img").src;
    let price = document.getElementById("price").innerText;


    let cart = {
        "coffeeName": coffeeName,
        "imageUrl": imgUrl,
        "price": price,
    }

    console.log(cart);
    list.push(cart);
    localStorage.setItem("cart", JSON.stringify(cart));

    // let parsedMenu = JSON.parse(localStorage.getItem("toBeAdded"));

    // for (let i = 0; i < parsedMenu.length; i++) {
    //     let a = parsedMenu[i];
    //     let cart = {
    //         "coffeeName": a.coffeeName,
    //         "imageUrl": a.imageUrl,
    //         "price": a.price,
    //     }

    //     console.log(cart);
    //     list.push(cart);
    //     localStorage.setItem("cart", JSON.stringify(cart));
    //     break;
    // }
}

function onLoad() {
    let items = JSON.parse(localStorage.getItem("cart"));
    if (items != null) {
        list = items;
    } else {
        localStorage.setItem("cart", JSON.stringify([]));
    }
    return list;
}
onLoad();
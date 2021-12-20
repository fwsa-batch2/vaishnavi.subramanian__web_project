let list = [];

// function addCoffee(coffeeName) {
//     event.preventDefault();
//     list.push(coffeeName);
//     console.log(list);
//     localStorage.setItem("coffeeLists", JSON.stringify(list));
//     window.location.href = "./cart.html";
// }

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

    for (i = 0; i < length; i++) {
        let a = coffeeList[i];
        let coffee = `
            <tr>    
                <div>
                    <h1 class="coffee_name">
                        ${ a.coffeeName }
                    </h1>
                </div>
                <div>
                    <img src="${ a.imageUrl }" class="coffee_image" alt="">

                    <span>
                            <p class="coffee_description">
                            ${ a.description }   
                            </p>
                            <p class="coffee_price">
                            ${ "₹" + a.price }
                            </p>
                            <button onclick="addcoffee('Affogato')" class="button_cart">
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
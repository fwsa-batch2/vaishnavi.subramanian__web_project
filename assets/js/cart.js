let total = 0;

function extractCoffee(items1) {
    let length = items1.length;
    let vcbl = "";
    for (let i = 0; i < length; i++) {
        let a = items1[i];

        let coffees =
            `<tr>
               <td>                                
                   <img src="${a.image}" alt="img" class="coffee_image">
                   <p class="coffee_name">${a.name}</p>
               </td>
               <td class="coffee_quantity">
                   <button type="button" value="${i}" onclick=\"decreseQuantity()\"> - </button>
                   <input type="text" class="quantity" id="quantity-${i}" value=1>
                   <button type="button" value="${i}" onclick=\"addQuantity()\"> + </button> 
               </td>
               <td class="coffee_price">
                   ₹ ${a.price}
               </td>
               <td class="coffee_total" id="cost-${i}" value=" ${a.price}">
                   ₹ ${a.price}
               </td>
            </tr>`;
        vcbl = vcbl + coffees;
    }
    document.getElementById("table").innerHTML = vcbl;

    let totOrder = `
                <p class="tot" id="total">Total = ₹150</p>
                <hr>
                <button type='button' class="order" onclick="placeOrder()">Place Order</button>
                 `;
    document.getElementById("tot_order").innerHTML = totOrder;
}

const items = JSON.parse(localStorage.getItem("CART"));
extractCoffee(items);

function placeOrder() {
    let confirmAction = confirm("Do you want to confirm?");
    if (confirmAction) {
        window.location.href = "./rmpayment.html";
    }
}

function decreseQuantity() {
    let getAttribute = event.target.value;
    let value1 = document.getElementById("quantity-" + getAttribute).value;
    let typeCast = JSON.parse(value1);
    let quantityValue = value1 > 1 ? typeCast - 1 : 1;
    if (quantityValue != null) {
        document.getElementById("quantity-" + getAttribute).value = quantityValue;
    }
    let totalCost = document.getElementById("cost-" + getAttribute).getAttribute("value");
    let totalAmount = totalCost * quantityValue;
    if (totalAmount != null) {
        document.getElementById("cost-" + getAttribute).innerText = totalAmount;
        // document.getElementById("cost-" + getAttribute).setAttribute("bot", totalAmount);
    }
    // totalPrice();
}

function addQuantity() {
    let getAttribute = event.target.value;
    let value1 = document.getElementById("quantity-" + getAttribute).value;
    let typeCast = JSON.parse(value1);
    let quantityValue = typeCast + 1;
    if (quantityValue != null) {
        document.getElementById("quantity-" + getAttribute).value = quantityValue;
    }
    let totalCost = document.getElementById("cost-" + getAttribute).getAttribute("value");
    let totalAmount = totalCost * quantityValue;
    if (totalAmount != null) {
        document.getElementById("cost-" + getAttribute).innerText = totalAmount;
        // document.getElementById("cost-" + getAttribute).setAttribute("bot", totalAmount);
    }
    // totalPrice();
}

// function totalPrice() {
//     let total = 0;
//     let priceList = document.getElementsByClassName("coffee_total");
//     for (let i = 0; i < priceList.length; i++) {
//         let rate = JSON.parse(document.getElementById("cost-" + i).getAttribute("bot"));
//         total = total + rate;
//         document.getElementById("total").innerHTML = "Total = ₹" + total;
//     }
// }
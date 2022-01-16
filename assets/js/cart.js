let total = 0;

function extractCoffee(items1) {
    let vcbl = "";
    for (let i of items1) {
        let totalPrice = i.price * i.quantity;
        total += parseFloat(totalPrice);
        let coffees = `  
              <tr>
                  <td>                                
                    <img src="${i.image}" alt="img" class="coffee_image">
                    <p class="coffee_name">${i.name}</p>
                  </td>
                  <td class="coffee_quantity">
                    <span id="qnty">${i.quantity}</span> 
                  </td>
                  <td class="coffee_price">
                    ₹ ${i.price}
                  </td>
                  <td class="coffee_total">
                    ₹ ${totalPrice}
                  </td>
              </tr>
              `;
        vcbl = vcbl + coffees;
    }
    document.getElementById("table").innerHTML = vcbl;

    let totOrder = `
                <p class="tot">Total = ₹ ${total}</p>
                <hr>
                <button class="order" onclick="placeOrder()">Place Order</button>

                 `
    document.getElementById("tot_order").innerHTML = totOrder;
}

const items = JSON.parse(localStorage.getItem("cart"));
extractCoffee(items);
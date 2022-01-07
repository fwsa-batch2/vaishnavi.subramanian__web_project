 let list = [];


 function onPageLoadHandler() {

     const cartInString = localStorage.getItem("lists");
     const cartItems = JSON.parse(cartInString);

     if (cartItems) {
         list = cartItems;
     }

     renderCart();
 }

 function renderCart() {

     let taskLength = list.length;

     let toBeAdded = "";

     for (let i = 0; i < taskLength; i++) {
         let lists = list[i];
         let addList = "<tr><th><h3> " + lists + " </h3><img src='../assets/images/Cappucino.jpeg' width='250'></th><th><button>-</button><span id='add_count'> 3 </span><button onclick='added()'>+</button></th><th><h3>&#x20B9;130</h3></th><th><h3>&#x20B9;390</h3></th></tr>";
         toBeAdded = toBeAdded + addList;
     }

     let table = document.getElementById("table");
     table.innerHTML = toBeAdded;

 }

 onPageLoadHandler();

 function placeOrder() {
     window.location.href = "./rmpayment.html"
 }


 const parsed = JSON.parse(localStorage.getItem("cart"));
 console.log(parsed);

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
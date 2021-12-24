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



 function extractCoffee(items) {
     let vcbl = "";
     for (let i = 0; i < items.length; i++) {
         let a = items[i];
         let coffees = `  
              <tr>
                  <td>
                                        
                    <img src="${a.image}" alt="img" class="coffee_image">
                    <p class="coffee_name">${a.name}</p>
                  </td>
                  <td class="coffee_quantity">
                    ${a.quantity}
                  </td>
                  <td class="coffee_price">
                    ₹ ${a.price}
                  </td>
                  <td class="coffee_total">
                    ₹ ${a.price}
                  </td>
              </tr>
              `;
         vcbl = vcbl + coffees;
     }
     document.getElementById("table").innerHTML = vcbl;

     let totOrder = `
                <p class="tot">Total = ₹1000</p>
                <hr>
                <button class="order" onclick="placeOrder()">Place Order</button>

                 `
     document.getElementById("tot_order").innerHTML = totOrder;
 }

 const items = JSON.parse(localStorage.getItem("cart"));
 extractCoffee(items);
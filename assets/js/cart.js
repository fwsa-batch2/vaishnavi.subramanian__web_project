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

     for (i = 0; i < taskLength; i++) {
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
let list = [];

function addCoffee(coffeeName) {
    event.preventDefault();
    list.push(coffeeName);
    console.log(list);
    localStorage.setItem("coffeeLists", JSON.stringify(list));
    window.location.href = "./cart.html";
}

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
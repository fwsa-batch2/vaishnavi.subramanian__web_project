let list = [];

function addCoffee(coffeeName) {

    list.push(coffeeName);
    console.log(list);
    localStorage.setItem("coffeeLists", JSON.stringify(list));

}

function onPageLoad() {
    let allList = JSON.parse(localStorage.getItem("coffeeLists"));
    if (allList) {
        list = allList;
    } else {
        list = [];
        localStorage.setItem("coffeeLists", JSON.stringify([]));
    }
}
onPageLoad();
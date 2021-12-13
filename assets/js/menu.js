let list = [];

function addCoffee(coffeeName) {

    list.push(coffeeName);
    console.log(list);
    localStorage.setItem("coffeeLists", JSON.stringify(list));

}

function onPageLoad() {
    let allList = JSON.parse(localStorage.getItem("lists"));
    if (allList) {
        list = allList;
    } else {
        list = [];
    }
}
onPageLoad();
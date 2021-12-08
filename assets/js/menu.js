let list = [];

function addCoffee(coffeeName) {

    list.push(coffeeName);
    console.log(list);
    localStorage.setItem("lists", JSON.stringify(list));

}

function onPageLoad() {
    const allList = localStorage.getItem("lists");
    if (allList) {
        list = JSON.parse(allList);
    } else {
        list = [];
    }
}

onPageLoad();
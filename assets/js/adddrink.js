let toBeAdded = [];


function submitHandler() {

    console.group("submitHandler");

    const coffeeName = document.getElementById("coffeeName").value;
    const description = document.getElementById("description").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const price = document.getElementById("price").value;

    const coffee = {
        "coffeeName": coffeeName,
        "description": description,
        "imageUrl": imageUrl,
        "price": price,
    }

    console.log(coffee);

    toBeAdded.push(coffee);
    const coffeeInString = JSON.stringify(toBeAdded);

    console.log(coffeeInString);

    localStorage.setItem("toBeAdded", coffeeInString);

    console.groupEnd();

    window.location.href = "./../../pages/rmmenu.html"
}

function onPageLoad() {
    console.group("onPageLoad");
    let parse = JSON.parse(localStorage.getItem("toBeAdded"));
    if (parse != null) {
        toBeAdded = parse;
        console.log(toBeAdded);
    } else {
        toBeAdded = [];
        localStorage.setItem("toBeAdded", JSON.stringify([]));
    }

    console.groupEnd();
    return toBeAdded;
}

onPageLoad();
let toBeAdded = [];


function submitHandler(event) {
    event.preventDefault();

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

    toBeAdded.push(coffee);
    const coffeeInString = JSON.stringify(toBeAdded);
    localStorage.setItem("toBeAdded", coffeeInString);
    window.location.href = "./../pages/rmmenu.html"
}

function onPageLoad() {
    let parse = JSON.parse(localStorage.getItem("toBeAdded"));
    if (parse != null) {
        toBeAdded = parse;
        console.log(toBeAdded);

    } else {
        localStorage.setItem("toBeAdded", JSON.stringify([]));
    }
    return toBeAdded;
}

onPageLoad();
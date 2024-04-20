function addToCart(ID) {
    let elementInCart = 'cart' + ID;
    let productNumbers = localStorage.getItem(elementInCart);
    productNumbers = parseInt(productNumbers);
    if (!isNaN(productNumbers)) {
        localStorage.setItem(elementInCart, productNumbers + 1);
    }
    else {
        localStorage.setItem(elementInCart, 1);
    }
    Update()
}

function removeFromCart(ID) {
    let elementInCart = 'cart' + ID;
    let productNumbers = localStorage.getItem(elementInCart);
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem(elementInCart, productNumbers - 1);
    }
    Update()
}

function Update(ID) {
    recreateElem();
    if (histogramChart) {
        histogramChart.destroy();
        histogramChart = null;
        toggleHistogramChart();
    }
    if (pieChart) {
        pieChart.destroy();
        pieChart = null;
        togglePieChart();
    } 
    if (lineGraph) {
        lineGraph.destroy();
        lineGraph = null;
        toggleLineGraph();
    }
    
}

function genBox(title, theImage, price, index) {
    let The_ID = object[index].id;
    let elementInCart = 'cart' + The_ID;
    let productNumbers = localStorage.getItem(elementInCart);
    productNumbers = parseInt(productNumbers);

    var box = document.createElement('article');
    box.classList.add('box');
    box.setAttribute('id', 'index_' + The_ID)
    
    var heading = document.createElement('h3');
    heading.style.margin = "0";
    heading.style.marginLeft = "20px";
    heading.textContent = title;
    
    var img = document.createElement('img');
    img.setAttribute('src', theImage);
    img.style.width = "200px";

    var p = document.createElement('h1');
    var UsdPrice = String(price * productNumbers) + "$";
    p.textContent = UsdPrice; 
    p.style.margin = "20px";

    var subtractButton = document.createElement('button');
    subtractButton.textContent = '-';
    subtractButton.style.margin = "0";
    subtractButton.style.marginLeft = "80px";
    subtractButton.addEventListener('click', function() {
        removeFromCart(The_ID);
    });

    var addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.style.margin = "0";
    addButton.addEventListener('click', function() {
        addToCart(The_ID);
    });
    
    var quantity = document.createElement('div');
    quantity.setAttribute('id', 'pargraph_' + The_ID);
    quantity.style.margin = "0";
    quantity.style.height = "30px";
    quantity.style.border = "2px solid black";
    
    var text = document.createElement('p');
    text.innerHTML = "Quantity:" + productNumbers;
    text.style.margin = "0";

    box.appendChild(heading);
    box.appendChild(img);
    box.appendChild(quantity);
    quantity.appendChild(text)
    box.appendChild(subtractButton);
    box.appendChild(addButton);
    box.appendChild(p);

    var container = document.getElementById("ThaBox123");
    container.appendChild(box);
}

function Reload(ID) {
    var parentElement = document.getElementById(ID)
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

function recreateElem() {
    Reload("ThaBox123");
    sortBy();
    var input1 = document.getElementById("LowerBoundInput").value;
    var input2 = document.getElementById("UpperBoundInput").value;
    for (var i = 0; i < 14; i++) { // Adjusted loop to iterate over all objects
        var title = object[i].title;
        var path = object[i].src;
        var price = object[i].price;
        
        let The_ID = object[i].id;
        let elementInCart = 'cart' + The_ID;
        let productNumbers = localStorage.getItem(elementInCart);
        productNumbers = parseInt(productNumbers);
        if(productNumbers && object[i].id != 10){
            if(price >= input1 && (input2 == 0 || price <= input2)){
                genBox(title, path, price, i);
            }
        }
    }
}

function getOptionInfo() {
    var dropdown = document.getElementById("Dropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    return selectedOption;
}

function sortBy() {
    if(getOptionInfo() == "Cheap"){
        object.sort(function(a, b) {
            return a.price - b.price;
        });
    }
    else if (getOptionInfo() == "Pricy"){
        object.sort(function(a, b) {
            return b.price - a.price;
        });
    }
    else{
        object.sort(function(a, b) {
            return a.title.localeCompare(b.title);
        });
    }
}

function CalculateTotal() {
    sum = 0;
    for (var i = 0; i < 14; i++){
        let The_ID = object[i].id;
        let elementInCart = 'cart' + The_ID;
        let productNumbers = localStorage.getItem(elementInCart);
        productNumbers = parseInt(productNumbers);
        if(productNumbers){
            sum += object[i].price * productNumbers;
        }
    }

    alert("Now You are in debt of " + sum + " of USD. Capitalism approved")
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if  (document.documentElement.scrollTop > window.innerHeight * 2 / 3){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})




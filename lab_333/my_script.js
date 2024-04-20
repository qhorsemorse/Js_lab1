window.object = [
	{
	id: 1,
	src: "img/photo_1_2024-03-03_08-37-41.jpg",
	title: "Drone",
	parameter: ["Photo", "Fun"],
	price: 1000,
	},
	
	{
	id: 2,
	src: "img/photo_2_2024-03-03_08-37-41.jpg",
	title: "Car",
	parameter: ["Work", "Fun", "Home"],
	price: 20000,
	},
	
	{
	id: 3,
	src: "img/photo_3_2024-03-03_08-37-41.jpg",
	title: "Doorbell",
	parameter: ["Home", "Photo"],
	price: 100,
	},
	
	{
	id: 4,
	src: "img/photo_4_2024-03-03_08-37-41.jpg",
	title: "VRset",
	parameter: ["Home", "Fun"],
	price: 300,
	},
	
	{
	id: 5,
	src: "img/photo_5_2024-03-03_08-37-41.jpg",
	title: "Airpods",
	parameter: ["Fun"],
	price: 200,
	},
	
	{
	id: 6,
	src: "img/photo_6_2024-03-03_08-37-41.jpg",
	title: "Phone",
	parameter: ["Home", "Work", "Fun", "Photo"],
	price: 1200,
	},
	
	{
	id: 7,
	src: "img/photo_7_2024-03-03_08-37-41.jpg",
	title: "Watch",
	parameter: ["Home", "Work"],
	price: 700,
	},
	
	{
	id: 8,
	src: "img/photo_8_2024-03-03_08-37-41.jpg",
	title: "Laptop",
	parameter: ["Home", "Work", "Fun", "Photo"],
	price: 3000,
	},
	
	{
	id: 9,
	src: "img/photo_9_2024-03-03_08-37-41.jpg",
	title: "Console",
	parameter: ["Fun", "Home"],
	price: 400,
	},
	
	{
	id: 10,
	src: "img/question_mark_with_magnifier.jpg",
	title: "Need more?",
	parameter: ["Home", "Work", "Fun", "Photo"],
	price: 0,
	},

	{
	id: 11,
	src: "img/Party.jpg",
	title: "Party",
	parameter: ["Fun"],
	price: 1000,
	},

	{
	id: 12,
	src: "img/Home.jpg",
	title: "Home",
	parameter: ["Home"],
	price: 1000000,
	},

	{
	id: 13,
	src: "img/Pen.jpg",
	title: "Pen",
	parameter: ["Work"],
	price: 5,
	},

	{
	id: 14,
	src: "img/Camera.jpg",
	title: "Camera",
	parameter: ["Photo"],
	price: 500,
	},
]
window.ID = -1;

function Products(){
	window.location.href = 'Products.html';
}


function Home(){
	window.location.href = 'redsite.html';
}

function Cart(){
	window.location.href = 'Cart.html';
}

function inefficientReload(ID) {
	var parentElement = document.getElementById(ID)
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}



function generateBox(title, theImage, price, index){
    var box = document.createElement('article');
    box.classList.add('box');
    
    var heading = document.createElement('h3');
	heading.style.margin = "0"
	heading.style.marginLeft = "20px"
    heading.textContent = title;
    
	var img = document.createElement('img');
	img.setAttribute('src', theImage);
	img.style.width = "200px"

    var button = document.createElement('button');
	button.setAttribute('type', 'button');
    button.classList.add('button');
	button.textContent = "More..."

	if (index == 9){
		button.addEventListener('click', function() {
			recreateMore();
		});
	}

	if (price != 0){
		button.addEventListener('click', function() {
			ID = index + 1;
			addToCart(ID);
		});
		button.textContent = "Buy!";
	}
	button.style.marginTop = "20px"
	button.style.marginBottom = "20px"

	var p = document.createElement('h1');
	UsdPrice = String(price) + "$";
    p.textContent = UsdPrice;
	p.style.marginTop = "20px"

    box.appendChild(heading);
	box.appendChild(img);
    box.appendChild(button);
	box.appendChild(p)

    var container = document.getElementById("ThaBox0");
    
    container.appendChild(box);
}


function recreateElements(){
	inefficientReload("ThaBox0");
	for (i = 0; i < 10; i++){
		title = object[i].title;
		path = object[i].src;
		price = object[i].price;
		let Option = getOptionInfo();
		if (sort_by(i, Option)) {
			generateBox(title, path, price, i);
		}
	}
}


function getOptionInfo() {
	var dropdown = document.getElementById("Dropdown");
	var selectedOption = dropdown.options[dropdown.selectedIndex].value;
	return selectedOption;
}

function sort_by(index, Option){
	if (Option == "All"){
		return true;
	}

	return (object[index].parameter.includes(Option));
}

window.onload = function(){
	recreateElements();
}

function recreateMore(){
	var parentElement = document.getElementById("ThaBox0")
    parentElement.removeChild(parentElement.lastChild);

	for (i = 10; i < 14; i++){
		title = object[i].title;
		path = object[i].src;
		price = object[i].price;
		let Option = getOptionInfo();
		if (sort_by(i, Option)) {
			generateBox(title, path, price, i);
		}
	}
}






var modal = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];

var button = document.getElementById("closeModal");

button.onclick = function() {
  modal.style.display = "none";
}
console.log("whit");
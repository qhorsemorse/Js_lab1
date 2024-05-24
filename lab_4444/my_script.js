if (localStorage.getItem('token')) {
	document.getElementById('logInOrOut').textContent = 'Log Out';
	document.getElementById('logInOrOut').addEventListener('click', logOut);
} else {
	document.getElementById('logInOrOut').textContent = 'Log In';
	document.getElementById('logInOrOut').addEventListener('click', Login);
}

token = localStorage.getItem('token');

let dobject

fetch('http://localhost:5027/api/products')
.then(response => {

	return response.json();
	
})
.then(data => {
	dobject = data

})
.catch(error => {
	console.error('Error fetching data:', error);
});

window.ID = -1;

function Products(){
	window.location.href = 'Products.html';
}


function Home(){
	window.location.href = 'redsite.html';
}

function Cart(){
	if(token){
		console.log("ksljhd")
		window.location.href = 'cart.html';
		console.log("ksljhd")
	}
	else{
		console.log("ksljhd")
		window.location.href = 'Log_in.html';
	}
}

function Login(){
	window.location.href = 'Log_in.html';
}

function Signin(){
	window.location.href = 'Sign_in.html';
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
		title = dobject[i].title;
		path = dobject[i].imageUrl;
		price = dobject[i].price;
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

	return (dobject[index].parameter.includes(Option));
}

window.onload = function(){
	recreateElements();
	console.log(object)
}

function recreateMore(){
	var parentElement = document.getElementById("ThaBox0")
    parentElement.removeChild(parentElement.lastChild);

	for (i = 10; i < 14; i++){
		title = dobject[i].title;
		path = dobject[i].src;
		price = dobject[i].price;
		let Option = getOptionInfo();
		if (sort_by(i, Option)) {
			generateBox(title, path, price, i);
		}
	}
}



function logOut() {
	localStorage.removeItem('token');
	location.reload();
}


var modal = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];

var button = document.getElementById("closeModal");

button.onclick = function() {
  modal.style.display = "none";
}
console.log("whit");

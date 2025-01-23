const width = window.innerWidth;
const switchButton = document.getElementById("switch");
const footer = document.getElementById("footer");
const body = document.querySelector("body");
const page = document.getElementById("page");
const leftSide = document.getElementById("leftside");
const spans = document.querySelectorAll("span");
const contacts = leftside.querySelector("#contact");
const education = document.querySelector("#education");
const header = document.querySelector("header");
const ulist = document.querySelector("ul");
const rightSide = document.querySelectorAll(".rightside")[1];
const imgBack = document.getElementById("imgBack");

switchButton.onclick = function(){
	if(body.style.background != "black"){
		body.style.background = "black";
		page.style.background = "#333";
		page.style.boxShadow = "0px 1px 15px 5px white";
		body.style.color = "white";
		switchButton.children[0].style.left = "50%";
		switchButton.children[0].style.background = "white";
		switchButton.style.background = "black";
		footer.style.backgroundColor = "#333";
		leftSide.style.backgroundColor = "#606060";
		
		for (let i = 0; i < 2; i++){
			spans[i].style.backgroundColor = "#333";
		}
		for (let i = 2; i < spans.length; i++){
			spans[i].style.backgroundColor = "#606060";
		}
		
		let temp;
		temp = leftside.querySelectorAll("h3");
		for(let i = 0; i < temp.length; i++){
			temp[i].style.color = "#cbb";
			temp[i].style.borderBottom = "2px solid #cbb";
		}
		
		temp = rightSide.querySelectorAll("h3");
		for(let i = 0; i < temp.length; i++)
			temp[i].style.borderBottom = "2px solid white";
			
		temp = contacts.querySelectorAll("img")
		for(let i = 0; i < temp.length; i++)
			temp[i].style.filter = "brightness(100%)"
			
		temp = contacts.querySelectorAll("p")
		for(let i = 0; i < temp.length; i++)
			temp[i].style.color = "#cbb"
			
		temp = education.querySelectorAll("h4");
		for(let i = 0; i < temp.length; i++)
			temp[i].style.color = "#cbb"
			
		temp = education.querySelectorAll("p");
		for(let i = 0; i < temp.length; i++)
			temp[i].style.color = "#cbb";
			
		header.style.background = "#222";
		ulist.style.color = "#cbb";
		imgBack.style.background = "#222";
	}
	else{
		body.style.background = "white";
		body.style.color = "black";
		switchButton.children[0].style.left = "0%";
		switchButton.children[0].style.background = "black";
		switchButton.style.background = "white";
		page.style.background = "white";
		page.style.boxShadow = "0px 1px 7px rgba(0,0,0,0.5)";
		footer.style.backgroundColor = "white";
		leftSide.style.backgroundColor = "#CCC";
		
		for (let i = 0; i < 2; i++)
			spans[i].style.backgroundColor = "white";
		for (let i = 2; i < spans.length; i++)
			spans[i].style.backgroundColor = "#ccc";
			
		temp = leftside.querySelectorAll("h3");
		for(let i = 0; i < temp.length; i++){
			temp[i].style.color = "#255";
			temp[i].style.borderBottom = "2px solid #255";
		}
		
		temp = rightSide.querySelectorAll("h3");
		for(let i = 0; i < temp.length; i++)
			temp[i].style.borderBottom = "2px solid black";
			
		temp = contacts.querySelectorAll("img")
		for(let i = 0; i < temp.length; i++)
			temp[i].style.filter = "brightness(0%)"
			
		temp = contacts.querySelectorAll("p")
		for(let i = 0; i < temp.length; i++)
			temp[i].style.color = "black"
			
		temp = education.querySelectorAll("h4");
		for(let i = 0; i < temp.length; i++)
			temp[i].style.color = "#133"
			
		temp = education.querySelectorAll("p");
		for(let i = 0; i < temp.length; i++)
			temp[i].style.color = "#133";
			
		header.style.background = "#909090";
		ulist.style.color = "black";
		imgBack.style.background = "#909090";
	}
}
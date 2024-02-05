import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.2/croot.js";

export function main(){
    setInner("Sankuy","Hi GISRANGE");
}

let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const navDots = document.getElementsByClassName("navdots");

//current img counter
let counter = 1;

images[0].onload = loadedImg; //assigns the function as the event handler

function loadedImg(){
    const size = images[0].clientWidth;
    console.log(size);

    slider.style.transform = "translateX(" + (-size * counter) + "px";

    nextBtn.addEventListener("click", function(){
        console.log(counter);
        if (counter >= images.length-1) return;
        slider.style.transition = "transform 0.4s ease-in-out";
        changeNavDotsImg(counter%5);
        counter++;
        slider.style.transform = "translateX(" + (-size * counter) + "px";
        
    });

    prevBtn.addEventListener("click", function(){
        console.log(counter);
        if (counter <= 0) return;
        slider.style.transition = "transform 0.4s ease-in-out";
        
        counter--;
        
        slider.style.transform = "translateX(" + (-size * counter) + "px";
        changeNavDotsImg(counter-1%5);
    });

    slider.addEventListener("transitionend", function(){
        if (images[counter].id == "firstimgclone"){
            slider.style.transition = "none";
            counter = images.length-counter;
            slider.style.transform = "translateX(" + (-size * counter) + "px";
        }
        if (images[counter].id == "lastimgclone"){
            slider.style.transition = "none";
            counter = images.length-2;
            slider.style.transform = "translateX(" + (-size * counter) + "px";
        }

    });
    for (let i = 0; i < navDots.length; i++){
        navDots[i].addEventListener("click", function(){
            if (navDotsIdCheck(i)) changeNavDotsImg(i);
        });
    }

    function changeNavDotsImg(temp){
        for (let i = 0; i < navDots.length; i++){
            let tempNavDot = document.getElementById(`id${i+1}`);
            tempNavDot.children[0].src = "img/unselected.png";
        }
        console.log("temp? " + temp);
        if (temp == -1){
            navDots[4].children[0].src = "img/selected.png";
        } else {
            navDots[temp].children[0].src = "img/selected.png";
        }
    }

    function navDotsIdCheck(i){
        if (navDots[i].id == `id${i+1}`){
            slider.style.transition = "transform 0.4s ease-in-out";
            counter = i+1;
            slider.style.transform = "translateX(" + (-size * counter) + "px";  
            return true;
        } else return false;

    }


}

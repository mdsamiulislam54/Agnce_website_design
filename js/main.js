
window.addEventListener("scroll", function(){
    var navbar_section = document.querySelector(".navbar_section")
   if(this.window.scrollY > 700){
    navbar_section.classList.add('sticky')
   }else{
    navbar_section.classList.remove('sticky')
   }
})

const slide = document.getElementById("slide")
const next = document.getElementById("next")
console.log(next);
const prev = document.getElementById("prev")
console.log(slide.firstElementChild);

next.addEventListener("click",nextslider)
function nextslider (){
    slide.appendChild(slide.firstElementChild)
}

prev.addEventListener("click",prevslider)
function prevslider (){
    slide.append(slide.lastElementChild)
}



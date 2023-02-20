

let dt = document.querySelectorAll("dt")
let dd = document.querySelectorAll("dd")

let i_up = '<i class="fa-solid fa-angle-up"></i>'
let i_down = '<i class="fa-solid fa-angle-down"></i>'


for(let j of dd){
    j.style.display = "none" 
} 

for(let i of dt){

    i.addEventListener("click", function(){

        let description = this.nextElementSibling

        if(description.style.display == "none"){
            description.style.display = "flex"
            this.style.color = "var(--color-2)"
            this.style.borderTop = "1px solid var(--color-2)"
            this.querySelector("i").outerHTML = i_up;
        }
        else{
            description.style.display = "none"
            this.style.color = "var(--color-5)"
            this.style.borderTop = "1px solid var(--color-4)"
            this.querySelector("i").outerHTML = i_down;
        }
    })
}



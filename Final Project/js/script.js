$(document).ready(function(){
    $(".titleofcollapsible").click(function (){
        if ($(this).next()[0] != $(".active1")[0]){
            $(".active1").slideUp("slow", function() {
                $(this).removeClass("active1")
            })
            $(this).next().slideDown("slow",function(){
                $(this).addClass("active1")
            })
        }
        else{
            $(".active1").slideUp("slow",function(){
                $(this).removeClass("active1")
            })
        }
    })
    $(".burgermenu").click(function(){
        $(".rownavbar").toggle("d-none")
    })
    $(".btncart").click(function(){
        $(".dropdowncartcontent").toggle("d-none")
    })
   
})

//Script for tabs

let menus = document.querySelectorAll(".menu div");
let contents = document.querySelectorAll(".contentoftab div");


for (let menu of menus) {
    menu.addEventListener("click", function () {
        let active = document.querySelector(".activetab");
        active.classList.remove("activetab");
        this.classList.add("activetab");

        let index = this.getAttribute("data-index");
        for (let content of contents) {
            if (content.getAttribute("data-index") == index) {
                content.classList.remove("d-none")
            } else {
                content.classList.add("d-none")
            }
        }

    })
}

//Script for Products filter index.html

let filters=document.querySelectorAll(".productsfilter span")
let filterrows=document.querySelectorAll(".productrow")

for(let filter of filters){
    filter.addEventListener("click",function(){
        let active=document.querySelector(".activefilter")
        active.classList.remove("activefilter")
        this.classList.add("activefilter")

        let index=this.getAttribute("data-index")
        for(let filterrow of filterrows){
            if(filterrow.getAttribute("data-index")==index){
                filterrow.classList.remove("d-none")
            }else{
                filterrow.classList.add("d-none")
            }
        }
    })
}



 //Script of quantity increase/decrease
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

  function myFunction() {
    var element = document.body;
    element.classList.toggle("darkbody");
 }
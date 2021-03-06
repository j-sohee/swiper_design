const menu = ["ABOUT", "WebSite(Jquery)","WebSite(Javascript)","Grid(Isotope)", "CONTACT"];

const swiper = new Swiper("#wrap", {
    loop : false,
    slidesPerView : "auto",
    centeredSlides:true,
    spaceBetween:150,
    mousewheel : true,

    navigation:{
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev"
    },

    pagination:{
        el : ".swiper-pagination",
        type: 'bullets',
        clickable : true,
        renderBullet : function(index, className){
            return `<span class="${className}">${menu[index]}</span>`
        }
    },

    /*
    effect:"coverflow",
    coverflowEffect : {
        rotate : 50,
        stretch : -100,
        depth : 400,
        slideShadows:false
    }
    */
});

//Dom Caching
const bgs = document.querySelectorAll(".bg li");
const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");
const navi = document.querySelectorAll(".swiper-pagination span");

next.addEventListener("click", activation);
prev.addEventListener("click", activation);
window.addEventListener("mousewheel", activation);
swiper.on("slideChangeTransitionEnd", activation);



for(let el of navi){
    el.addEventListener("click", e=>{
        const isOn = e.currentTarget.classList.contatins("swiper-pagination-bullet-active");
        if(isOn) return;
        swiper.on("slideChangeTransitionEnd", activation);
    })
}

function activation(){
    let item = document.querySelector(".swiper-slide-active");
    let i = item.getAttribute("data-custom-index");
    
    for(el of bgs){
        el.classList.remove("on");
    }
    bgs[i].classList.add("on");
}
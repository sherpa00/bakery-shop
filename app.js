const bar = document.querySelector("#bars");
const navs = document.querySelector(".navs");
const mq = window.matchMedia("max-width: 820px");
const banner = document.querySelector(".banner");
const inp = document.querySelector("input");

mq.addEventListener("change", (e) => {
    if (e.matches) {
        navs.style.display = "none";
        bar.style.display = "block";
    } else {
        navs.style.display = "flex";
        bar.style.display = "none";
    }
})

setInterval(() => {
    if (window.innerWidth >= 820) {
        navs.style.display = "flex";
    }
},500)

bar.addEventListener("click",() => {
    if (navs.style.display == "none") {
        navs.style.display = "flex";
        bar.classList.remove("fa-bars");
        bar.classList.add("fa-times");
        banner.style.marginTop = "-50px"
    } else {
        navs.style.display = "none";
        bar.classList.remove("fa-times");
        bar.classList.add("fa-bars");
        banner.style.marginTop = "30px"
    }
});

inp.addEventListener("click",() => {
    inp.style.borderColor = "skyblue";
})


// FILTER SECTION
const all_btn = document.querySelector(".all");
const sweet_btn = document.querySelector(".sweets");
const cake_btn = document.querySelector(".cakes");
const cupcake_btn = document.querySelector(".cupcakes");
const doughnut_btn = document.querySelector(".doughnut");

const img_box = document.querySelectorAll(".img_box");
const sweet_items = document.querySelectorAll(".sweet_item");
const cupcake_items = document.querySelectorAll(".cupcake_item");
const cake_items = document.querySelectorAll(".cake_item");
const doughnut_items = document.querySelectorAll(".doughnut_item");

all_btn.addEventListener("click", () => {
    for (let i = 0; i < img_box.length; i++) {
        img_box[i].style.display = "block";
    }
});

sweet_btn.addEventListener("click", sweet_func);
cupcake_btn.addEventListener("click",cupcake_func);
cake_btn.addEventListener("click",cake_func);
doughnut_btn.addEventListener("click", doughnut_func);

function sweet_func() {
    filter_out(cupcake_items);
    filter_out(cake_items);
    filter_out(doughnut_items);
    filter_in(sweet_items);
}

function cupcake_func() {
    filter_out(sweet_items);
    filter_out(cake_items);
    filter_out(doughnut_items);
    filter_in(cupcake_items);
}

function cake_func() {
    filter_out(cupcake_items);
    filter_out(sweet_items);
    filter_out(doughnut_items);
    filter_in(cake_items);
}

function doughnut_func() {
    filter_out(cupcake_items);
    filter_out(cake_items);
    filter_out(sweet_items);
    filter_in(doughnut_items);
}

function filter_in(element) {
    for (let i = 0; i < element.length; i++) {
        element[i].style.display = "block";
    }
};

function filter_out(element) {
    for (let i = 0; i < element.length; i++) {
        element[i].style.display = "none";
    }
}

inp.addEventListener("input",() => {
    var val = inp.value;
    switch (val) {
        case "all":
        case "ALL":
        case "All":
            for (let i = 0; i < img_box.length; i++) {
                img_box[i].style.display = "block";
            }
            break;
        case "sweet":
        case "Sweet":
        case "SWEET":
            sweet_func();
            break;
        case "cupcake":
        case "CupCake":
        case "CUPCAKE":
                cupcake_func();
                break;
                case "cake":
        case "CAKE":
        case "Cake":
            cake_func();
            break;
        case "DOUGHNUT":
        case "doughnut":
        case "Doughnut":
            doughnut_func();
            break;
        default:
            filter_out(img_box);
            
    }
})

inp.addEventListener("change",() => {
    var val = inp.value;
    switch (val) {
        case "all" || "ALL" :
            for (let i = 0; i < img_box.length; i++) {
                img_box[i].style.display = "block";
            }
            break;
        case "sweet":
        case "SWEET":
        case "Sweet":
            sweet_func();
            break;
        case "cupcake":
        case "CupCake":
        case "CUPCAKE":
            cupcake_func();
            break;
        case "cake":
        case "CAKE":
        case "Cake":
            cake_func();
            break;
        case "DOUGHNUT":
        case "doughnut":
        case "Doughnut":
            doughnut_func();
            break;
        default:
            filter_out(img_box);
            
    }
})


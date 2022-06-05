// model logic for model view project when the imgs in box is clicked
const imgs = document.querySelectorAll(".image_box");
const model = document.querySelector(".model_container");
const model_image = document.querySelector(".model_img");

//buttons for model navigations
const close = document.querySelector(".close");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

//array of images of items
var counter = 0;
const imgs_arr = [];
imgs.forEach(function(img) {
    imgs_arr.push(img.src);
});

// showing the model when img in box is clicked and igm.src is replaced;
imgs.forEach(function(img) {
    img.addEventListener("click",() => {
        counter = imgs_arr.indexOf(img.src);
        model_image.style.background = `url(${img.src})`;
        model.classList.toggle("show");
    })
});

//closing the model logic
close.addEventListener("click",() => [
    model.classList.remove("show")
]);

prev.addEventListener("click",() => {
    counter--;
    if (counter < 0) {
        counter = imgs_arr.length - 1;
    }
    model_image.style.background = `url(${imgs_arr[counter]})`
});
next.addEventListener("click",() => {
    counter++;
    if (counter > imgs_arr.length-1) {
        counter = 0;
    }
    model_image.style.background = `url(${imgs_arr[counter]})`
});

// SHOPPING CART PROJECT SECTION

//displaying program for cart
const cart_btn = document.querySelector(".cart");
const cart_div = document.querySelector(".cart_container");
const cart_cross = document.querySelector("#cart_hide")

cart_btn.addEventListener("click",() => {
    cart_div.classList.toggle("cart_show");
});

cart_cross.addEventListener("click",() => {
    cart_div.classList.remove("cart_show");
});

// logic for adding cart items in cart
const cart_item = document.querySelectorAll(".fa-cart-plus");
const cart_item_div = document.querySelector(".cart_item_container");

for (let i = 0; i < cart_item.length; i++) {
    cart_item[i].addEventListener("click",() => {
        let item = cart_item[i];
        let img_parent = item.parentElement.previousElementSibling;
        let source = img_parent.src;
        let price = item.nextElementSibling.innerHTML;
        cartCreateAndAdd(source,price);

        cart_div.classList.add("cart_show");
        popupMsg("ITEM ADDED SUCCESSFULY",true);
        
        let addprice = String(price).split("$")[1];
        total(addprice,true);
        // cart-item removing function 

        const item_del = document.querySelectorAll(".fa-trash");

        for (let i = 0; i < item_del.length; i++) {
            item_del[i].addEventListener("click",(event) => {
                let del = event.target;
                del.parentElement.remove();
                popupMsg("ITEM DELETED",false);
                let delprice = del.previousElementSibling.children[1].innerHTML;
                let ori_del_price = String(delprice).split("$")[1];
                total(ori_del_price,false);
            })
        }
    })
};

//function for creation of cart item to be added
function cartCreateAndAdd(img,price) {
    let parent = document.createElement("div");
    parent.classList.add("cart_item");

    let img_ele = document.createElement("img");
    img_ele.src = img;

    let inner_div = document.createElement("div");
    inner_div.classList.add("cart_info");
    inner_div.innerHTML = `<h3 class="cart_name">cart-item</h3>
                            <p class="cart_price">${price}</p>`;

    let icon_ele = document.createElement("i");
    icon_ele.className = "fa fa-trash";
    icon_ele.id = "del";

    parent.appendChild(img_ele);
    parent.appendChild(inner_div);
    parent.appendChild(icon_ele);

    cart_item_div.appendChild(parent);
}


// clear cart function
const items = cart_item_div.children;
const clear_btn = document.querySelector(".clear_cart");

clear_btn.addEventListener("click",() => {
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    };
    let total = document.querySelector(".total_price");
    total.innerHTML = 0;
    popupMsg("CART CLEARED",false);
});

// checkout function 
const checkout = document.querySelector(".checkout_cart");

checkout.addEventListener("click",() => {
    popupMsg("ORDER DELIVERED",true);
})

//function of pop message;
const message = document.querySelector(".cart_message");
const messg = document.querySelector(".msg");

function popupMsg(msg,bool) {
    if (bool) {
        message.style.color = "green";
        messg.innerHTML = msg;
    } else {
        message.style.color = "crimson";
        messg.innerHTML = msg;
    }
    message.style.top = "0";
    setInterval(() => {
        message.style.top = "-200px";
    },4000);
}


// total price estimination
function total(amount,exp) {
    let price = document.querySelector(".total_price");
    if (exp) {
        let val = Number(price.innerHTML);
        amount = Number(amount);
        price.innerHTML = val + amount;
    } else {
        let val = Number(price.innerHTML);
        amount = Number(amount);
        price.innerHTML = val - amount;
    }
}
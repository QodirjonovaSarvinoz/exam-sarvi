let aktsi = document.getElementById("aktsi");
let badge = document.getElementById("badge");

let cart = JSON.parse(localStorage.getItem("carts") || "[]");
let likes = JSON.parse(localStorage.getItem("likes") || "[]");

function updateBadge() {
  badge.textContent = cart.reduce((sum, item) => sum + item.numbers, 0);
}

function saveCart() {
  localStorage.setItem("carts", JSON.stringify(cart));
  updateBadge();
}

function showProducts() {

  let sliceAksiProduct = products.slice(products.length - 4);
  aktsi.innerHTML = "";

  sliceAksiProduct.forEach((el) => {
    const inCart = cart.find((item) => item.id === el.id);

    aktsi.innerHTML += `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
        <div class="relative ">
          <img onclick="openProduct(${el.id})" src="${el.images[0]}" alt="" class="w-full h-[140px] sm:h-[202px] rounded-2xl">
          <span class="absolute left-4 bottom-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-md font-semibold">-50%</span>
          <img onclick="toggleLike(${el.id})" src="${likes.find(l => l.id === el.id) ? './images/heart-red.svg' : './images/heard.png'}" alt="heart" class="absolute top-4 right-4 w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition">
        </div>

        <div class="flex flex-col px-4 pb-4 flex-grow pt-5">
          <div class="mb-3 flex justify-between">
            <div>
              <p class="text-lg font-semibold text-gray-900 leading-none">44,50 ₽</p>
              <p class="text-xs text-gray-400 mb-2">С картой</p>
            </div>
            <div>
              <p class="text-lg font-semibold text-gray-400 leading-none">${el.price} ₽</p>
              <p class="text-xs text-gray-400">Обычная</p>
            </div>
          </div>

          <p class="text-gray-700 text-sm font-medium leading-tight mb-3">${el.description}</p>

          <div class="flex gap-1 mb-3">
            <img src="./images/star.png" alt="star" class="w-4 h-4">
            <img src="./images/star.png" alt="star" class="w-4 h-4">
            <img src="./images/star.png" alt="star" class="w-4 h-4">
            <img src="./images/star (1).png" alt="star" class="w-4 h-4 opacity-40">
            <img src="./images/star (1).png" alt="star" class="w-4 h-4 opacity-40">
          </div> 

          ${
            inCart
              ? `
              <div class="w-full grid grid-cols-3 gap-1 mt-6">
                <button onclick="decrease(${el.id})" class="bg-orange-500 flex justify-center items-center rounded text-[18px] font-bold text-white">-</button>
                <span class="flex justify-center items-center rounded text-[18px] text-black">${inCart.numbers}</span>
                <button onclick="increase(${el.id})" class="bg-green-500 flex justify-center items-center rounded text-[18px] font-bold text-white">+</button>
              </div> `
              : `
              <button onclick="addToCart(${el.id})" class="mt-auto border border-green-600 text-green-600 font-semibold rounded-lg py-2 w-full transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white">
                В корзину
              </button>`
          }
        </div>
      </div> `
    ;
  });
}


function addToCart(id) {
  let product = products.find((el) => el.id === id);
  let inCart = cart.find((el) => el.id === id);
  if (inCart) {
    inCart.numbers += 1;
  } else {
    cart.push({ ...product, numbers: 1 });
  }
  saveCart();
  showProducts();
}


function increase(id) {
  cart = cart.map((item) => {
    if (item.id === id) item.numbers += 1;
    return item;
  });
  saveCart();
  showProducts();
}

function decrease(id) {
  cart = cart
    .map((item) => {
      if (item.id === id) item.numbers -= 1;
      return item;
    })
    .filter((item) => item.numbers > 0);
  saveCart();
  showProducts();
}

function toggleLike(id){
  let product = products.find((el) => el.id ===id);
  let inLikes = likes.find((el) => el.id === id);
  if (inLikes){
    likes = likes.filter((el) => el.id !== id);
  } else{
    likes.push(product);
  }
  localStorage.setItem("likes" , JSON.stringify(likes));
  updateLikeBadge();
  showProducts();
}
function openProduct(id){
  localStorage.setItem("selectedProduct" , id);
  window.location.href ="./tovar.html"
}

function updateLikeBadge(){
  const likeBadge = document.getElementById("likeBadge")
  if(likeBadge){
    likeBadge.textContent = likes.length;
  }
}


showProducts();
updateLikeBadge();
updateBadge();
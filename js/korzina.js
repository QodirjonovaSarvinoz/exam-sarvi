let cart = JSON.parse(localStorage.getItem("cart") || "[]");
console.log(cart);

const container = document.getElementById("kategoriya");
const badge = document.getElementById("badge");

badge.textContent = cart.length;

// 🗑 Mahsulotni o‘chirish
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCartProducts();
  badge.textContent = cart.length;
}

// 🧮 Mahsulotlar ro‘yxatini chiqarish
function showCartProducts() {
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = 
      <p class="text-center text-gray-500 text-lg py-10">
        Ваша корзина пуста 🛒
      </p>
    ;
    badge.textContent = cart.length;
    return;
  }

  cart.forEach(el => {
    container.innerHTML += 
      <article class="relative bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col">
        <img onclick="removeFromCart(${el.id})" 
             src="./images/trash.svg" 
             alt="trash" 
             class="absolute top-3 right-3 w-6 h-6 cursor-pointer transition hover:scale-110" />

        <div class="flex items-center justify-center h-36 mb-3">
          <img src="${el.images[0]}" alt="${el.name}" class="h-full object-contain" />
        </div>

        <p class="text-[17px] font-semibold text-gray-900 leading-none mb-1">${el.price} ₽</p>
        <p class="text-sm text-gray-600 mb-2">${el.name}</p>

        <div class="flex items-center justify-between mt-auto">
          <div class="flex items-center bg-green-400 rounded-md text-white">
            <button class="px-2 py-1 hover:bg-green-600 rounded-l-md" onclick="decreaseQuantity(${el.id})">−</button>
            <span class="w-8 text-center">${el.quantity || 1}</span>
            <button class="px-2 py-1 hover:bg-green-600 rounded-r-md" onclick="increaseQuantity(${el.id})">+</button>
          </div>
          <p class="font-semibold">${(el.price * (el.quantity || 1)).toFixed(2)} ₽</p>
        </div>
      </article>
    ;
  });

  badge.textContent = cart.length;
}

function increaseQuantity(id) {
  cart = cart.map(item => {
    if (item.id === id) item.quantity = (item.quantity || 1) + 1;
    return item;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  showCartProducts();
}

function decreaseQuantity(id) {
  cart = cart
    .map(item => {
      if (item.id === id && item.quantity > 1) item.quantity -= 1;
      return item;
    })
    .filter(item => item.quantity > 0);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCartProducts();
}

showCartProducts();
badge.textContent = cart.length;
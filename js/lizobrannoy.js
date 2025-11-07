

let likes = JSON.parse(localStorage.getItem("likes") || "[]");

console.log(likes);


const container = document.getElementById("kategoriya");
const likeBadge = document.getElementById("likeBadge");

function updateLikeBadge() {
  if (likeBadge) likeBadge.textContent = likes.length;
}

console.log(updateBadge());


function removeFromLikes(id) {
  likes = likes.filter(item => item.id !== id);
  localStorage.setItem("likes", JSON.stringify(likes));
  showLikedProducts();
  updateLikeBadge();
}

function showLikedProducts() {
  container.innerHTML = "";

  if (likes.length === 0) {
    container.innerHTML = `
      <p class="text-center text-gray-500 text-lg py-10">
        У вас пока нет избранных товаров 
      </p>
      `
    ;
    updateLikeBadge();
    return;
  }

  likes.forEach(el => {
    container.innerHTML += `
      <article class="relative bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col">
        <img onclick="removeFromLikes(${el.id})" 
             src="./images/heart-red.svg" 
             alt="heart" 
             class="absolute top-3 right-3 w-6 h-6 cursor-pointer transition hover:scale-110" />

        <div class="flex items-center justify-center h-36 mb-3">
          <img src="${el.images[0]}" alt="${el.name}" class="h-full object-contain" />
        </div>

        <p class="text-[17px] font-semibold text-gray-900 leading-none mb-1">${el.price} ₽</p>
        <p class="text-sm text-gray-600 mb-2">${el.description || el.name}</p>

        <div class="flex items-center gap-[2px] mb-3">
          <img src="./images/star.png" class="w-4 h-4" />
          <img src="./images/star.png" class="w-4 h-4" />
          <img src="./images/star.png" class="w-4 h-4" />
          <img src="./images/star.png" class="w-4 h-4" />
          <img src="./images/star.png" class="w-4 h-4" />
        </div>

        <button
          class="mt-auto w-full border border-green-400 text-green-700 text-sm py-2 rounded-md hover:bg-green-600 hover:text-white transition">
          В корзину
        </button>
      </article> `
  });

  updateLikeBadge();
}

showLikedProducts();
updateLikeBadge();
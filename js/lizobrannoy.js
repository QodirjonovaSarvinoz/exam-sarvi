// const kategoriya = document.getElementById("kategoriya");
// let likes = JSON.parse(localStorage.getItem("likes") || "[]");
// const badge = document.getElementById("likeBadge");

// function showLikes() {
//     if (!kategoriya) return;

//     kategoriya.innerHTML = "";

//     if (likes.length === 0) {
//         kategoriya.innerHTML = 
//             <p class="text-gray-500 text-lg">Нет добавленных товаров</p>
//         ;
//         updateBadge();
//         return;
//     }

//     likes.forEach(el => {
//         kategoriya.innerHTML += 
//         <article class="relative bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col" data-id="${el.id}">
//             <img 
//                 src="./images/heard.png" 
//                 alt="heart" 
//                 class="absolute top-3 right-3 w-6 h-6 cursor-pointer hover:scale-110 duration-200" 
//                 onclick="toggleLike(${el.id})"
//             />
//             <div class="flex items-center justify-center h-36 mb-3">
//                 <img src="${el.images[0]}" alt="${el.name}" class="h-full object-contain" />
//             </div>
//             <p class="text-[17px] font-semibold text-gray-900 leading-none mb-1">${el.price} ₽</p>
//             <p class="text-sm text-gray-600 mb-2">${el.name}</p>
//             <div class="flex items-center gap-[2px] mb-3">
//                 <img src="./images/star.png" class="w-4 h-4" />
//                 <img src="./images/star.png" class="w-4 h-4" />
//                 <img src="./images/star (1).png" class="w-4 h-4" />
//                 <img src="./images/star (1).png" class="w-4 h-4" />
//                 <img src="./images/star (1).png" class="w-4 h-4" />
//             </div>
//            <button 
//                 class="mt-auto w-full border border-green-400 text-green-700 text-sm py-2 rounded-md hover:bg-green-600 hover:text-white transition"
//                 onclick="addToCart(${el.id})"
//             >
//                 В корзину
//             </button> 
//         </article>;
//     });

//     updateBadge(); 
// }

// function toggleLike(id) {
//     const index = likes.findIndex(item => item.id === id);

//     if (index >= 0) {
//         likes.splice(index, 1); 
//     } else {
//         const product = products.find(p => p.id === id);
//         if (product) likes.push(product);
//     }

//     localStorage.setItem("likes", JSON.stringify(likes));
//     showLikes();
// }

// function updateBadge() {
//     if (likeBadge) likeBadge.textContent = likes.length;
// }
// function showLikes(){
//     if(!izobrannoy) return;
//     izobrannoy.innerHTML ="";
//     if(likes.length === 0){
//         izobrannoy.innerHTML ="<p class='text-cener text-gray-500 py -10'>у вас пока нет любимых товаров!!!</p>";
//         updateBadge();
//         return;
//     }
//     likes.forEach(el => {
//         izobrannoy.innerHTML += `
//         <article class="relative bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col">
//         <img src="./image/>heart-red.svg>"
//         alt="heart"
//         class="absolute top-3 right-3 w-6 h-6 cursor-pointer"
//         onclick="toggleLike(${el.id})"/>
//         <div class="flex items-center justify-center h-36 mb-3>
//         <img src="${el.images[0]}" alt="" class="h-full object-contain"</div>"
//         <p class="text-sm text-gray-600 mb-2">${el.name}</p>
//         </article>`;
//     });
//     updateBadge();
// }


// let cart = JSON.parse(localStorage.getItem("carts") || "[]");

// function addToCart(id) {
//     const item = products.find(p => p.id === id);
//     if (!item) return;

//     const cartItem = cart.find(c => c.id === id);
//     if (cartItem) {
//         cart = cart.map(c => c.id === id ? { ...c, numbers: (c.numbers || 1) + 1 } : c);
//     } else {
//         cart.push({ ...item, numbers: 1 });
//     }

//     localStorage.setItem("carts", JSON.stringify(cart));
//     alert("Товар добавлен в корзину!");
// }

// document.addEventListener("DOMContentLoaded", () => {
//     showLikes();
// });


let likes = JSON.parse(localStorage.getItem("likes") || "[]");

const container = document.getElementById("kategoriya");
const likeBadge = document.getElementById("likeBadge");

function updateLikeBadge() {
  if (likeBadge) likeBadge.textContent = likes.length;
}

function removeFromLikes(id) {
  likes = likes.filter(item => item.id !== id);
  localStorage.setItem("likes", JSON.stringify(likes));
  showLikedProducts();
  updateLikeBadge();
}

function showLikedProducts() {
  container.innerHTML = "";

  if (likes.length === 0) {
    container.innerHTML = 
      <p class="text-center text-gray-500 text-lg py-10">
        У вас пока нет избранных товаров 
      </p>
    ;
    updateLikeBadge();
    return;
  }

  likes.forEach(el => {
    container.innerHTML += 
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
      </article>
    ;
  });

  updateLikeBadge();
}

showLikedProducts();
updateLikeBadge();
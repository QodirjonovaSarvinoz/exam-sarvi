// let tovar= document.getElementById("tovar")
// let sliceTovarProduct = products.slice(products.length -36, products.length -32)
// sliceTovarProduct.map((el) =>{
//     tovar.innerHTML += `
//     <div
//                     class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
//                     <div class="relative">
//                         <img src="${el.images[0]}" alt="товар" class="w-full h-[140px] sm:h-[202px] rounded-2xl">
//                         <span
//                             class="absolute left-4 bottom-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-md font-semibold">50%</span>
//                         <img src="./images/heard.png" alt="heart"
//                             class="absolute top-4 right-4 w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition">
//                     </div>

//                     <div class="flex flex-col px-4 pb-4 flex-grow">

//                         <div class="mb-3 flex justify-between">
//                             <div>
//                                 <p class="text-lg font-semibold text-gray-900 leading-none mt-5">44,50 ₽</p>
//                                 <p class="text-xs text-gray-400 mb-2">С картой</p>
//                             </div>

//                             <div>
//                                 <p class="text-lg font-semibold text-gray-400 leading-none mt-5">${el.price} ₽</p>
//                                 <p class="text-xs text-gray-400">Обычная</p>
//                             </div>
//                         </div>
//                         <div> <h4 class="font-semibold text-black-100 pb-[10px]">${el.name}</h4> </div>
//                         <p class="text-gray-700 text-sm font-medium leading-tight mb-3">${el.description}</p>

//                         <div class="flex gap-1 mb-3">
//                             <img src="./images/star.png" alt="star" class="w-4 h-4">
//                             <img src="./images/star.png" alt="star" class="w-4 h-4">
//                             <img src="./images/star (1).png" alt="star" class="w-4 h-4">
//                             <img src="./images/star (1).png" alt="star" class="w-4 h-4 opacity-40">
//                             <img src="./images/star (1).png" alt="star" class="w-4 h-4 opacity-40">
//                         </div>

//                        <a href="./korzina.html"><button
//                             class="mt-auto border border-green-600 text-green-600 font-semibold rounded-lg py-2 w-full transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white">
//                             В корзину
//                         </button></a>
//                     </div>
//                 </div>`
// })

// const searchInput = document.querySelector('input[placeholder="Найти товар"]');
// const kategoriyaContainer = document.getElementById('kategoriya'); 

// function showProducts(arr) {
//   kategoriyaContainer.innerHTML = ""; 
//   if (arr.length === 0) {
//     kategoriyaContainer.innerHTML = "<p class='text-center text-gray-500 py-10'>Товары не найдены 😢</p>";
//     return;
//   }

//   arr.forEach(product => {
//     kategoriyaContainer.innerHTML += 
//       <article class="relative bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col">
//         <div class="flex items-center justify-center h-36 mb-3">
//           <img src="${product.images[0]}" alt="${product.name}" class="h-full object-contain" />
//         </div>
//         <p class="text-[17px] font-semibold text-gray-900 leading-none mb-1">${product.price} ₽</p>
//         <p class="text-sm text-gray-600 mb-2">${product.name}</p>
//         <button
//           class="mt-auto w-full border border-green-400 text-green-700 text-sm py-2 rounded-md hover:bg-green-600 hover:text-white transition">
//           В корзину
//         </button>
//       </article>
//     ;
//   });
// }

// showProducts(products);

// searchInput.addEventListener('input', () => {
//   const query = searchInput.value.toLowerCase();
//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(query)
//   );
//   showProducts(filteredProducts);
// });
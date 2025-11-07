let  cards = document.getElementById("cards")

let sliceLastProduct = products.slice(products.length -4, products.length)

sliceLastProduct.map((el) => {
    cards.innerHTML += `
    <div
                class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <div class="relative">
                    <img src=${el.images[0]}  alt="product" class="w-full h-44 object-contain mx-auto mt-[25px]">
                    <img src="./images/heard.png" alt="heart" class="absolute top-3 right-3 w-6 h-6 cursor-pointer">
                </div>

                <div class="p-4 flex flex-col gap-2">
                    <div class="flex items-baseline gap-2">
                        <span class="text-lg font-semibold text-gray-900 pb-[20px]">${el.price}₽</span>

                    </div>
                    <div> <h4 class="font-semibold text-black-100 pb-[10px]">${el.name}</h4> </div>
                    <h3 class="teGS12»xt-base font-semibold text-gray-900 leading-tight">${el.description}
                        </h3>
                    <div class="flex items-center gap-1">
                        <img src="./images/star.png" class="w-4 h-4" alt="">
                        <img src="./images/star.png" class="w-4 h-4" alt="">
                        <img src="./images/star (1).png" class="w-4 h-4" alt="">
                        <img src="./images/star (1).png" class="w-4 h-4" alt="">
                        <img src="./images/star (1).png" class="w-4 h-4" alt="">
                    </div>
                    <a href="./korzina.html"><button
                            class="mt-auto border border-green-600 text-green-600 font-semibold rounded-lg py-2 w-full transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white">
                            В корзину
                        </button></a>
                </div>

            </div>`;
});


let cards1 = document.getElementById("cards1")
let sliceNextProduct = products.slice(products.length-8 , products.length-4)
sliceNextProduct.map((el) => {
    cards1.innerHTML += `
    <div
                class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                <div class="relative">
                  <a href="./tovar.html">  <img src="${el.images[0]}" alt="product" class="w-full h-[140px] sm:h-[202px] rounded-2xl"> </a>
                    <img src="./images/heard.png" alt="heart" class="absolute top-3 right-3 w-6 h-6 cursor-pointer">
                </div>

                <div class="p-4 flex flex-col gap-2">
                    <div class="flex items-baseline gap-2">
                        <span class="text-lg font-semibold text-gray-900 pb-[20px]">${el.price}₽</span>

                    </div>
                    <div> <h4 class="font-semibold text-black-100 pb-[10px]">${el.name}</h4> </div>
                    <h3 class="text-base font-semibold text-gray-900 leading-tight">${el.description}</h3>
                    <div class="flex items-center gap-1">
                        <img src="./images/star.png" class="w-4 h-4" alt="">
                        <img src="./images/star.png" class="w-4 h-4" alt="">
                        <img src="./images/star (1).png" class="w-4 h-4" alt="">
                        <img src="./images/star (1).png" class="w-4 h-4" alt="">
                        <img src="./images/star (1).png" class="w-4 h-4" alt="">
                    </div>
                    <a href="./korzina.html"><button
                            class="mt-auto border border-green-600 text-green-600 font-semibold rounded-lg py-2 w-full transition-all duration-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white">
                            В корзину
                        </button></a>
                </div>

            </div>`
});



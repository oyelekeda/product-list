// const products = [
//   {
//     name: "Smartwatch X1",
//     price: 25000,
//     oldPrice: 32000,
//     discount: 22,
//     image: "images/11.jpeg",
//   },
//   {
//     name: "Wireless Headphones",
//     price: 18000,
//     oldPrice: 23000,
//     discount: 21,
//     image: "images/12.jpeg",
//   },
//   {
//     name: "Gaming Mouse",
//     price: 8500,
//     oldPrice: 11000,
//     discount: 23,
//     image: "images/13.jpeg",
//   },
//   {
//     name: "Bluetooth Speaker",
//     price: 12000,
//     oldPrice: 16000,
//     discount: 25,
//     image: "images/14.jpeg",
//   },
//   {
//     name: "Laptop Stand",
//     price: 9500,
//     oldPrice: 13000,
//     discount: 27,
//     image: "images/15.jpeg",
//   },
//   {
//     name: "Mechanical Keyboard",
//     price: 21000,
//     oldPrice: 28000,
//     discount: 25,
//     image: "images/16.jpeg",
//   },
//   {
//     name: "USB-C Hub",
//     price: 13500,
//     oldPrice: 17000,
//     discount: 21,
//     image: "images/17.jpeg",
//   },
//   {
//     name: "External Hard Drive",
//     price: 32000,
//     oldPrice: 39000,
//     discount: 18,
//     image: "images/18.jpeg",
//   },
//   {
//     name: "Portable SSD",
//     price: 45000,
//     oldPrice: 56000,
//     discount: 20,
//     image: "images/19.jpeg",
//   },
//   {
//     name: "Laptop Cooling Pad",
//     price: 8000,
//     oldPrice: 11000,
//     discount: 27,
//     image: "images/20.jpeg",
//   },
//   {
//     name: "Webcam HD Pro",
//     price: 19500,
//     oldPrice: 25000,
//     discount: 22,
//     image: "images/21.jpeg",
//   },
//   {
//     name: "Monitor Light Bar",
//     price: 15500,
//     oldPrice: 19000,
//     discount: 18,
//     image: "images/22.jpeg",
//   },
//   {
//     name: "Power Bank 20000mAh",
//     price: 16500,
//     oldPrice: 20000,
//     discount: 17,
//     image: "images/23.jpeg",
//   },
//   {
//     name: "Fast Charging Cable",
//     price: 3500,
//     oldPrice: 5000,
//     discount: 30,
//     image: "images/24.jpeg",
//   },
//   {
//     name: "Wireless Charger Pad",
//     price: 8500,
//     oldPrice: 11000,
//     discount: 23,
//     image: "images/25.jpeg",
//   },
//   {
//     name: "Phone Tripod Stand",
//     price: 7000,
//     oldPrice: 9500,
//     discount: 26,
//     image: "images/26.jpeg",
//   },
//   {
//     name: "Bluetooth Tracker",
//     price: 9000,
//     oldPrice: 12000,
//     discount: 25,
//     image: "images/27.jpeg",
//   },
//   {
//     name: "Smart Ring Light",
//     price: 11000,
//     oldPrice: 14500,
//     discount: 24,
//     image: "images/28.jpeg",
//   },
//   {
//     name: "Portable Mini Projector",
//     price: 48000,
//     oldPrice: 62000,
//     discount: 22,
//     image: "images/29.jpeg",
//   },
//   {
//     name: "Noise Cancelling Earbuds",
//     price: 23000,
//     oldPrice: 29000,
//     discount: 21,
//     image: "images/30.jpeg",
//   },
// ];

// const container = document.getElementById("product-container");

// for (let i = 0; i < products.length; i++) {
//   const p = products[i];
//   const productCard = document.createElement("div");
//   productCard.className =
//     "bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 relative";

//   productCard.innerHTML = `
//     <span class="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
//       -${p.discount}%
//     </span>
//     <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover" />
//     <div class="p-4 text-center">
//       <h2 class="text-lg font-semibold">${p.name}</h2>
//       <div class="mt-2">
//         <p class="text-blue-600 font-bold text-xl">₦${p.price.toLocaleString()}</p>
//         <p class="text-gray-400 line-through text-sm">₦${p.oldPrice.toLocaleString()}</p>
//       </div>
//       <button class="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
//         Add to Cart
//       </button>
//     </div>
//   `;

//   container.appendChild(productCard);
// }


const products = [
  {
    name: "Smartwatch X1",
    price: 25000,
    oldPrice: 32000,
    discount: 22,
    image: "images/11.jpeg",
  },
  {
    name: "Wireless Headphones",
    price: 18000,
    oldPrice: 23000,
    discount: 21,
    image: "images/12.jpeg",
  },
  {
    name: "Gaming Mouse",
    price: 8500,
    oldPrice: 11000,
    discount: 23,
    image: "images/13.jpeg",
  },
  {
    name: "Bluetooth Speaker",
    price: 12000,
    oldPrice: 16000,
    discount: 25,
    image: "images/14.jpeg",
  },
  {
    name: "Laptop Stand",
    price: 9500,
    oldPrice: 13000,
    discount: 27,
    image: "images/15.jpeg",
  },
  {
    name: "Mechanical Keyboard",
    price: 21000,
    oldPrice: 28000,
    discount: 25,
    image: "images/16.jpeg",
  },
  {
    name: "USB-C Hub",
    price: 13500,
    oldPrice: 17000,
    discount: 21,
    image: "images/17.jpeg",
  },
  {
    name: "External Hard Drive",
    price: 32000,
    oldPrice: 39000,
    discount: 18,
    image: "images/18.jpeg",
  },
  {
    name: "Portable SSD",
    price: 45000,
    oldPrice: 56000,
    discount: 20,
    image: "images/19.jpeg",
  },
  {
    name: "Laptop Cooling Pad",
    price: 8000,
    oldPrice: 11000,
    discount: 27,
    image: "images/20.jpeg",
  },
  {
    name: "Webcam HD Pro",
    price: 19500,
    oldPrice: 25000,
    discount: 22,
    image: "images/21.jpeg",
  },
  {
    name: "Monitor Light Bar",
    price: 15500,
    oldPrice: 19000,
    discount: 18,
    image: "images/22.jpeg",
  },
  {
    name: "Power Bank 20000mAh",
    price: 16500,
    oldPrice: 20000,
    discount: 17,
    image: "images/23.jpeg",
  },
  {
    name: "Fast Charging Cable",
    price: 3500,
    oldPrice: 5000,
    discount: 30,
    image: "images/24.jpeg",
  },
  {
    name: "Wireless Charger Pad",
    price: 8500,
    oldPrice: 11000,
    discount: 23,
    image: "images/25.jpeg",
  },
  {
    name: "Phone Tripod Stand",
    price: 7000,
    oldPrice: 9500,
    discount: 26,
    image: "images/26.jpeg",
  },
  {
    name: "Bluetooth Tracker",
    price: 9000,
    oldPrice: 12000,
    discount: 25,
    image: "images/27.jpeg",
  },
  {
    name: "Smart Ring Light",
    price: 11000,
    oldPrice: 14500,
    discount: 24,
    image: "images/28.jpeg",
  },
  {
    name: "Portable Mini Projector",
    price: 48000,
    oldPrice: 62000,
    discount: 22,
    image: "images/29.jpeg",
  },
  {
    name: "Noise Cancelling Earbuds",
    price: 23000,
    oldPrice: 29000,
    discount: 21,
    image: "images/30.jpeg",
  },
];

const container = document.getElementById("product-container");

container.innerHTML = products.map(function(p) {
  return `
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 relative">
      <span class="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
        -${p.discount}%
      </span>
      <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover" />
      <div class="p-4 text-center">
        <h2 class="text-lg font-semibold">${p.name}</h2>
        <div class="mt-2">
          <p class="text-blue-600 font-bold text-xl">₦${p.price.toLocaleString()}</p>
          <p class="text-gray-400 line-through text-sm">₦${p.oldPrice.toLocaleString()}</p>
        </div>
        <button class="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}).join('');

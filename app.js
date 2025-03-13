let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');

window.addEventListener("scroll", function () {
   const navbar = document.querySelector(".navbar");
   if (window.scrollY > 0) {
       navbar.classList.add("nav-sticky");
   } else {
       navbar.classList.remove("nav-sticky");
   }
});


document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
}



        // const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s="; // 🍔 TheMealDB API for food items

        // async function fetchProducts() {
        //     try {
        //         let response = await fetch(API_URL);
        //         let data = await response.json();

        //         let products = data.meals.map(meal => ({
        //             id: meal.idMeal,
        //             name: meal.strMeal,
        //             price: (Math.random() * 20 + 5).toFixed(2), // Fake price
        //             image: meal.strMealThumb,
        //             description: meal.strInstructions.slice(0, 100) + "..."
        //         }));

        //         localStorage.setItem("products", JSON.stringify(products));
        //         displayProducts(products);
        //     } catch (error) {
        //         console.error("Error fetching products:", error);
        //     }
        // }

        // function displayProducts(products) {
        //     let container = document.getElementById("products-container");
        //     container.innerHTML = "";
        //     products.forEach(product => {
        //         let div = document.createElement("div");
        //         div.classList.add("box");
        //         div.innerHTML = `
        //             <img src="${product.image}" alt="${product.name}">
        //             <h3>${product.name}</h3>
        //             <p>${product.description}</p>
        //             <p>Price: $${product.price}</p>
        //             <button onclick="addToCart(${product.id})">Add to Cart</button>
        //         `;
        //         container.appendChild(div);
        //     });
        // }

        // function addToCart(id) {
        //     let products = JSON.parse(localStorage.getItem("products")) || [];
        //     let cart = JSON.parse(localStorage.getItem("cart")) || [];
        //     let product = products.find(p => p.id == id);

        //     let existingItem = cart.find(item => item.id == id);
        //     if (existingItem) {
        //         existingItem.qty += 1;
        //     } else {
        //         cart.push({ ...product, qty: 1 });
        //     }

        //     localStorage.setItem("cart", JSON.stringify(cart));
        //     loadCart();
        // }

        // function loadCart() {
        //     let cart = JSON.parse(localStorage.getItem("cart")) || [];
        //     let cartContainer = document.getElementById("cart-container");
        //     let totalPriceElement = document.getElementById("total-price");

        //     cartContainer.innerHTML = "";
        //     let total = 0;

        //     if (cart.length === 0) {
        //         cartContainer.innerHTML = "<p>Your cart is empty!</p>";
        //         totalPriceElement.innerText = "";
        //         return;
        //     }

        //     cart.forEach((item, index) => {
        //         total += item.price * item.qty;
        //         let div = document.createElement("div");
        //         div.classList.add("cart-item");
        //         div.innerHTML = `
        //             <img src="${item.image}" alt="${item.name}">
        //             <p><strong>${item.name}</strong></p>
        //             <p>$${item.price} x ${item.qty}</p>
        //             <button onclick="removeItem(${index})">Remove</button>
        //         `;
        //         cartContainer.appendChild(div);
        //     });

        //     totalPriceElement.innerText = `Total: $${total.toFixed(2)}`;
        // }

        // function removeItem(index) {
        //     let cart = JSON.parse(localStorage.getItem("cart")) || [];
        //     cart.splice(index, 1);
        //     localStorage.setItem("cart", JSON.stringify(cart));
        //     loadCart();
        // }

        // function checkout() {
        //     let cart = JSON.parse(localStorage.getItem("cart")) || [];
        //     if (cart.length === 0) {
        //         alert("Your cart is empty!");
        //         return;
        //     }

        //     document.getElementById("checkout-section").style.display = "block";
        //     let checkoutContainer = document.getElementById("checkout-container");
        //     checkoutContainer.innerHTML = "";

        //     cart.forEach(item => {
        //         let div = document.createElement("div");
        //         div.innerHTML = `
        //             <img src="${item.image}" alt="${item.name}">
        //             <p>${item.name} - $${item.price} x ${item.qty}</p>
        //         `;
        //         checkoutContainer.appendChild(div);
        //     });
        // }

        // function placeOrder() {
        //     alert("Order placed successfully!");
        //     localStorage.removeItem("cart");
        //     loadCart();
        //     document.getElementById("checkout-section").style.display = "none";
        // }

        // // Fetch products from API when page loads
        // fetchProducts();
        // loadCart();



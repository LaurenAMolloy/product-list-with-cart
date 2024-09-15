//Declare a variable to select the product card container
let shop = document.getElementById("shop");
//grab the cart button
const cartButton = document.querySelectorAll(".cart-button");

//Create an array of objects
let shopItemsData =
  [
    {
      "id": "1",
      "image": {
        "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
        "mobile": "./assets/images/image-waffle-mobile.jpg",
        "tablet": "./assets/images/image-waffle-tablet.jpg",
        "desktop": "./assets/images/image-waffle-desktop.jpg"
      },
      "name": "Waffle with Berries",
      "category": "Waffle",
      "price": 6.50
    },
    {
      "id": "2",
      "image": {
        "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
        "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
        "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
        "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
      },
      "name": "Vanilla Bean Crème Brûlée",
      "category": "Crème Brûlée",
      "price": 7.00
    },
    {
      "id": "3",
      "image": {
        "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
        "mobile": "./assets/images/image-macaron-mobile.jpg",
        "tablet": "./assets/images/image-macaron-tablet.jpg",
        "desktop": "./assets/images/image-macaron-desktop.jpg"
      },
      "name": "Macaron Mix of Five",
      "category": "Macaron",
      "price": 8.00
    },
    {
      "id": "4",
      "image": {
        "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
        "mobile": "./assets/images/image-tiramisu-mobile.jpg",
        "tablet": "./assets/images/image-tiramisu-tablet.jpg",
        "desktop": "./assets/images/image-tiramisu-desktop.jpg"
      },
      "name": "Classic Tiramisu",
      "category": "Tiramisu",
      "price": 5.50
    },
    {
      "id": "5",
      "image": {
        "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
        "mobile": "./assets/images/image-baklava-mobile.jpg",
        "tablet": "./assets/images/image-baklava-tablet.jpg",
        "desktop": "./assets/images/image-baklava-desktop.jpg"
      },
      "name": "Pistachio Baklava",
      "category": "Baklava",
      "price": 4.00
    },
    {
      "id": "6",
      "image": {
        "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
        "mobile": "./assets/images/image-meringue-mobile.jpg",
        "tablet": "./assets/images/image-meringue-tablet.jpg",
        "desktop": "./assets/images/image-meringue-desktop.jpg"
      },
      "name": "Lemon Meringue Pie",
      "category": "Pie",
      "price": 5.00
    },
    {
      "id": "7",
      "image": {
        "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
        "mobile": "./assets/images/image-cake-mobile.jpg",
        "tablet": "./assets/images/image-cake-tablet.jpg",
        "desktop": "./assets/images/image-cake-desktop.jpg"
      },
      "name": "Red Velvet Cake",
      "category": "Cake",
      "price": 4.50
    },
    {
      "id": "8",
      "image": {
        "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
        "mobile": "./assets/images/image-brownie-mobile.jpg",
        "tablet": "./assets/images/image-brownie-tablet.jpg",
        "desktop": "./assets/images/image-brownie-desktop.jpg"
      },
      "name": "Salted Caramel Brownie",
      "category": "Brownie",
      "price": 4.50
    },
    {
      "id": "9",
      "image": {
        "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
        "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
        "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
        "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
      },
      "name": "Vanilla Panna Cotta",
      "category": "Panna Cotta",
      "price": 6.50
    }
  ];

let basket = [{
  id: "choccy",
  item: 13,
}];



//Display the data from the array using map
let generateShop = () => {
  shop.innerHTML = (shopItemsData.map((x) => {
    let { id, image, name, category, price } = x;
    return `
      <div id=product-${id} class="dessert-card">
        <div class="image-btn-container">

          <img class="dessert-item-image" src="${image.mobile}" alt="waffle">
          <button class="cart-button show-hide-cart"" type="button"><i class="bi bi-cart"></i>
              <alt="empty cart icon"><span >Add to cart</span></button>

            <div class="quantity-button buttons hide">
              <i onclick="decrement(${id})"  class="bi bi-dash-circle"></i>
              <div id=${id} class="quantity">0</div>
              <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
              </div>
        </div>

        <div class="desert-item-details">
          <span class="dessert-item-title">${category}</span>
          <span class="dessert-item-blurb">${name}</span>
          <span class="dessert-item-price">$${price}</span>
        </div>
      </div>


      `;
    //use join to remove the invisible comma
  }).join(""));
};

shop.addEventListener('click', function(event) {
  // Check if the clicked element is a cart button
  if (event.target.closest('.cart-button')) {
    // Perform your cart logic here
    let button = event.target.closest('.cart-button');
    console.log('Cart button clicked:', button);
    
    // Show the quantity buttons
    let quantityButton = button.closest('.dessert-card').querySelector('.quantity-button');
    quantityButton.classList.remove('hide');
    
    // Hide the cart button
    button.classList.add('hide');

    // Find the closest parent dessert card
    let parentCard = button.closest('.dessert-card');

    let imageElement = parentCard.querySelector('.dessert-item-image');
    
    // Add the border class to the image
    imageElement.classList.add('image-border');

  }
});

generateShop();

//increment function
let increment  = (id) => {
  let selectedItem = shopItemsData.find((item) => item.id === id.toString()); // Ensure you find the item/product using the correct ID
  let search = basket.find((x) => x.id === selectedItem.id);

  if(search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
  search.item += 1
  }

  //console.log(basket);//
  update(selectedItem.id);
};
//decrement function
let decrement = (id) => {
  let selectedItem = shopItemsData.find((item) => item.id === id.toString()); // Use the ID to find the right/product item
  
  let search = basket.find((x) => x.id === selectedItem.id);

  if(search.item === 0) return;
  else {
  search.item -= 1
  }

  update(selectedItem.id);
};

//update function
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
};

//calculate and display in the basket 1.29




  
        



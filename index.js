groceriesList = [
  {
    name: "Tomato",
    description: "Indian tomato",
    image: "assets/tomato.jpg",
    price: 15,
    unit: "kg",
    quantityList: [1, 2, 3],
  },
  {
    name: "Onion",
    description: "Indian onion",
    image: "assets/onion.jpg",
    price: 24,
    unit: "kg",
    quantityList: [1],
  },
  {
    name: "Apple",
    description: "Kashmiri seb",
    image: "assets/apple.jpg",
    price: 175,
    unit: "kg",
    quantityList: [1, 2, 3, 4, 5, 10],
  },
  {
    name: "Colgate toothpaste",
    description: "Use for healthy teeth",
    image: "assets/colgate.jpeg",
    price: 40,
    unit: "200g",
    quantityList: [1, 2],
  },
  {
    name: "Lays",
    description: "snacks",
    image: "assets/lays.png",
    price: 20,
    unit: "100g",
    quantityList: [1, 3],
  },
  {
    name: "Spiral book",
    description: "write throgh the journey",
    image: "assets/book.jpeg",
    price: 100,
    unit: "200 page",
    quantityList: [1, 2],
  },
  {
    name: "Milk",
    description: "Make your own coffee",
    image: "assets/milk.jpeg",
    price: 30,
    unit: "litre",
    quantityList: [1, 2, 3, 4],
  },
  {
    name: "Orange",
    description: "Rich in vitamin c",
    image: "assets/orange.jpeg",
    price: 90,
    unit: "kg",
    quantityList: [1],
  },
  {
    name: "Grapes",
    description: "Indian grape",
    image: "assets/grapes.jpeg",
    price: 120,
    unit: "kg",
    quantityList: [1, 2, 4, 5],
  },
  {
    name: "Himalaya shampoo",
    description: "Herbal shampoo",
    image: "assets/himalaya.jpeg",
    price: 220,
    unit: "500g",
    quantityList: [1, 2],
  },
  {
    name: "Ladies finger",
    description: "Hey ladies! have your vegetable for lunch",
    image: "assets/ladies-finger.jpeg",
    price: 50,
    unit: "kg",
    quantityList: [1, 2, 3],
  },
  {
    name: "Bread",
    description: "Feeling unwell have pieces of bread",
    image: "assets/bread.jpeg",
    price: 40,
    unit: "qty",
    quantityList: [1, 2],
  },
];

let filteredGroceryList = groceriesList;

function listenForSearchChanges() {
  let searchInput = document.getElementById("search-grocery");
  var groceryList = document.getElementById("grocery-list");
  let searchContainer = document.querySelector(".utility-functions .search");
  let clearTemplate = document.getElementById("clear-search");
  searchInput.addEventListener("input", () => {
    groceryList.innerHTML = "";
    if (searchInput.value && !searchContainer.querySelector(".clear-icon")) {
      let clearSearch = clearTemplate.content.cloneNode(true);
      let clearSearchElement = clearSearch.querySelector(".clear-icon");
      clearSearchElement.addEventListener("click", () => {
        searchInput.value = "";
        clearSearchElement.remove();
        filteredGroceryList = groceriesList;
        groceryList.innerHTML = "";

        displayGroceries();
      });
      searchContainer.appendChild(clearSearch);
    } else if (!searchInput.value) {
      let clearSearchElement = searchContainer.querySelector(".clear-icon");
      if (clearSearchElement) {
        clearSearchElement.remove();
      }
    }
    filteredGroceryList = groceriesList.filter((f) =>
      f.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    displayGroceries();
  });
}
listenForSearchChanges();

function addGrocery(grocery) {
  var groceryList = document.getElementById("grocery-list");
  var template = document.getElementById("card");
  var templateElements = template.content.cloneNode(true);
  templateElements.querySelector(".grocery-name").innerHTML = grocery.name;
  templateElements.querySelector(".grocery-desc").innerHTML =
    grocery.description;
  templateElements.querySelector(".grocery-rate").innerHTML =
    grocery.price + "/" + grocery.unit;
  templateElements.querySelector(".grocery-img").innerHTML =
    "<img src='{}'/>".replace("{}", grocery.image);
  let qtyOptions = "";
  for (let i in grocery.quantityList) {
    qtyOptions += `<option value="${grocery.quantityList[i]}">${grocery.quantityList[i]} /${grocery.unit}</option>`;
  }
  templateElements.querySelector(".qty-dropdown").innerHTML = qtyOptions;
  groceryList.appendChild(templateElements);
}

function displayGroceries() {
  for (let i = 0; i < filteredGroceryList.length; i++) {
    addGrocery(filteredGroceryList[i]);
  }
}

displayGroceries();

const categoriesSection = document.getElementById('categories');
const categoryList = document.getElementById('categoryList');
const specialsSection = document.getElementById('specials');
const specialContent = document.getElementById('specialContent');
const productsSection = document.getElementById('products');
const productList = document.getElementById('productList');
const homeLink = document.getElementById('homeLink');
const catalogLink = document.getElementById('catalogLink');

let categoriesData = {
};

let currentCategory = null;


async function loadCategories() {
    const response = await fetch('a.json');
    const data = await response.json();
    categoriesData = data;

    
    for (const categoryName in categoriesData) {
        const category = categoriesData[categoryName];
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = category.name;
        link.dataset.categoryName = categoryName;
        link.addEventListener('click', loadCategory);
        listItem.appendChild(link);
        categoryList.appendChild(listItem);
    }
}

async function loadCategory(event) {
  if (event && typeof event === 'object') {
    event.preventDefault(); 
  }
  const categoryName = event.target.dataset.categoryName;
  const category = categoriesData[categoryName];
  currentCategory = category;
  productList.innerHTML = '';

  const existingTitle = productsSection.querySelector('h3');
  if (existingTitle) {
    existingTitle.remove();
  }

  const categoryTitle = document.createElement('h3');
  categoryTitle.textContent = category.name;
  productsSection.insertBefore(categoryTitle, productList);

    for (const product of category.wares) {
        const productItem = document.createElement('li');
        productItem.classList.add('product');

        const image = document.createElement('img');
        image.src = product["url"]; 
        image.alt = product.name;
        productItem.appendChild(image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productName = document.createElement('h4');
        productName.textContent = product.name;
        productInfo.appendChild(productName);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description || 'Немає опису'; 
        productInfo.appendChild(productDescription);

        const productPrice = document.createElement('span');
        productPrice.textContent = `${product.price} (валюта)`;
        productInfo.appendChild(productPrice);

        productItem.appendChild(productInfo);
        productList.appendChild(productItem);
    }
}

function loadSpecial() {
    specialContent.innerHTML = '';

    const categoryNames = Object.keys(categoriesData);
    const randomCategoryName = categoryNames[Math.floor(Math.random() * categoryNames.length)];
    const randomCategory = categoriesData[randomCategoryName];

    const specialTitle = document.createElement('h3');
    specialTitle.textContent = 'Спеціальна пропозиція';
    specialsSection.insertBefore(specialTitle, specialContent);

    for (const product of randomCategory.wares) {
        const productItem = document.createElement('li');
        productItem.classList.add('product');

        const image = document.createElement('img');
        image.src = product.url; 
        image.alt = product.name;
        productItem.appendChild(image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productName = document.createElement('h4');
        productName.textContent = product.name;
        productInfo.appendChild(productName);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description || 'Немає опису';
        productInfo.appendChild(productDescription);

        const productPrice = document.createElement('span');
        productPrice.textContent = `${product.price} (валюта)`;
        productInfo.appendChild(productPrice);

        productItem.appendChild(productInfo);
        specialContent.appendChild(productItem);
    }

    categoriesSection.style.display = 'none';
    specialsSection.style.display = 'block';
}



homeLink.addEventListener('click', () => {
  location.reload()
});

catalogLink.addEventListener('click', () => {
    categoriesSection.style.display = 'block';
    specialsSection.style.display = 'none';
});


loadCategories();

specialContent.innerHTML = '';

const specialLink = document.createElement('a');
specialLink.href = '#';
specialLink.textContent = 'Перейти до спеціальних пропозицій';
specialLink.addEventListener('click', loadSpecial);
specialContent.appendChild(specialLink);
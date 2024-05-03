let bagItems;
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemsOnPage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-items-count');
    if (bagItems.length > 0 ){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText = bagItems.length;
    } 
    else{
        bagItemCountElement.style.visibility= 'hidden';
    }
}

function displayItemsOnPage() {
    let itemsContainerElement = document.querySelector(".items-container");
    
    if(!itemsContainerElement){
        return;
    }

    let innerHTML = '';
    items.forEach((item) => {
    innerHTML += `
    <div class="item-container">
        <img class="item-image" src="${item.item_image}" alt="item Image">

        <div class="rating"> ${item.rating.stars} ⭐ | ${item.rating.reviews} </div>
        
        <div class="company-name"><h3>${item.company_name}</h3></div>

        <div class="item-name">${item.item_name}</div>

        <div class="price-container">
            <span class="current_price">₹${item.current_price}</span>
            <span class="original-price">₹${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>

        <button class="but-add-bag" onclick="addToBag(${item.id})" >Add to bag</button>
    </div>`;
  });

  itemsContainerElement.innerHTML = innerHTML;
}


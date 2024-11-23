const totalPriceElem = document.querySelector('.total');
const productCards = document.querySelectorAll('.card-body');


function updateTotalPrice() {
  let total = 0;


  document.querySelectorAll('.list-products > .card-body').forEach(card => {
    const priceElem = card.querySelector('.unit-price');
    const quantityElem = card.querySelector('.quantity');

    if (priceElem && quantityElem) {
      const price = parseFloat(priceElem.textContent.replace(' $', '')) || 0;
      const quantity = parseInt(quantityElem.textContent) || 0;
      total += price * quantity; // Ajoute au total
    }
  });

 
  

 
  totalPriceElem.textContent = total.toFixed(2) + ' $';
}


function increaseQuantity(event) {
  const quantityElem = event.target.parentElement.querySelector('.quantity');
  quantityElem.textContent = parseInt(quantityElem.textContent) + 1;
  updateTotalPrice();
}


function decreaseQuantity(event) {
  const quantityElem = event.target.parentElement.querySelector('.quantity');
  const currentQuantity = parseInt(quantityElem.textContent);
  if (currentQuantity > 0) {
    quantityElem.textContent = currentQuantity - 1;
    updateTotalPrice();
  }
}


function removeProduct(event) {
  const card = event.target.closest('.card-body');
  card.remove();
  updateTotalPrice();
}


function likeProduct(event) {
  const heartIcon = event.target;
  heartIcon.style.color = heartIcon.style.color === 'red' ? 'black' : 'red';
}


productCards.forEach(card => {
  card.querySelector('.fa-plus-circle').addEventListener('click', increaseQuantity);
  card.querySelector('.fa-minus-circle').addEventListener('click', decreaseQuantity);
  card.querySelector('.fa-trash-alt').addEventListener('click', removeProduct);
  card.querySelector('.fa-heart').addEventListener('click', likeProduct);
});


updateTotalPrice();

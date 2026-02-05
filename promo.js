function applyPromoCode() {
  const code = document.getElementById('promoCode').value.trim().toUpperCase();
  const promoMessage = document.getElementById('promo-message');
  const validCode = "03AWC"; // match case
  const discountRate = 0.10;

  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.qty;
  });

  const shipping = 2;
  let total = subtotal + shipping;

  if (code === validCode) {
    const discount = total * discountRate;
    total -= discount;
    promoMessage.style.color = 'green';
    promoMessage.textContent = `Promo applied! You saved $${discount.toFixed(2)}.`;
  } else {
    promoMessage.style.color = 'red';
    promoMessage.textContent = "Invalid promo code.";
    return;
  }

  // Update totals section and payment total
  document.getElementById('totals-section').innerHTML = `
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Shipping: $${shipping.toFixed(2)}</p>
    <strong>Total: $${total.toFixed(2)}</strong>
  `;
  document.getElementById('payment-total').innerText = `Total Amount: $${total.toFixed(2)}`;
}

function applyPromoCode() {
  const code = document.getElementById('promoCode').value.trim().toUpperCase();
  const promoMessage = document.getElementById('promo-message');

  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.qty;
  });

  const shipping = 2;
  let total = subtotal + shipping;

  let discount = 0;

  // Valid promo codes (20% discount)
  if (code === "03AWC" || code === "HORSE03") {
    discount = total * 0.20;
    promoMessage.style.color = 'green';
    promoMessage.textContent = `Promo applied! You saved $${discount.toFixed(2)}.`;
  } else {
    promoMessage.style.color = 'red';
    promoMessage.textContent = "Invalid promo code.";
    return;
  }

  total -= discount;

  // Update totals section and payment total
  document.getElementById('totals-section').innerHTML = `
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Shipping: $${shipping.toFixed(2)}</p>
    <strong>Total: $${total.toFixed(2)}</strong>
  `;
  
  document.getElementById('payment-total').innerText = `Total Amount: $${total.toFixed(2)}`;
}

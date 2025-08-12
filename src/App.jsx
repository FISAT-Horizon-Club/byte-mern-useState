import { useState } from "react";

function App() {
  // Step 1: Create state
  const [cartCount, setCartCount] = useState(0);

  // Step 2: Update state
  function addToCart() {
    setCartCount(cartCount + 1);
  }

  function removeFromCart() {
    setCartCount(cartCount - 1);
  }

  return (
    <div >
      <h2>Cart Items: {cartCount}</h2>  {/* Step 3: Print state */}
      
      {/* Function call to update state*/}
      <button onClick={addToCart}>Add Item</button>
      <button onClick={removeFromCart} disabled={cartCount === 0}>
        Remove Item
      </button>
    </div>
  );
}

export default App;


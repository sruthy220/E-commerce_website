import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ import useNavigate

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // ✅ hook to navigate programmatically

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleBuyAll = () => {
    if (cartItems.length === 0) return;

    // ✅ Instead of buying immediately, navigate to address page
    navigate("/address"); 
  };

  if (cartItems.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "80vh",
          padding: "2rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        <img
          src="https://i.pinimg.com/736x/02/04/1d/02041d99e553a65d6f70c9e73c8a72fe.jpg"
          alt="Empty Cart"
          style={{
            marginTop: "50px",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f9f9f9", marginTop: "30px", minHeight: "80vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Your Cart</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              padding: "10px",
              width: "200px",
              borderRadius: "8px",
              backgroundColor: "white",
              textAlign: "center",
            }}
          >
            <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "6px" }} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button
              style={{
                backgroundColor: "#a56821ff",
                color: "white",
                border: "none",
                padding: "8px 16px",
                cursor: "pointer",
                marginTop: "10px",
                borderRadius: "4px",
              }}
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Buy All Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "6px",
          }}
          onClick={handleBuyAll}
        >
          Buy All
        </button>
      </div>
    </div>
  );
};

export default Cart;

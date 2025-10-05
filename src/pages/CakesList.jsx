import React, { useEffect, useState } from "react";
import { getCakes } from "../api/cakesApi";
import Footer from "../components/Footer";

const CakesList = () => {
  const [cakes, setCakes] = useState([]);
  const [selectedCake, setSelectedCake] = useState(null); // for popup

  useEffect(() => {
    const fetchCakes = async () => {
      const data = await getCakes();
      setCakes(data);
    };
    fetchCakes();
  }, []);

  const handleAddToCart = (cake) => {
    // Get current cart from localStorage or create empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add selected cake
    cart.push(cake);

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // alert(`${cake.name} added to cart!`);
  };

  return (
    <>
      <div>
        <div
          className="text-center my-4"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "36px",
            marginTop: "90px",
          }}
        >
          <h1>Our Cakes</h1>
        </div>

        <div style={{ display: "flex", gap: "36px", flexWrap: "wrap", justifyContent: "center" }}>
          {cakes.map((cake) => (
            <div
              key={cake.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "200px",
                cursor: "pointer",
              }}
              onClick={() => setSelectedCake(cake)}
            >
              <img src={cake.image} alt={cake.name} style={{ width: "100%", borderRadius: "6px" }} />
              <h3>{cake.name}</h3>
              <p>${cake.price}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "7vh",
                }}
              >
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "2px solid white",
                    padding: "10px 20px",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedCake && (
          <div
            style={{
              position: "fixed",
              top: 30,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCake(null)}
          >
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                maxWidth: "600px",
                width: "90%",
                textAlign: "center",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCake(null)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                X
              </button>

              <img
                src={selectedCake.image}
                alt={selectedCake.name}
                style={{ width: "50%", borderRadius: "8px", marginBottom: "20px" }}
              />
              <h2>{selectedCake.name}</h2>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>${selectedCake.price}</p>
              <p>
                A delicious {selectedCake.name} made with the finest ingredients,
                perfect for any celebration!
              </p>

              {/* Add to Cart Button */}
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "2px solid white",
                  padding: "10px 20px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
                onClick={() => handleAddToCart(selectedCake)}
              >
                Add to Cart
              </button>

              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "2px solid white",
                  padding: "10px 20px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CakesList;

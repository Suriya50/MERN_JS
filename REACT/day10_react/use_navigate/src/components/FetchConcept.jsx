import { useEffect, useState } from "react";

const FetchConcept = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=4");
      const data = await res.json();
      setProducts(data.products);
    };
    fetchData();
  }, []);

  // Add to cart
  const addToCart = (item) => {
    const updated = [...cart, item];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Remove from cart
  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <>
      {/* 🔥 INTERNAL CSS (HTML STYLE) */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f4f4f4;
        }

        .header {
          background: #111;
          color: white;
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cart-icon {
          cursor: pointer;
          position: relative;
        }

        .badge {
          position: absolute;
          top: -8px;
          right: -12px;
          background: red;
          color: white;
          border-radius: 50%;
          padding: 3px 7px;
          font-size: 12px;
        }

        .container {
          display: flex;
          gap: 25px;
          justify-content: center;
          padding: 30px;
          flex-wrap: wrap;
        }

        .card {
          width: 240px;
          background: white;
          border-radius: 12px;
          padding: 15px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
        }

        .card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 10px;
        }

        .price {
          font-weight: bold;
          color: green;
        }

        .btn {
          width: 100%;
          margin-top: 10px;
          padding: 8px;
          background: #2196f3;
          border: none;
          color: white;
          border-radius: 6px;
          cursor: pointer;
        }

        /* CART PANEL */
        .cart-panel {
          position: fixed;
          right: 0;
          top: 0;
          width: 320px;
          height: 100%;
          background: white;
          box-shadow: -4px 0 10px rgba(0,0,0,0.2);
          padding: 15px;
          overflow-y: auto;
        }

        .cart-item {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }

        .cart-item img {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: 6px;
        }

        .remove-btn {
          background: red;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 5px;
        }

        .close-btn {
          background: black;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          float: right;
        }
      `}</style>

      {/* 🔹 HEADER */}
      <div className="header">
        <h2>My Store</h2>

        <div className="cart-icon" onClick={() => setShowCart(true)}>
          🛒 Cart
          <span className="badge">{cart.length}</span>
        </div>
      </div>

      {/* 🔹 PRODUCTS */}
      <div className="container">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} />
            <h4>{item.title}</h4>
            <p className="price">₹ {item.price}</p>
            <button className="btn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 CART PANEL */}
      {showCart && (
        <div className="cart-panel">
          <button className="close-btn" onClick={() => setShowCart(false)}>
            X
          </button>

          <h3>My Cart</h3>

          {cart.length === 0 && <p>No items in cart</p>}

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.thumbnail} />
              <div>
                <p>{item.title}</p>
                <p className="price">₹ {item.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FetchConcept;

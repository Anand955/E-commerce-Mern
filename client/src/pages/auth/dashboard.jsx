import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Stylish Sneakers",
    price: "$79",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Cool Jacket",
    price: "$120",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "$199",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: "$99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: "$59",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Backpack",
    price: "$89",
    image: "https://via.placeholder.com/150",
  },
];

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [likes, setLikes] = useState(0);
  const maxLikesWithoutLogin = 3;

  const handleLike = () => {
    if (!isLoggedIn && likes >= maxLikesWithoutLogin) {
      alert("Please log in to like more products!");
      return;
    }
    setLikes(likes + 1);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>E-Commerce Dashboard</h1>
        <button
          style={styles.loginBtn}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </header>

      <div style={styles.message}>
        {!isLoggedIn && (
          <p>
            You can like up to {maxLikesWithoutLogin} products.{" "}
            <strong>Please login to like more and see exclusive deals!</strong>
          </p>
        )}
        {isLoggedIn && <p>Welcome back! Enjoy unlimited likes and deals.</p>}
      </div>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button style={styles.likeBtn} onClick={handleLike}>
              Like
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
    maxWidth: "1600px",
    margin: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  loginBtn: {
    padding: "10px 20px",
    backgroundColor: "#0077ff",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  message: {
    backgroundColor: "#f8f8f8",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "25px",
    fontSize: "16px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  likeBtn: {
    padding: "8px 15px",
    backgroundColor: "#ff4081",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

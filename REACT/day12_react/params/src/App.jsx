import { useEffect, useState } from "react";

const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
  //   const datas = async () => {
  //     const takedatas = await fetch("https://dummyjson.com/products?limit=4");
  //     const showdatas = await takedatas.json();
  //     setProducts(showdatas.products);
  //   };

  //   datas();
  // }, []);

  fetch("https://dummyjson.com/products?limit=4")
  .then((res) => res.json())
  .then((data) => {
    setProducts(data.products);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

    
 
    
  })

  return(
    <>
      <h2>Product Items</h2>

      <div style={{backgroundColor:"black",color:"white",display:"flex",justifyContent:"space-between"}}>
        {products.map((items) => (
          <div key={items.id}>
            <img src={items.thumbnail} alt={items.title} width="150" />
            <h2>Title: {items.title}</h2>
            <h2>Category: {items.category}</h2>
            <h3>Price: ₹{items.price}</h3>

            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;

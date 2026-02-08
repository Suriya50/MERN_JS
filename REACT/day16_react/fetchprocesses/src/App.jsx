import { useEffect, useState } from "react";

const App = () => {
  const [product, setProduct] = useState([]);
  const [inputs, setInputs] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const takedata = await fetch("https://dummyjson.com/products?limit=15");
      const showdata = await takedata.json();
      setProduct(showdata.products);

      // Extract unique categories
      const uniqueCategories = [
        ...new Set(showdata.products.map((p) => p.category)),
      ];
      setCategories(uniqueCategories);
    };
    fetchdata();
  }, []);

  const handlechange = (e) => {
    const datas = e.target.value;
    setInputs(datas);
  };

  const searchinputs = product.filter(
    (selects) =>
      selects.title.toLowerCase().includes(inputs.toLowerCase()) &&
      (selectedCategory === "" || selects.category === selectedCategory)
  );

  return (
    <>
      {/* Search Input */}
      <div className="bg-black text-white p-5 text-center">
        <input
          className="bg-white text-black px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-pink-500"
          type="text"
          placeholder="Search the product"
          value={inputs}
          onChange={handlechange}
        />
      </div>

      {/* Category Dropdown */}
      <div className="bg-green-500 text-white p-4 text-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="bg-blue-500 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {searchinputs.map((e) => (
          <div
            className="bg-orange-500 text-black p-4 rounded-lg shadow-lg flex flex-col items-center"
            key={e.id}
          >
            <img
              src={e.thumbnail}
              alt={e.title}
              className="w-48 h-48 object-cover rounded-md mb-3"
            />
            <h4 className="font-bold mb-1">Title: {e.title}</h4>
            <h4 className="mb-1">Category: {e.category}</h4>
            <h4 className="mb-3">Price: ${e.price}</h4>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;

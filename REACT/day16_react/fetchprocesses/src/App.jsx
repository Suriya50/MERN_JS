import { useEffect, useState } from "react";

const App = () => {
  const [dats, SetDatas] = useState([]);
const [search,setSearch]=useState("")
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const takedats = await fetch(
          "https://dummyjson.com/products?limit=12"
        );
        const showdats = await takedats.json();
        SetDatas(showdats.products);
      } catch (error) {
        console.log("something error");
      }
    };
    fetchdata();
  }, []);


const searchiterms=(e)=>{


const searchvalue=e.target.value

setSearch(searchvalue)

}

  const flierdata = dats.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
<>
<div>


<input type="text" placeholder="Search the product" onChange={searchiterms} value={search} />
 


</div>


    <div className="min-h-screen bg-green-500 p-6">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flierdata.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition"
          >
            <img
              src={e.thumbnail}
              alt={e.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />

            <h2 className="text-lg font-semibold mb-1">
              {e.title}
            </h2>

            <p className="text-green-600 font-bold text-xl">
              ₹ {e.price}
            </p>

            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default App;

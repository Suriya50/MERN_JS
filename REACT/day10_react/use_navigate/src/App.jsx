import UsersContext from "./context/UsersContext";
import Userdetail from "./components/Userdetail";
import FetchConcept from "./components/FetchConcept";

const App = () => {
  const list = [{id:1,name:"surya",city:"chennai",role:"developer"}]

  return (
    // <UsersContext.Provider value={list}>
    //   <Userdetail />
    // </UsersContext.Provider>


<FetchConcept/>
  );
};

export default App;

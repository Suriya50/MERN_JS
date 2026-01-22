
import Button from "./Components/Button";
import withAlert from "./hoc/withalert";

const Parasakthi = withAlert(Button);

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      
      <h1 className="bg-red-500 text-white text-2xl font-bold px-6 py-2 rounded">
        Task 7
      </h1>

      <Parasakthi master="Leo" />
      <Parasakthi master="Vikram" />
      <Parasakthi master="Master" />
      
    </div>
  );
};

export default App;

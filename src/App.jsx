import { useState, createContext } from "react";
import A from "./components/A";
import CountButton from "./components/CountButton";

export const AppContext = createContext({
  count: 0,
  setCountHandler: () => {},
});

function App() {
  const [count, setCount] = useState(0);
  const setCountHandler = (preValue) => setCount(preValue + 1);

  return (
    <AppContext.Provider
      value={{ count: count, setCountHandler: setCountHandler }}
    >
      <div className="min-h-screen flex flex-col justify-center items-center">
        <A />
        <CountButton />
      </div>
    </AppContext.Provider>
  );
}

export default App;

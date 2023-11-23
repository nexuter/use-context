import { useContext } from "react";
import { AppContext } from "../App";

function D() {
  const { count } = useContext(AppContext);

  return (
    <div className="w-24 h-24 bg-purple-100 flex justify-end items-end">
      {count}
    </div>
  );
}

export default D;

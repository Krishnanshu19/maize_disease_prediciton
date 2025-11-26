import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HeaderFile() {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(1);

  return (
    <div className="sticky top-0 w-full flex flex-row justify-between items-center px-12 min-h-[10vh] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-md">
      {/* Logo */}
      <div>
        <h1 className="sm:text-2xl text-lg font-bold text-white">🌽 FarmDoctor</h1>
      </div>

      <div className="flex flex-row justify-between sm:gap-12">
        <div
          className={`cursor-pointer rounded-lg py-1 px-3 transition ${
            isSelected === 1
              ? "bg-black-400 text-black"
              : "text-white hover:bg-black-300 hover:text-white"
          }`}
          onClick={() => {
            navigate("/");
            setIsSelected(1);
          }}
        >
          <p className="text-xl">Home</p>
        </div>

        <div
          className={`cursor-pointer rounded-lg py-1 px-3 transition ${
            isSelected === 2
              ? "bg-black text-white"
              : "text-white hover:bg-yellow-300 hover:text-black"
          }`}
          onClick={() => {
            navigate("/predict");
            setIsSelected(2);
          }}
        >
          <p className="text-xl">Predict</p>
        </div>

        <div
          className={`cursor-pointer rounded-lg py-1 px-3 transition ${
            isSelected === 3
              ? "bg-yellow text-black"
              : "text-white hover:bg-yellow-300 hover:text-black"
          }`}
          onClick={() => {
            navigate("/about");
            setIsSelected(3);
          }}
        >
          <p className="text-xl">About Us</p>
        </div>
      </div>
    </div>
  );
}
export default HeaderFile;
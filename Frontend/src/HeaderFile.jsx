import { useNavigate } from "react-router-dom"
import { useState } from "react";
function Header() {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(1);  
  return (
    <div className="sticky top-0 w-full  flex flex-row justify-between items-center px-12 min-h-[10vh] bg-white">
      <div>
        {/* img icon */}
        <h1 className="sm:text-2xl text-lg">MaizeGuard</h1>
      </div>
      <div className="flex flex-row justify-between sm:gap-12 ">
        <div className={`cursor-pointer rounded-lg py-1 px-2 ${isSelected === 1 ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}`} onClick={() => {navigate("/"); setIsSelected(1);}} >
          <p className="text-xl">Home</p>
        </div>
        <div className={`cursor-pointer rounded-lg py-1 px-2 ${isSelected === 2 ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}`} onClick={() => {navigate("/predict"); setIsSelected(2)}}  >
          <p className="text-xl"> Predict</p>
        </div>
        <div className={`cursor-pointer rounded-lg py-1 px-2 ${isSelected === 3 ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}`} onClick={() => {navigate("/predict"); setIsSelected(3)}} >
          <p className="text-xl">About Us</p>
        </div>
      </div>
    </div>
  )
}

export default Header
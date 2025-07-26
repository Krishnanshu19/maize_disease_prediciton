import {CloudUpload,NotebookPen,BotMessageSquare} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center sm:px-20   bg">
      <div className="flex  flex-col w-full pt-12 p-4 rounded-2xl justify-center items-center gap-12 bg-slate-100 shadow-2xl">
        <h1 className="text-5xl md:w-[90vh] w-[70vh]">Diagnose Maize Disease with AI</h1>
        <p className="text-lg opacity-70 max-w-[80vh] text-center">Detect diseases in maize plants using advanced
           artificial Intelligence such as Convolution Neural Network</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => navigate("/predict")}
          >
          Get Started
        </button>
      </div>
      <div className="flex flex-col items-center gap-6 mt-12 bg-slate-100 p-4 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="text-lg max-w-[90%] text-left">Our web app leverages AI technology to identify diseases in maize leaf images,
          providing farmers with quick and accurate diagnosis.Improves crop health and increase yield with out easy-to-use tool. </p>
      </div>
      <div className="flex flex-col items-center w-full gap-6 mt-12 bg-slate-100 p-4 rounded-2xl shadow-2xl mb-12">
        <h1 className="text-4xl font-bold">Features</h1>
        <div className="sm:flex sm:flex-row grid grid-cols-2 justify-evenly w-full p-4">
            <div className="flex flex-col h-60 w-[30vh] rounded-lg shadow-lg border-[2px] border-blue-500 shadow-black/50 p-2 items-center">
              <CloudUpload  className='text-blue-500 size-20'/>
              <h2 className='text-xl'>Upload and Predict</h2>
              <p>Easily upload maize leaf images and let our AI model analyze the for disease detection</p>
            </div>
            <div className="flex flex-col h-60 w-[30vh] rounded-lg shadow-lg border-[2px] border-blue-500 shadow-black/50 p-2 items-center">
              <NotebookPen  className='text-blue-500 size-20'/>
              <h2 className='text-xl'>Upload and Predict</h2>
              <p>Easily upload maize leaf images and let our AI model analyze the for disease detection</p>
            </div>
            <div className="flex flex-col h-60 w-[30vh] rounded-lg shadow-lg border-[2px] border-blue-500 shadow-black/50 p-2 items-center">
              <BotMessageSquare   className='text-blue-500 size-20'/>
              <h2 className='text-xl'>Upload and Predict</h2>
              <p>Easily upload maize leaf images and let our AI model analyze the for disease detection</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
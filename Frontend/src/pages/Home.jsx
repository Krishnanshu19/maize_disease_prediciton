import { CloudUpload, NotebookPen, BotMessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex flex-col items-center sm:px-20 bg-gradient-to-r from-green-200 via-yellow-100 to-green-200 min-h-screen">
      
      {/* Hero Section */}
      <motion.div
        className="flex flex-col w-full pt-12 p-6 rounded-3xl justify-center items-center gap-8 bg-gradient-to-br from-yellow-100 to-green-100 shadow-2xl"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-5xl font-extrabold text-green-700 drop-shadow-md md:w-[90vh] w-[70vh] text-center">
          Diagnose Plant Diseases with AI
        </h1>
        <p className="text-lg opacity-80 max-w-[80vh] text-center text-green-800">
          Detect diseases in plants using advanced Artificial Intelligence such as Convolutional Neural Networks.
        </p>
        <motion.button
          className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition duration-300"
          onClick={() => navigate("/predict")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          🌱 Get Started
        </motion.button>
      </motion.div>

      {/* About Section */}
      <motion.div
        className="flex flex-col items-center gap-6 mt-12 bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-3xl shadow-2xl"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-green-700">About</h1>
        <p className="text-lg max-w-[90%] text-left text-green-900">
          Our web app leverages AI technology to identify diseases in leaf images,
          providing farmers with quick and accurate diagnosis. Improve crop health and
          increase yield with our easy-to-use tool.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="flex flex-col items-center w-full gap-6 mt-12 bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-3xl shadow-2xl mb-12"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-green-700">Features</h1>
        <div className="sm:flex sm:flex-row grid grid-cols-1 md:grid-cols-3 gap-6 justify-evenly w-full p-4">
          
          {/* Card 1 */}
          <motion.div
            className="flex flex-col h-64 w-[30vh] rounded-2xl shadow-lg border-2 border-green-400 p-4 items-center bg-white hover:scale-105 hover:shadow-2xl transition"
            variants={fadeUp}
          >
            <CloudUpload className="text-green-500 size-20 mb-4" />
            <h2 className="text-xl font-semibold text-green-700">Upload and Predict</h2>
            <p className="text-center text-green-900">
              Easily upload leaf images and let our AI model analyze them for disease detection.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="flex flex-col h-64 w-[30vh] rounded-2xl shadow-lg border-2 border-yellow-400 p-4 items-center bg-white hover:scale-105 hover:shadow-2xl transition"
            variants={fadeUp}
          >
            <NotebookPen className="text-yellow-500 size-20 mb-4" />
            <h2 className="text-xl font-semibold text-yellow-700">AI Insights</h2>
            <p className="text-center text-yellow-900">
              Get detailed insights and recommendations to help farmers make informed decisions.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="flex flex-col
            h-64 w-[30vh] rounded-2xl shadow-lg border-2 border-blue-400 p-4 items-center bg-white hover:scale-105 hover:shadow-2xl transition"
            variants={fadeUp}
          >
            <BotMessageSquare className="text-blue-500 size-20 mb-4" />
            <h2 className="text-xl font-semibold text-blue-700">Chat Support</h2>
            <p className="text-center text-blue-900">
              Interact with our smart assistant for help and guidance on crop care and management.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
import React, { useState } from "react";
import axios from "axios";
import {
  Camera,
  Upload as UploadIcon,
  NotebookPen,
  Lightbulb,
  BotMessageSquare,
  CloudDownload,
} from "lucide-react";
import { motion } from "framer-motion";

function Predict() {
  const steps = [
    { id: 1, title: "Capture Image", description: "Upload a clear photo of  leaf (avoid blurry or dark images).", icon: <Camera className="text-green-600 w-8 h-8" /> },
    { id: 2, title: "Upload the Image(s)", description: "Use the image uploader to submit  leaf photos.", icon: <UploadIcon className="text-yellow-600 w-8 h-8" /> },
    { id: 3, title: "View Prediction", description: "See the predicted disease and its confidence score.", icon: <NotebookPen className="text-blue-600 w-8 h-8" /> },
    { id: 4, title: "Get Suggestions", description: "Receive recommended remedies and treatment options.", icon: <Lightbulb className="text-orange-500 w-8 h-8" /> },
    { id: 5, title: "Need Help?", description: "Use the chatbot in the corner for any questions.", icon: <BotMessageSquare className="text-purple-600 w-8 h-8" /> },
  ];

  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      setFiles((prev) => [...prev, ...selectedFiles]);
      setPreviews((prev) => [
        ...prev,
        ...selectedFiles.map((f) => URL.createObjectURL(f)),
      ]);
      setResults([]);
      setError(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length > 0) {
      setFiles((prev) => [...prev, ...droppedFiles]);
      setPreviews((prev) => [
        ...prev,
        ...droppedFiles.map((f) => URL.createObjectURL(f)),
      ]);
      setResults([]);
      setError(null);
    }
  };

  const handleRemoveImage = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
    setResults([]);
  };

  const handlePredict = async () => {
    if (files.length === 0) return;
    setLoading(true);
    setError(null);

    try {
      const allResults = [];
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append("image", files[i]);

        const { data } = await axios.post("http://localhost:5000/predict", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        allResults.push({
          disease: data.prediction,
          confidence: data.confidence,
          solutions: data.solutions.solutions,
          severity: data.solutions.severity_levels,
        });
      }
      setResults(allResults);
    } catch (err) {
      console.error(err);
      setError("Failed to get prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="flex flex-col items-center gap-12 w-full px-4 py-12 bg-gradient-to-r from-green-100 via-yellow-50 to-green-100 min-h-screen">
      
      {/* Steps Guide */}
      <motion.div
        className="flex flex-col items-center gap-8 w-full"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="text-5xl font-extrabold text-center text-green-700 drop-shadow-md">
          🌽  Disease Diagnosis
        </h1>
        <p className="text-lg opacity-80 text-center text-green-900 max-w-2xl">
          Follow the steps below to upload images and get instant disease predictions with remedies.
        </p>
        <div className="flex flex-col gap-6 max-w-3xl mx-auto mt-6 px-6 py-6 border-2 shadow-xl bg-white rounded-2xl">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              className="flex items-start gap-4"
              custom={i}
              variants={fadeUp}
            >
              <div className="flex flex-col items-center w-16">
                <p className="text-sm font-semibold text-gray-600">STEP {step.id}</p>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-200 to-yellow-200 shadow">
                  {step.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-700">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Upload & Preview */}
      <motion.div
        className="p-6 max-w-3xl w-full mx-auto bg-white rounded-2xl shadow-xl"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-green-700">Upload Your Leaf(s)</h2>

        <motion.div
          className="border-2 border-dashed border-green-400 p-8 rounded-lg text-center mb-4 cursor-pointer bg-gradient-to-br from-green-50 to-yellow-50 hover:scale-105 transition"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById("file-input").click()}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-green-700 flex flex-col items-center gap-2">
            <CloudDownload className="w-10 h-10" />
            <span>Drag & drop  leaf images here or click to browse</span>
          </div>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />
        </motion.div>

        {/* Preview Multiple Images */}
        {previews.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {previews.map((preview, index) => (
              <div key={index} className="relative w-40 h-40">
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 text-xs rounded"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Predict Button */}
        {previews.length > 0 && (
          <motion.button
            onClick={handlePredict}
            disabled={loading}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition disabled:opacity-50 block mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "🔄 Predicting..." : "🚀 Predict"}
          </motion.button>
        )}

        {/* Error */}
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        {/* Results for Each Image */}
        {results.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((result, idx) => (
              <motion.div
                key={idx}
                className="p-4 border rounded-2xl bg-gradient-to-br from-green-50 to-yellow-50 shadow-md"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <div className="mb-2 text-lg font-bold text-green-700">
                  🌱 Prediction {idx + 1}: <span className="text-black">{result.disease}</span>
                </div>
                <div className="mb-2 text-green-700 font-semibold">
                  🎯 Confidence: <span className="text-black">{(result.confidence * 100).toFixed(2)}%</span>
                </div>
                <div>
                  <strong className="text-green-700">💡 Remedies:</strong>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    {result.solutions.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Predict;

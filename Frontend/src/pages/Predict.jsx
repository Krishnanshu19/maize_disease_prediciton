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

function Predict() {
  const steps = [
    { id: 1, title: "Capture Image", description: "Upload a clear photo of maize leaf (avoid blurry or dark images).", icon: <Camera className="text-blue-500 w-8 h-8" /> },
    { id: 2, title: "Upload the Image", description: "Use the image uploader to submit the maize leaf photo.", icon: <UploadIcon className="text-blue-500 w-8 h-8" /> },
    { id: 3, title: "View Prediction", description: "See the predicted disease and its confidence score.", icon: <NotebookPen className="text-blue-500 w-8 h-8" /> },
    { id: 4, title: "Get Suggestions", description: "Receive recommended remedies and treatment options.", icon: <Lightbulb className="text-blue-500 w-8 h-8" /> },
    { id: 5, title: "Need Help?", description: "Use the chatbot in the corner for any questions.", icon: <BotMessageSquare className="text-blue-500 w-8 h-8" /> },
  ];

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileSelect = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setResult(null);
      setError(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (dropped) {
      setFile(dropped);
      setPreview(URL.createObjectURL(dropped));
      setResult(null);
      setError(null);
    }
  };

  const handlePredict = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const { data } = await axios.post("http://localhost:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult({
        disease:    data.prediction,
        confidence: data.confidence,
        solutions:  data.solutions.solutions,     
        severity:   data.solutions.severity_levels, 
      });
    } catch (err) {
      console.error(err);
      setError("Failed to get prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-12 w-full px-4 py-8">
      {/* Steps Guide */}
      <div className="flex flex-col items-center gap-8 w-full">
        <h1 className="text-5xl font-bold text-center">
          Get Started with Maize Disease Diagnosis
        </h1>
        <p className="text-lg opacity-75 text-center">
          Follow the steps below to upload an image and get instant disease prediction and remedies
        </p>
        <div className="flex flex-col gap-6 max-w-3xl mx-auto mt-6 px-6 py-4 border-2 shadow-xl bg-slate-100 rounded-2xl">
          {steps.map((step) => (
            <div key={step.id} className="flex items-start gap-4">
              <div className="flex flex-col items-center w-12">
                <p className="text-sm font-semibold text-gray-600">STEP {step.id}</p>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                  {step.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload & Preview */}
      <div className="p-6 max-w-3xl w-full mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">🌽 Maize Disease Prediction</h2>
        {!file && <div
          className="border-2 border-dashed border-gray-400 p-6 rounded-lg text-center mb-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById("file-input").click()}
        >
          <div className="text-gray-600 flex flex-col items-center gap-2">
            <CloudDownload className="w-8 h-8 text-gray-600" />
            <span>Drag & drop a maize leaf image here or click to browse</span>
          </div>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>}
        {preview && (
          <img src={preview} alt="Preview" className="mt-4 max-h-60 mx-auto rounded-2xl" />
        )}

        <button
          onClick={handlePredict}
          disabled={!file || loading}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Predicting..." : "Predict"}
        </button>

        {/* Result Display */}
        {error && <p className="text-red-600 mt-4">{error}</p>}
        {result && (
          <div className="mt-6 p-4 border rounded bg-white shadow">
            <div className="mb-2">
              <strong>Prediction:</strong> {result.disease}
            </div>
            <div className="mb-2">
              <strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%
            </div>
            <div>
              <strong>Suggested Remedies:</strong>
              <ul className="list-disc list-inside mt-2">
                {result.solutions.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Predict;

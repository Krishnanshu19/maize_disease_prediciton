import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [solutions, setSolutions] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);
    setLoading(true);

    try {
      const response = await axios.post("/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { prediction, confidence, solutions } = response.data;
      setPrediction(prediction);
      setConfidence(confidence);
      setSolutions(solutions);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFeedbackSubmit = async () => {
    if (!feedback) return;

    const feedbackData = {
      predicted_class: prediction,
      feedback: feedback,
      image_url: imagePreview,
    };

    try {
      await axios.post("/feedback", feedbackData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Feedback submitted successfully!");
      setFeedback("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div>
      <h1>Maize Disease Prediction</h1>

      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: "200px", margin: "10px 0" }} />}

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Predicting...' : 'Submit Image for Prediction'}
      </button>

      {prediction && (
        <div>
          <h2>Prediction: {prediction}</h2>
          <p>Confidence: {(confidence * 100).toFixed(2)}%</p>
          <h3>Solution:</h3>
          <ul>
            {solutions.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </div>
      )}

      {prediction && (
        <div>
          <h3>Feedback</h3>
          <textarea
            placeholder="Provide your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            style={{ width: "100%" }}
          />
          <button onClick={handleFeedbackSubmit} disabled={!feedback}>
            Submit Feedback
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;

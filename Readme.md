# 🌽 Maize Disease Predictor

A web-based application that predicts diseases in maize (corn) plants from leaf images using a deep learning model. It also provides treatment suggestions and an interactive chatbot for farmer-friendly assistance.

---

## 🚀 What This Project Does

This application allows users (such as farmers or agricultural workers) to:

- Upload an image of a maize leaf
- Get an instant disease prediction (Blight, Common Rust, Gray Leaf Spot, or Healthy)
- View recommended treatments based on prediction
- Chat with an AI-powered assistant for disease-related queries

---

## 🛠️ How It's Built

### 🧠 Machine Learning

- **Model:** A Convolutional Neural Network (CNN) trained using **MobileNetV2** architecture.
- **Frameworks:** TensorFlow, Keras
- **Input:** Preprocessed maize leaf images
- **Output:** One of the following disease classes:
  - Blight
  - Common Rust
  - Gray Leaf Spot
  - Healthy
- **Model files:**
  - `best_model.h5`: Trained model
  - `data.pkl`: Preprocessed and augmented image dataset (used during training)

### 🖥️ Backend (Flask)

- `app.py`: RESTful Flask server
  - `/predict`: Accepts image and returns disease prediction
  - `/feedback`: Accepts user feedback on predictions
  - `/chatbot`: Handles user questions with Google Gemini AI integration

### 🌐 Frontend (React)

- Located in `src/`:
  - `App.js`: Main React component
  - `ImageUpload.js`: Image input and preview
  - `Chatbot.js`: Embedded chatbot UI
  - `App.css`, `index.css`: Styling
- Built using standard React components and hooks (no frameworks)

---

## 📁 Folder Structure
```
maize-disease-predictor/
│
├── app.py                        # Flask backend (API server)
├── best_model.h5                 # Trained MobileNetV2 model
├── data.pkl                      # Preprocessed dataset (pickle)
├── model.ipynb                   # Jupyter Notebook for training and evaluation
├── requirements.txt              # Python dependencies for backend
├── solutions.json                # JSON file with disease-wise solutions
├── training_log.csv              # Training logs (accuracy/loss over epochs)
├── .gitignore                    # Git ignore file
├── README.md                     # Project documentation
│
└── maize-disease-prediction/     # React frontend project folder
    ├── node_modules/             # Node.js dependencies
    ├── public/                   # Static files (index.html, favicon, etc.)
    ├── src/                      # React app source code
    │   ├── App.js
    │   ├── App.css
    │   ├── App.test.js
    │   ├── Chatbot.js
    │   ├── ImageUpload.js
    │   ├── index.js
    │   ├── index.css
    │   ├── logo.svg
    │   ├── reportWebVitals.js
    │   └── setupTests.js
    ├── package.json              # React project config & dependencies
    └── package-lock.json         # Lockfile for npm
```
---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
# 1.git clone 
https://github.com/yourusername/maize-disease-predictor.git
cd maize-disease-predictor

#2. Create Virtual Environment & Install Dependencies
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# 3. Download the notebook in venv
.\venv\Scripts\activate
pip install ipykernel
python -m ipykernel install --user --name=venv --display-name "Python (venv)"

# 4. create and train the model
run model.ipynb

# 5. Start Flask Backend
python app.py

# 6. Run React Frontend
cd maize-disease-predictor
npm install
npm start
```

# 📌 Tech Stack

- Layer	Tech
- Frontend	React, HTML, CSS
- Backend	Flask, Python
- AI Model	TensorFlow/Keras (MobileNetV2)
- Libraries	OpenCV, NumPy, Pandas, Pillow
- Chatbot	Google Generative AI (Gemini)

🧪 Sample Prediction Output
```json
{
  "class": "Blight",
  "confidence": 0.97,
  "solutions": [
    "Apply fungicide and remove infected leaves.",
    "Ensure proper spacing for airflow.",
    "Consider crop rotation."
  ]
}
```

# 🤖 Chatbot Features
Ask disease-related questions (e.g., “How to prevent gray leaf spot?”)

Get intelligent suggestions powered by Gemini AI

Accessible from the React frontend

✍️ Author
Developed by Krishnanshu Agrawal

📜 License
This project is licensed under the MIT License.


---

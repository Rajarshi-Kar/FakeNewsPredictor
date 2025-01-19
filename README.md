Fake News Detection Project

This project is a machine learning-based web application that detects fake news from real news articles. The application leverages Natural Language Processing (NLP) techniques to classify news articles as "Fake" or "Real." It uses a pre-trained model for prediction and a simple React frontend for user interaction.

Table of Contents
1. Project Overview
2. Technologies Used
3. Backend Implementation
4. Frontend Implementation
5. How to Set Up the Project Locally
6. File Structure
7. Contributing
8. License

Project Overview

The Fake News Detection Project uses machine learning to determine whether a news article is real or fake. The model is trained using a dataset containing news articles, including their title, content, and a label indicating whether the news is real (0) or fake (1). The model employs TF-IDF (Term Frequency-Inverse Document Frequency) to convert text into numerical format and a machine learning classifier (e.g., Logistic Regression) to classify the news.

Key Features:
- Machine Learning Model: The model is trained to predict whether the news article is fake or real.
- User Interface: The frontend is built using React, where users can input news article titles and content to check if it's real or fake.
- Backend: The backend is implemented with Flask, which loads the machine learning model and vectorizer for processing and prediction.
- Prediction Feedback: The frontend displays real-time predictions based on user inputs.

Technologies Used

Backend
- Flask: A lightweight Python web framework used to build the API for serving predictions.
- Scikit-learn: A Python library for machine learning, used for training the model and making predictions.
- joblib: For saving and loading the trained machine learning model and vectorizer.
- Pandas: Used to handle the dataset and data preprocessing.

Frontend
- React: A JavaScript library for building user interfaces, used to create a dynamic and responsive frontend.
- Axios: For making HTTP requests from the React frontend to the Flask backend to get predictions.
- HTML/CSS: For basic structuring and styling of the frontend.

Additional Tools
- TfidfVectorizer: A tool from scikit-learn for converting text data into numerical data by measuring word importance.

Backend Implementation

The backend is responsible for the machine learning model, prediction logic, and serving the predictions to the frontend. The core components are:

1. Model Training: The model is trained using a labeled dataset of news articles. After training, the model is serialized and saved using joblib. This saved model is then loaded in the backend for making predictions.

2. Prediction API: Flask serves as the backend, where it accepts POST requests with news article content and returns a prediction (fake or real). It uses the TfidfVectorizer to convert the input content into the same numerical format as used during training, then applies the model to predict the label.

API Endpoint:
- POST /predict: Accepts news article content and returns a prediction (real or fake).

Example:
```python
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    news_content = data['content']
    # Convert text to numerical features
    X_new = vectorizer.transform([news_content])
    # Get the prediction from the model
    prediction = model.predict(X_new)
    return jsonify({'prediction': prediction[0]})

import React, { useState } from 'react';
import { predictNews } from '../utils/newsPredictor';
import PredictionResult, { PredictionResult as PredictionResultType } from './PredictionResult';
import './NewsPredictorForm.css';

const NewsPredictorForm: React.FC = () => {
  const [newsContent, setNewsContent] = useState('');
  const [prediction, setPrediction] = useState<PredictionResultType | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = predictNews(newsContent);
    setPrediction(result);
  };

  return (
    <div className="news-predictor-form">
      <form onSubmit={handleSubmit}>
        <textarea
          value={newsContent}
          onChange={(e) => setNewsContent(e.target.value)}
          placeholder="Paste or type your news article here..."
          required
        />
        <button type="submit">Predict Credibility</button>
      </form>
      {prediction && <PredictionResult result={prediction} />}
    </div>
  );
};

export default NewsPredictorForm;


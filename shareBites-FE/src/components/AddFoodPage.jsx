import { useState } from 'react';
import axios from 'axios';

function AddFoodPage({ navigate }) {
  const [food, setFood] = useState({ title: '', description: '', location: '', price: '' });
  const [imageBase64, setImageBase64] = useState('');
  const [preview, setPreview] = useState('');

  const handleChange = (e) => setFood({ ...food, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!food.title || !food.location) {
      alert('Please fill in at least the Food Name and Location.');
      return;
    }
    axios.post('https://sharebites.onrender.com/api/food', { ...food, image: imageBase64 })
      .then(() => navigate('home'));
  };

  return (
    <div className="page-wrap">
      <h2 className="page-heading">Share <em>Food</em></h2>
      <p className="page-sub">
        Fill in the details below and your listing will be visible to your community instantly.
      </p>

      <div className="form-card">
        <div className="form-grid">

          {/* Image Upload */}
          <div className="field full-width">
            <label>Food Photo</label>
            <label className="image-upload-box" htmlFor="image-input">
              {preview
                ? <img src={preview} alt="preview" className="image-preview" />
                : (
                  <div className="image-upload-placeholder">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <rect x="3" y="3" width="18" height="18" rx="3"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <path d="M21 15l-5-5L5 21"/>
                    </svg>
                    <span>Click to upload a photo</span>
                    <span className="upload-hint">JPG, PNG, WEBP — max 5MB</span>
                  </div>
                )
              }
            </label>
            <input id="image-input" type="file" accept="image/*" onChange={handleImage} style={{ display: 'none' }} />
          </div>

          <div className="field">
            <label htmlFor="title">Food Name</label>
            <input id="title" name="title" placeholder="e.g. Homemade Biryani" onChange={handleChange} value={food.title} />
          </div>

          <div className="field">
            <label htmlFor="location">Location</label>
            <input id="location" name="location" placeholder="e.g. RS Puram, Coimbatore" onChange={handleChange} value={food.location} />
          </div>

          <div className="field full-width">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows={3}
              placeholder="Describe the food — quantity, freshness, dietary info, allergens..."
              onChange={handleChange} value={food.description} />
          </div>

          <div className="field">
            <label htmlFor="price">Price (₹) — 0 for Free</label>
            <input id="price" name="price" type="number" placeholder="0" onChange={handleChange} value={food.price} />
          </div>

          <div className="field" style={{ justifyContent: 'flex-end' }}>
            <button className="submit-btn" onClick={handleSubmit}>List My Food</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddFoodPage;
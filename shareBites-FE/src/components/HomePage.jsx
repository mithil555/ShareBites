import { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [foods, setFoods] = useState([]);

  const fetchFoods = () => {
    axios.get('http://localhost:8080/api/food').then((res) => setFoods(res.data));
  };

  const deleteFood = (id) => {
    axios.delete(`http://localhost:8080/api/food/${id}`).then(fetchFoods);
  };

  useEffect(() => { fetchFoods(); }, []);

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          Coimbatore's Community Kitchen
          <span className="hero-tag-dot" />
        </div>
        <h1 className="hero-title">Share <em>Bites</em></h1>
        <p className="hero-sub">
          Connecting neighbours through food. Share your surplus, discover meals nearby,
          and together reduce waste one plate at a time.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">340+</span>
            <span className="stat-label">Meals Shared</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">120+</span>
            <span className="stat-label">Active Sharers</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">18+</span>
            <span className="stat-label">Neighbourhoods</span>
          </div>
        </div>
      </div>

      {/* Food Listings */}
      <div className="content-wrap">
        <div className="section-header">
          <span className="section-tag">Available Nearby</span>
          <span className="count-pill">
            {foods.length} {foods.length === 1 ? 'listing' : 'listings'}
          </span>
        </div>

        <div className="food-grid">
          {foods.length === 0 ? (
            <div className="empty-state">
              <div className="empty-glyph">◌</div>
              <p style={{ fontSize: '13px' }}>No food listed yet — be the first to share!</p>
            </div>
          ) : (
            foods.map((food) => (
              <div className="food-card" key={food.id}>
  {food.image && (
    <div className="food-card-img-wrap">
      <img src={food.image} alt={food.title} className="food-card-img" />
    </div>
  )}
  <div className="food-card-top">
    <h3 className="food-title">{food.title}</h3>
    <p className="food-desc">{food.description || 'No description provided.'}</p>
  </div>
  <div className="food-meta">
    <div className="food-loc">
      <span className="loc-dot" />
      {food.location}
    </div>
    <div className="food-price">
      {food.price === 0 ? 'Free' : `₹${food.price}`}
    </div>
  </div>
  <button className="delete-btn" onClick={() => deleteFood(food.id)}>
    Remove listing
  </button>
</div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;

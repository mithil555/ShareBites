

function AboutPage() {
  return (
    <div className="about-wrap">

      <div className="about-hero">
        <div className="about-logo-big">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 24 Q8 10 16 10 Q24 10 28 24" />
            <path d="M10 16 Q16 8 22 16" />
          </svg>
        </div>
        <div>
          <h1 className="about-title">About Share <em>Bites</em></h1>
          <p className="about-tagline">
            A community-driven food sharing platform born in Coimbatore, Tamil Nadu —
            bridging the gap between surplus home-cooked food and hungry neighbours since 2026.
          </p>
        </div>
      </div>

      <h3 className="section-h">Our Mission</h3>
      <p className="body-text">
        Share Bites was built on a simple belief: no good food should go to waste while someone nearby
        is in need. Every day, households across Coimbatore cook more than they can consume.
        We built this platform to turn that surplus into community strength — making it effortless
        for anyone to list, discover, and claim food within their neighbourhood.
      </p>
      <p className="body-text">
        We are not a delivery service or a food business. We are a people's platform — free, open,
        and built on trust. Whether it is a pot of freshly made sambar, leftover wedding food, or
        a weekend batch of homemade sweets, Share Bites gives it a second life and a grateful recipient.
      </p>

      <h3 className="section-h">Our Values</h3>
      <div className="values-grid">
        <div className="value-card">
          <div className="value-icon">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="5.5" /><path d="M8 3v5l3 2" />
            </svg>
          </div>
          <div className="value-name">Zero Waste</div>
          <div className="value-desc">Every meal shared is a step toward a more sustainable Coimbatore.</div>
        </div>
        <div className="value-card">
          <div className="value-icon">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 13 Q3 10 3 6.5 A3 3 0 0 1 8 4 A3 3 0 0 1 13 6.5 Q13 10 8 13Z" />
            </svg>
          </div>
          <div className="value-name">Community First</div>
          <div className="value-desc">Neighbours helping neighbours — the foundation we build on.</div>
        </div>
        <div className="value-card">
          <div className="value-icon">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8l3 3 7-6" />
            </svg>
          </div>
          <div className="value-name">Radical Trust</div>
          <div className="value-desc">Our platform runs on goodwill, honesty, and shared responsibility.</div>
        </div>
      </div>

      <h3 className="section-h">Founder & Owner</h3>
      <div className="owner-card">
        
        <div>
          <div className="owner-name">Mithil Prakash</div>
          <div className="owner-role">Founder & Owner, Share Bites</div>
          <p className="owner-bio">
            Mithil Prakash is a Coimbatore-based entrepreneur and community advocate passionate
            about sustainable living and social impact. He founded Share Bites after witnessing
            the scale of food waste in urban households and believing that technology could turn
            the problem into an opportunity for human connection. His vision is to expand
            Share Bites to every district in Tamil Nadu by 2026.
          </p>
        </div>
      </div>

      <h3 className="section-h">Contact Us</h3>
      <div className="contact-grid">
        <div className="contact-item">
          <div className="contact-label">Email</div>
          <div className="contact-val">sharebites@gmail.com</div>
        </div>
        <div className="contact-item">
          <div className="contact-label">Phone</div>
          <div className="contact-val">+91 80720 15539</div>
        </div>
        <div className="contact-item">
          <div className="contact-label">Headquarters</div>
          <div className="contact-val">Coimbatore, Tamil Nadu</div>
        </div>
        <div className="contact-item">
          <div className="contact-label">Founded</div>
          <div className="contact-val">2026 by Mithil Prakash</div>
        </div>
      </div>

    </div>
  );
}

export default AboutPage;
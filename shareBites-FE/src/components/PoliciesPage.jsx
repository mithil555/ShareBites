function PoliciesPage() {
  return (
    <div className="policy-wrap">

      <div className="policy-hero">
        <div className="policy-hero-tag">Legal &amp; Community Standards</div>
        <h1 className="policy-hero-title">Our Policies</h1>
        <p className="policy-hero-sub">
          Share Bites is built on trust. These policies exist to keep our platform safe, respectful,
          and beneficial for every member of our community. Last updated: January 2025.
        </p>
      </div>

      <div className="policy-section">
        <div className="policy-num">Policy 01</div>
        <h3 className="policy-title">Food Safety Standards</h3>
        <p className="policy-body">
          All food listed on Share Bites must meet basic safety and hygiene standards.
          As a lister, you take personal responsibility for the food you share.
          We trust our community to act with integrity and care.
        </p>
        <ul className="policy-list">
          <li>Food must be freshly prepared or stored under appropriate conditions.</li>
          <li>Clearly mention any allergens — nuts, gluten, dairy, or high spice levels.</li>
          <li>Do not list food that has been stored for more than 24 hours without refrigeration.</li>
          <li>Packaging must be clean, covered, and tamper-evident where possible.</li>
          <li>Home-cooked food must be prepared in a hygienic kitchen environment.</li>
        </ul>
      </div>

      <div className="policy-section">
        <div className="policy-num">Policy 02</div>
        <h3 className="policy-title">Community Guidelines</h3>
        <p className="policy-body">
          Share Bites is a space of generosity and respect. Every user — whether sharing or receiving —
          is expected to treat others with dignity and kindness at all times.
        </p>
        <ul className="policy-list">
          <li>Be honest in your listings — describe food accurately with quantity and condition.</li>
          <li>Do not misuse the platform for commercial gain or unapproved resale of food.</li>
          <li>Cancel or remove your listing promptly if the food is no longer available.</li>
          <li>Treat every interaction on this platform with courtesy and respect.</li>
          <li>Discriminatory behaviour based on caste, religion, or background will result in a ban.</li>
        </ul>
      </div>

      <div className="policy-section">
        <div className="policy-num">Policy 03</div>
        <h3 className="policy-title">Privacy Policy</h3>
        <p className="policy-body">
          We collect only the minimum data necessary to run the platform. Your personal information
          is never sold or shared with third parties for marketing purposes.
        </p>
        <ul className="policy-list">
          <li>Listing data (food name, location, price) is publicly visible to all users.</li>
          <li>We do not collect payment information — all transactions are handled in person.</li>
          <li>Your usage data may be used anonymously to improve platform features.</li>
          <li>You may request deletion of your data at any time by contacting hello@sharebites.in.</li>
        </ul>
      </div>

      <div className="policy-section">
        <div className="policy-num">Policy 04</div>
        <h3 className="policy-title">Listing &amp; Removal Policy</h3>
        <p className="policy-body">
          Share Bites reserves the right to remove any listing that violates our guidelines or
          poses a risk to the community. Repeated violations may result in account suspension.
        </p>
        <ul className="policy-list">
          <li>Listings are active for a maximum of 12 hours from the time of posting.</li>
          <li>Listings for alcohol, tobacco, or non-food items are strictly prohibited.</li>
          <li>Share Bites moderators may remove listings without prior notice if safety is at risk.</li>
          <li>Appeals can be submitted to hello@sharebites.in within 48 hours of removal.</li>
        </ul>
      </div>

    </div>
  );
}

export default PoliciesPage;

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Contact Us</h3>
          <p>Email:     @kubest.in</p>
          <p>Call: +91 9999999999</p>
        </div>

        <div>
          <h3>Important Links</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        <div>
          <h3>Social Media</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div>
          <h3>Newsletter</h3>
          <input type="email" placeholder="Email" />
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

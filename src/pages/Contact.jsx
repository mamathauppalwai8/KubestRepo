function Contact() {
  return (
    <div className="container">
      <h1>Contact Us </h1>

      <form className="contact-form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <input type="text" placeholder="Subject" />
        <textarea placeholder="Your Message"></textarea>
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

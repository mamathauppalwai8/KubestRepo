function Blog() {
  return (
    <div className="container">
      <h1>Blog</h1>

      <div className="blog-grid">
        <div className="blog-card">
          <br />
          <h3>My Journey in Digital Marketing</h3>
          <br />
          <p>Digital marketing strategies for growth.</p>
          <br />
          <button className="btn-primary">Read More</button>
        </div>

        <div className="blog-card">
          <h3>Modern IT Services for Startups</h3>
          <br />
          <p>
            How to leverage modern IT services to accelerate startup
            growth.{" "}
          </p>
          <br />
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;

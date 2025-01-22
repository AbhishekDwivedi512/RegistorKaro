import React from 'react';
import './Blog.css';

const blogs = [
  {
    author: "Prabhash Mishra",
    date: "1 Jan 2023",
    title: "Small Business & Startup",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tax & Audit", "Management"],
    image: "./assets/char1.png",
  },
  {
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tax", "Research", "Compliance"],
    image: "./assets/char2.png",
  },
  {
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
    image: "./assets/char3.png",
  },
  {
    author: "Karan Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Collaboration can make our teams stronger, and our individual designs better.",
    tags: ["Money", "Management"],
    image: "./assets/char4.png",
  },
  {
    author: "Richa Singh",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: ["Tax Return", "News", "Audit"],
    image: "./assets/char5.png",
  },
  {
    author: "Miss Nora",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Starting a community doesn’t need to be complicated, but how do you get started?",
    tags: ["Private Limited Company", "Customer Success"],
    image: "./assets/char6.png",
  },
];
    const testimonials = [
        {
          name: "Chris",
          title: "President and CEO, PrintReach, USA",
          feedback:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
          rating: 4.5,
          image: "./assets/model.png",
        },
        {
          name: "Emma",
          title: "CTO, TechSolutions, UK",
          feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          rating: 5,
          image: "./assets/model.png",
        },
        {
          name: "John",
          title: "Manager, Innovate LLC, Canada",
          feedback:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          rating: 4,
          image: "./assets/model.png",
        },
  ];

const Blog = () => {
  return (
    <div className="blogs-container">
    <div><p className="explore-heading">EXPLORE OUR BLOGS</p></div>
    <header className="main-heading">
     <div><h1>Accelerate Digital Transformation</h1></div>
    </header>
    <section className="blogs">
      {blogs.map((blog, index) => (
        <div className="blog-card" key={index}>
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          <div className="blog-meta">
            <span>{blog.author}</span> <span>{blog.date}</span>
          </div>
          <div className="blog-tags">
            {blog.tags.map((tag, idx) => (
              <span className="tag" key={idx}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
    <button className="show-more">Show More Blogs →</button>
    <section className="testimonials">
      <h2>What People Say About Us</h2>
      <div className="testimonial-navigation">
        <button className="nav-button">❮</button>
        <button className="nav-button">❯</button>
      </div>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <blockquote className="testimonial-feedback">"{testimonial.feedback}"</blockquote>
            <div className="testimonial-rating">
              {"⭐".repeat(Math.floor(testimonial.rating))}
              {testimonial.rating % 1 !== 0 ? "⭐" : ""}
            </div>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
            <p className="testimonial-author">
            <strong>{testimonial.name}</strong>, {testimonial.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
);
};

export default Blog;
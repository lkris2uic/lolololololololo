import React from "react";
import "../components/styles/Home.css";

const features = [
  { id: 1, title: "Voice Journaling", description: "Record and transcribe your thoughts seamlessly." },
  { id: 2, title: "Emotional Insights", description: "Analyze and understand your emotional patterns." },
  { id: 3, title: "Recurring Topics", description: "Discover recurring themes over time." },
  { id: 4, title: "AI Assistance", description: "Engage in insightful conversations with AI." },
  { id: 5, title: "Artwork Generation", description: "Turn your thoughts into stunning AI-generated artwork." },
  { id: 6, title: "Weekly Summaries", description: "Receive concise weekly summaries of your journals." },
  { id: 7, title: "Personality Assessment", description: "Analyze your personality traits through journaling." },
  { id: 8, title: "Custom Frameworks", description: "Create personalized journaling templates for your needs." },
];

const faqs = [
  { question: "How does the AI analyze my journal?", answer: "The AI uses natural language processing to analyze your text and provide insights." },
  { question: "Is my data secure and private?", answer: "Yes, we use encryption to keep your data safe and private." },
  { question: "Can I use this for free?", answer: "We offer a free plan with core features and premium plans for advanced tools." },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">Discover Your AI Journaling Companion</h1>
        <p className="header-subtitle">
          Explore powerful features designed to help you grow and reflect.
        </p>
      </header>

      {/* Feature Grid */}
      <div className="feature-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">Why Choose Our App?</h2>
        <p className="about-text">
          We believe journaling is more than words. Our AI-powered platform helps you uncover insights, analyze emotions, and grow with purpose. With a seamless user experience and innovative tools, we empower you to reflect deeper and achieve more.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <h2 className="section-title">Stay Updated</h2>
        <p className="newsletter-text">
          Subscribe to our newsletter to receive updates, journaling tips, and feature announcements.
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <p className="footer-copyright">
          © 2024 Your AI Journaling App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;

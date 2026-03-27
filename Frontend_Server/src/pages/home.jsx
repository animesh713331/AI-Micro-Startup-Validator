import React from 'react';
// import './home.css';
import Card from '../components/card';

export default function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <h1>Welcome to AI Micro Startup Validator</h1>
                <p>Validate your startup ideas with AI-powered insights</p>
                <button className="cta-button">Get Started</button>
            </section>

            <section>
                <h2>What We Offer</h2>
                <p>Our platform provides comprehensive validation for your startup ideas using advanced AI algorithms. Get insights, market analysis, and feedback to optimize your business concept.</p>
                <Card title="AI Analysis" description="Get intelligent analysis of your business concept" imageUrl="/images/ai-analysis.jpg" onClick={() => console.log('AI Analysis clicked')} />
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Key Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>AI Analysis</h3>
                        <p>Get intelligent analysis of your business concept</p>
                    </div>
                    <div className="feature-card">
                        <h3>Market Insights</h3>
                        <p>Understand market trends and opportunities</p>
                    </div>
                    <div className="feature-card">
                        <h3>Feedback Reports</h3>
                        <p>Receive detailed validation reports</p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works">
                <h2>How It Works</h2>
                <ol className="steps">
                    <li>Submit your startup idea</li>
                    <li>AI analyzes your concept</li>
                    <li>Get comprehensive feedback</li>
                    <li>Optimize and iterate</li>
                </ol>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Ready to validate your startup?</h2>
                <button className="cta-button">Start Now</button>
            </section>
        </div>
    );
}
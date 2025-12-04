
const HowItWorks = () => {
  return (
    <section className="how-it-works-container">
      <h2 className="how-it-works-title">How It Works</h2>
      <p className="how-it-works-text">
        HistoryTwister uses the power of Gemini AI to generate alternative history scenarios <br />
        Simply type a "what-if" prompt, choose a style, and watch the AI twist history in creative & funny ways
      </p>

      <div className="steps-container">
        <div className="step">
          <h3>1. Enter a Prompt 📝</h3>
          <p>Describe your “what-if” scenario in the input box</p>
        </div>

        <div className="step">
          <h3>2. Pick a Style 🎨</h3>
          <p>Choose how the AI presents your alternate history: Newspaper, Blog, Tweet, or Default</p>
        </div>

        <div className="step">
          <h3>3. Generate 🚀</h3>
          <p>Click the generate button and see the AI bring your alternate reality to life</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

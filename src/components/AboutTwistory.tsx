
const AboutTwistory = () => {
  return (
    <section className="why-built-container">
      <h2 className="why-built-title">About Twistory</h2>

      <p className="why-built-text">
        I made Twistory because I really enjoy history and it's interesting to read about. 
        I also like imagining what-if scenarios in my head of different timelines and how the future might be different today.
       
      </p>

      <p className="why-built-text">
        This website started as a personal CS project where I could combine my passion for history with my interest in coding.  
        I built it using <strong>React + TypeScript</strong>, hosted on <strong>Azure Static Web Apps</strong>, and used a <strong>serverless API proxy via Azure Functions</strong> to securely access the API.
      </p>

      <p className="why-built-text">
        Also, I thought it would be interesting to mess around with Gen AI and decided to use the Gemini API, the free tier one from Google AI Studio. There's only 60 prompts or queries per hour so be wary of that. Anyways, thanks for checking out my website :)
      </p>

      <div className="why-built-icons">
        <div className="icon-card">
          🏛️
          <p>History Enjoyer</p>
        </div>
        <div className="icon-card">
          💻
          <p>Coding Project</p>
        </div>
        <div className="icon-card">
          🤖
          <p>AI Shenanigans</p>
        </div>
      </div>
    </section>
  );
};

export default AboutTwistory;

import {useState, useEffect} from "react";
import type { KeyboardEvent } from "react";
import PromptInput from './components/PromptInput';
import StyleSelector from './components/StyleSelector';
import OutputDisplay from './components/OutputDisplay';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import AboutTwistory from './components/AboutTwistory';
import Footer from './components/Footer';

import { GoogleGenAI } from "@google/genai";
import './App.css';

const apiKey = import.meta.env.VITE_API_KEY;

function App(){
  const[output, setOutput] = useState(''); //Ai generated output
  const[prompt, setPrompt] = useState(''); //users input prompt
  const[style, setStyle] = useState('default'); //defaulted on newspaper
  const [loading, setLoading] = useState(false); //loading state while waiting for ai response
  const [launched, setLaunched] = useState(false);
  const [displayedOutput, setDisplayedOutput] = useState("");

  const ai = new GoogleGenAI({ apiKey });

  const generateAI = async (userPrompt: string, style: string): Promise<string> => {
    try {

      const styleInstructions: Record<string, string> = {
        default: `You are HistoryTwister, an AI that creates alternate history scenarios. 
        Write 150 words max. Stay on topic; refuse requests about unrelated prompts.
        Do not include greetings,intros, just start with scenario`,

        newspaper: `You are HistoryTwister, an AI that writes alternate history newspaper articles. 
        Write 130 words max. Stay on topic; refuse requests about unrelated prompts.
        Do not include greetings,intros, just start with scenario`,

        tweet: `Pretend you are Twitter users. Write 5 tweets as if in the alternate history scenario. 
        Hashtags optional, 1 hashtag max, don't say "Here's 5 tweets". Refuse requests about unrelated prompts.
        Do not include greetings/intros, just start with scenario`,

        blog: `Pretend you are a blogger. Write a 150-word blog about living in alternate history scenario. 
        Stay on topic, creative but natural. Refuse requests about unrelated prompts.
        Do not include greetings,intros, just start with scenario`
              };
  
      const promptText = `${styleInstructions[style]} Prompt: "${userPrompt}"`;
      console.log(promptText);
  
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: promptText,
      });
      
      console.log(response.text);
      return response.text ?? "Error: no text returned from AI";

    } catch (err) {
      console.error(err);
      return "Error generating AI text";
    }
  }

  //generate Ai output when user presses enter
  const handleKeyPress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setLoading(true);
      const result = await generateAI(prompt, style);
      setOutput(result);
      setLoading(false);
      console.log(loading);
    }
  }

  const handleTwistClick = async () => {
    setLoading(true);
    const result = await generateAI(prompt, style);
    setOutput(result);
    setLoading(false);
  };

  //display the generated output words at a time instead of at once
  useEffect(() => {
  if (!output) return;

  const words = output.split(" ").filter(Boolean); // remove empty strings
  let currentWordIndex = 0;

  setDisplayedOutput(""); // reset displayed output
  //console.log("Starting typing effect, words:", words);

  const typeWord = () => {
    if (currentWordIndex >= words.length) {
      //console.log("Typing complete!");
      return;
    }

    const word = words[currentWordIndex];
    //console.log("Typing word:", word, "index:", currentWordIndex);

    setDisplayedOutput((prev) => (prev ? prev + " " + word : word));
    currentWordIndex++;

    setTimeout(typeWord, 55); // 55ms per word
  };

  typeWord();
}, [output]);

//for parsing the AI generated output (newlines, paragraphs, bold, etc)
const parseOutput = (text: string) => {
  if (!text.trim()) return null;

  const paragraphs = text.split(/\n\n/);

  return paragraphs.map((para, idx) => {
    
    //for bolds
    const parts = para.split(/(\*\*[^*]+\*\*)/g); 

    return (
      <p key={idx} style={{ marginBottom: "1em" }}>
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
          } else {
            return part;
          }
        })}
      </p>
    );
  });
};


  return (
    <>
    <div className="app-container">

    <Navbar
      resetLaunch={() => setLaunched(false)}
      resetPromptAndStyle={() => {
        setPrompt('');
        setStyle('default');
        setDisplayedOutput('');
      }}
    />

    <HeroSection launched={launched} setLaunched={setLaunched}>
      <PromptInput prompt={prompt} 
      setPrompt={setPrompt}
      onKeyPress={handleKeyPress} 
      spellCheck={false} 
      onTwist={handleTwistClick} 
      loading={loading} />

      <StyleSelector style={style} setStyle={setStyle} />

      <OutputDisplay output={parseOutput(displayedOutput)} />

    </HeroSection>

    <div id="how">
      <HowItWorks />
    </div>

    <div id="about">
      <AboutTwistory />
    </div>

    <div className="FooterBigContainer" id="contact">
      <Footer />
    </div>

   

    </div>
    
    </>
  );

}

export default App;

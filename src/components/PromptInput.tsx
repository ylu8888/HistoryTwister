import React from 'react';

interface PromptInputProps {
    //interface is for our prompt object
    //we define two properties, a prompt string (the user input)
    //and a set prompt, taking user input and storing it
    prompt: string,
    setPrompt: (value: string) => void; 
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    spellCheck?: boolean; 
    onTwist?: () => void;
    loading?: boolean;
}

const PromptInput = ({ prompt, setPrompt, onKeyPress, spellCheck, onTwist, loading}: PromptInputProps) => {
    return(
        <div className="prompt-wrapper">
           <input
            type="text"
            className="prompt-searchbar"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder='Enter your "what-if" prompt...'
            spellCheck={spellCheck ?? false}
            
            />

            <button
                className={`twist-btn ${loading ? "loading" : ""}`}
                onClick={onTwist}
                disabled={loading || !prompt.trim()}
            >
                {loading ? <div className="spinner"></div> : "Twist"}
            </button>
            


        </div>
    )
}

export default PromptInput;

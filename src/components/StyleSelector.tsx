import React from 'react';

interface StyleSelectorProps {
  style: string;
  setStyle: (value: string) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ style, setStyle }) => {
  return (
    <div className="style-select-container">
      <button
        className={style === "default" ? "active" : ""}
        onClick={() => setStyle("default")}
      >
        Default
      </button>
      <button
        className={style === "newspaper" ? "active" : ""}
        onClick={() => setStyle("newspaper")}
      >
        Newspaper
      </button>
      <button
        className={style === "tweet" ? "active" : ""}
        onClick={() => setStyle("tweet")}
      >
        Tweets
      </button>
      <button
        className={style === "blog" ? "active" : ""}
        onClick={() => setStyle("blog")}
      >
        Blog
      </button>
    </div>
  );
};

export default StyleSelector;

import { useEffect } from "react";

const RaktveerChat: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://chartbots.com/widget.js?storyId=68cf9ca1e8c6b100073e7384";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Chatbot is a popup, no UI needed
};

export default RaktveerChat;
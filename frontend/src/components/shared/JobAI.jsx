import { useState, useRef, useEffect } from "react";
import "./App.css"                                  //To be put into css file of project
// /* Custom Scrollbar Styles */
// .scrollbar-thin::-webkit-scrollbar {
//     width: 6px;
//   }

//   .scrollbar-thin::-webkit-scrollbar-track {
//     background: transparent;
//   }

//   .scrollbar-thin::-webkit-scrollbar-thumb {
//     background-color: #93C5FD;
//     border-radius: 3px;
//   }

//   .scrollbar-thin::-webkit-scrollbar-thumb:hover {
//     background-color: #60A5FA;
//   }

//   .hide-scrollbar::-webkit-scrollbar {
//     display: none;
//   }

//   .hide-scrollbar {
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }

import axios from "axios";
import ReactMarkdown from "react-markdown";

function JobAI() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const API_KEY = import.meta.env.VITE_WOW || "AIzaSyA037rT8FfFlOieXwWoFTjii8_rcle3oOs"; 
 // api key called from .env and path of this variable to be changed to reach .env and add api key in .env by this variable name

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, generatingAnswer]);

  const generateAnswer = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion(""); // Clear the input immediately after sending

    // Add user's question to chat historyyyyyy
    setChatHistory((prev) => [
      ...prev,
      { type: "question", content: currentQuestion },
    ]);

    const data = {
      contents: [
        {
          parts: [
            {
              text: currentQuestion,
            },
          ],
        },
      ],
    };

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Extract AI response
      const aiResponse =
        response.data.candidates[0]?.content?.parts[0]?.text ||
        "Sorry, I couldn't generate a response.";

      // Add AI's response to chat history
      setChatHistory((prev) => [
        ...prev,
        { type: "answer", content: aiResponse },
      ]);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );

      // Handle error and add fallback response to chat history
      const errorMessage = "Sorry - Something went wrong. Please try again!";
      setChatHistory((prev) => [
        ...prev,
        { type: "answer", content: errorMessage },
      ]);
    }

    setGeneratingAnswer(false);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="h-full max-w-4xl mx-auto flex flex-col p-3">
        {/* Fixed Header */}
        <header className="text-center py-4">
          <a className="block">
            <h1 className="text-4xl font-bold text-blue-500 hover:text-blue-600 transition-colors">
              Job AI✨
            </h1>
          </a>
        </header>

        {/* Scrollable Chat Container */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto mb-4 rounded-lg bg-white shadow-lg p-4 hide-scrollbar"
        >
          {chatHistory.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="bg-blue-50 rounded-xl p-8 max-w-2xl">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                  Welcome to Job AI! 👋
                </h2>
                <p className="text-gray-600 mb-4">
                  Ask me anything. I'm here to help with:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-blue-500">💡</span> Job Selection
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-blue-500">🔧</span> Technical
                    questions
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-blue-500">📝</span> Writing assistance
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-blue-500">🤔</span> Job prefrences
                  </div>
                </div>
                <p className="text-gray-500 mt-6 text-sm">
                  Type your question below and press Enter or click Send🪄
                </p>
              </div>
            </div>
          ) : (
            chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  chat.type === "question" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block max-w-[80%] p-3 rounded-lg overflow-auto hide-scrollbar ${
                    chat.type === "question"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <ReactMarkdown>{chat.content}</ReactMarkdown>
                </div>
              </div>
            ))
          )}
          {generatingAnswer && (
            <div className="text-left">
              <div className="inline-block bg-gray-100 p-3 rounded-lg animate-pulse">
                Generating✨
              </div>
            </div>
          )}
        </div>

        {/* Fixed Input Form */}
        <form
          onSubmit={generateAnswer}
          className="bg-white rounded-lg shadow-lg p-4"
        >
          <div className="flex gap-2">
            <textarea
              required
              className="flex-1 border border-gray-300 rounded p-3 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask anything..."
              rows="2"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  generateAnswer(e);
                }
              }}
            ></textarea>
            <button
              type="submit"
              className={`px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${
                generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={generatingAnswer}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobAI;

import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./chatbot.scss";
import chatBotPic from "../../Images/zohaib's picture.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Muhammad Zohaib's AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Smart responses based on keywords
  const getSmartResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Portfolio related questions
    if (
      message.includes("portfolio") ||
      message.includes("work") ||
      message.includes("projects")
    ) {
      return "I'd be happy to tell you about Zohaib's portfolio! He's a skilled Front-End React Developer with experience in modern web technologies. You can check out his projects section to see his latest work including e-commerce sites, web applications, and more. Would you like to know about any specific project?";
    }

    // Skills related questions
    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech stack")
    ) {
      return "Muhammad specializes in:\n• React.js & Next.js\n• JavaScript (ES6+)\n• HTML5 & CSS3/SCSS\n• Node.js & Express\n• MongoDB & MySQL\n• Git & GitHub\n• Responsive Design\n• UI/UX Design\n\nHe's always learning new technologies to stay current with industry trends!";
    }

    // Experience related questions
    if (
      message.includes("experience") ||
      message.includes("job") ||
      message.includes("career")
    ) {
      return "Muhammad has professional experience as a Front-End Developer with expertise in creating responsive, user-friendly web applications. He's worked on various projects ranging from small business websites to complex web applications. Check out his 'Jobs' section for detailed work experience!";
    }

    // Contact related questions
    if (
      message.includes("contact") ||
      message.includes("hire") ||
      message.includes("available")
    ) {
      return "Muhammad is currently available for freelance projects and full-time opportunities! You can reach him through:\n• Email: [Check contact section]\n• LinkedIn: [Profile link in contact]\n• WhatsApp: Click the WhatsApp button below\n• Or fill out the contact form on this website!";
    }

    // Location related questions
    if (
      message.includes("location") ||
      message.includes("where") ||
      message.includes("karachi") ||
      message.includes("pakistan")
    ) {
      return "Muhammad is based in Karachi, Pakistan 📍. He's available for both local and remote work opportunities worldwide. He has experience working with international clients and different time zones.";
    }

    // Education related questions
    if (
      message.includes("education") ||
      message.includes("study") ||
      message.includes("university") ||
      message.includes("degree")
    ) {
      return "Muhammad has a strong educational background in Computer Science/Software Engineering. He also holds various certifications in web development technologies. You can check his certificates section to see his professional certifications and achievements!";
    }

    // Pricing related questions
    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("rate") ||
      message.includes("budget")
    ) {
      return "Zohaib's rates are competitive and depend on the project scope, complexity, and timeline. He offers:\n• Hourly rates for smaller tasks\n• Fixed pricing for complete projects\n• Custom packages for ongoing work\n\nFor a detailed quote, please contact him directly with your project requirements!";
    }

    // Timeline related questions
    if (
      message.includes("time") ||
      message.includes("delivery") ||
      message.includes("deadline") ||
      message.includes("fast")
    ) {
      return "Project timelines vary based on complexity, but Muhammad is known for:\n• Quick turnaround times\n• Meeting deadlines\n• Regular progress updates\n• Agile development approach\n\nTypical timelines:\n• Simple websites: 1-2 weeks\n• Complex web apps: 3-8 weeks\n• Custom solutions: Discussed per project";
    }

    // WhatsApp related
    if (
      message.includes("whatsapp") ||
      message.includes("chat") ||
      message.includes("message")
    ) {
      return "You can chat with Muhammad directly on WhatsApp! Just click the WhatsApp button below and start a conversation. He usually responds within a few hours during business hours (PKT timezone).";
    }

    // Greeting responses
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello! Great to meet you! I'm here to help you learn more about Muhammad Zohaib and his work. What would you like to know about his portfolio, skills, or services?";
    }

    // Thank you responses
    if (message.includes("thank") || message.includes("thanks")) {
      return "You're very welcome! If you have any other questions about Zohaib's work or want to get in touch with him, feel free to ask. I'm here to help! 😊";
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! For specific details, I'd recommend reaching out to Muhammad directly. You can contact him through the contact form or WhatsApp.",
      "I'd love to help you with that! For the most accurate information, please feel free to contact Muhammad directly. He's very responsive to inquiries.",
      "Great question! Muhammad would be the best person to give you detailed information about that. You can reach him through multiple channels on this website.",
      "I understand you're looking for more information. Muhammad is available for direct conversations - try the WhatsApp integration or contact form for personalized responses!",
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getSmartResponse(inputText),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleQuickAction = (action) => {
    let responseText = "";
    switch (action) {
      case "projects":
        responseText =
          "Here are Zohaib's featured projects:\n\n1. E-commerce Platform - React & Node.js\n2. Portfolio Website - React & SCSS\n3. Task Management App - React & MongoDB\n4. Restaurant Website - HTML5, CSS3, JS\n\nWould you like to know more about any specific project?";
        break;
      case "contact":
        responseText = (
          <div>
            <p>You can contact Muhammad through:</p>
            <br />
            <p>
              📧 Email:{" "}
              <a
                href="mailto:zohaibsoomro0101@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#075E54", textDecoration: "underline" }}
              >
                zohaibsoomro0101@gmail.com
              </a>
            </p>
            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/muhammad-zohaib"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#075E54", textDecoration: "underline" }}
              >
                Professional profile
              </a>
            </p>
            <p>
              📱 WhatsApp:{" "}
              <a
                href="https://wa.me/923482469101?text=Hi%20Zohaib!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#075E54", textDecoration: "underline" }}
              >
                Direct messaging
              </a>
            </p>
            <p>📝 Contact Form: On this website</p>
            <br />
            <p>He typically responds within 24 hours!</p>
          </div>
        );
        break;
      case "hire":
        responseText =
          "Muhammad is available for:\n\n✅ Freelance Projects\n✅ Full-time Opportunities\n✅ Contract Work\n✅ Consulting\n\nHe specializes in React development, responsive design, and modern web applications. Ready to discuss your project requirements!";
        break;
      case "whatsapp":
        window.open(
          "https://wa.me/923482469101?text=Hi%20Zohaib!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
          "_blank"
        );
        responseText =
          "WhatsApp chat opened! You can now message Muhammad directly. He'll get back to you soon!";
        break;
    }

    const botMessage = {
      id: messages.length + 1,
      text: responseText,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="chatbot-container">
      {/* Chat Toggle Button */}
      <div
        className={`chat-toggle ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"
            />
          </svg>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Chat Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="avatar">
                <img src={chatBotPic} alt="Muhammad Zohaib" />
                <div className="status-dot"></div>
              </div>
              <div className="header-text">
                <h4>Muhammad Zohaib</h4>
                <span>AI Assistant </span>
              </div>
            </div>
            <div className="chat-actions">
              <button
                className="whatsapp-btn"
                onClick={() => handleQuickAction("whatsapp")}
                title="Chat on WhatsApp"
              >
                <FaWhatsapp size={20} color="#25D366" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="messages-container">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="timestamp">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="message bot">
                <div className="message-content typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <button onClick={() => handleQuickAction("projects")}>
              📂 Projects
            </button>
            <button onClick={() => handleQuickAction("contact")}>
              📞 Contact
            </button>
            <button onClick={() => handleQuickAction("hire")}>
              💼 Hire Me
            </button>
          </div>

          {/* Input Area */}
          <div className="chat-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask me anything about Zohaib's work..."
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={isTyping || !inputText.trim()}
              className="send-btn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="currentColor"
                  d="M2,21L23,12L2,3V10L17,12L2,14V21Z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

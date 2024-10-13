import React, { useState, useEffect ,useRef} from "react";
import { useNavigate } from "react-router-dom";

const VirtualAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const chatWindowRef = useRef(null);
  const handleBackToHome = () => {
    navigate("/"); // Redirect to home
  };

  const assistant = {
    name: "PeacePal",
    profilePicture: "http://surl.li/bjeonj",
  };

  const user = {
    name: "Shubhi",
    profilePicture: "http://surl.li/gjcpby",
  };

  // Predefined questions and answers
  const predefinedResponses = {
    "What are some ways to manage stress?": "You can try deep breathing, meditation, exercise, or talking to someone you trust.",
    "How can I improve my mood?": "Engaging in activities you enjoy, spending time with loved ones, and practicing mindfulness can help.",
    "What should I do if I'm feeling anxious?": "Take deep breaths, practice grounding techniques, and consider reaching out to a mental health professional if needed.",
    "How can I practice self-care?": "Self-care includes activities like taking breaks, enjoying hobbies, maintaining a healthy diet, and ensuring you get enough rest.",
    "What are the signs of burnout?": "Signs include fatigue, irritability, lack of motivation, and feeling overwhelmed.",
    "How do I know if I need therapy?": "If you're feeling persistently sad, anxious, or overwhelmed, talking to a therapist can be beneficial.",
    "What is mindfulness?": "Mindfulness is the practice of being present and fully engaged in the current moment, which can reduce stress and improve mental clarity.",
    "How can I build resilience?": "Resilience can be built by fostering a strong support network, maintaining a positive outlook, and learning from challenges.",
    "What are some techniques for better sleep?": "You can improve your sleep by maintaining a regular sleep schedule, creating a relaxing bedtime routine, and minimizing screen time before bed.",
    "What should I do if I feel overwhelmed?": "Take a step back, prioritize your tasks, and break them down into manageable steps. Don’t hesitate to ask for help.",
    "How can I cope with grief?": "Allow yourself to feel your emotions, talk to someone you trust, and consider seeking support from a counselor or support group.",
    "What are the benefits of talking to a therapist?": "Therapy can provide a safe space to explore your feelings, develop coping strategies, and gain new perspectives on your challenges.",
    "How can I deal with negative thoughts?": "Challenge negative thoughts by questioning their validity, focusing on positive affirmations, and practicing gratitude.",
    "What are some healthy coping strategies?": "Healthy coping strategies include exercise, journaling, practicing mindfulness, and seeking social support.",
    "How can I improve my communication skills?": "You can improve your communication skills by actively listening, practicing empathy, and being clear and concise in your messages.",
    "What should I do if I'm having a panic attack?": "Try to focus on your breathing, find a quiet space, and use grounding techniques to help regain control.",
    "How can I set boundaries in my life?": "Setting boundaries involves knowing your limits, communicating them clearly, and being consistent in enforcing them.",
    "What are the signs of depression?": "Signs of depression can include persistent sadness, loss of interest in activities, changes in appetite, and difficulty sleeping.",
    "How can I stay motivated?": "Setting realistic goals, celebrating small achievements, and surrounding yourself with supportive people can help you stay motivated.",
    "What should I do if I feel lonely?": "Reach out to friends or family, consider joining a club or community group, or explore hobbies that interest you.",
    "How can I manage my time better?": "Use a planner, prioritize tasks, and break your work into smaller, manageable chunks.",
    "What are some ways to improve my self-esteem?": "Practice self-compassion, set achievable goals, and surround yourself with positive influences.",
    "How can I develop a growth mindset?": "Embrace challenges, learn from criticism, and view failures as opportunities for growth.",
    "What is cognitive behavioral therapy (CBT)?": "CBT is a type of therapy that helps individuals understand and change negative thought patterns and behaviors.",
    "How can I deal with procrastination?": "Set small, specific goals, use a timer, and reward yourself for completing tasks.",
    "What are some techniques to enhance focus?": "Minimize distractions, set specific goals, and use techniques like the Pomodoro Technique.",
    "How can I build better habits?": "Start small, track your progress, and be consistent with your new behaviors.",
    "What should I do if I'm feeling burnt out?": "Take a break, reassess your workload, and incorporate self-care practices into your routine.",
    "How can I express my emotions effectively?": "Practice assertive communication, use `I` statements, and be honest about your feelings.",
    "What are some signs of a healthy relationship?": "Healthy relationships include trust, mutual respect, open communication, and support.",
    "How can I improve my problem-solving skills?": "Practice identifying problems, brainstorming solutions, and evaluating the effectiveness of your choices.",
    "What should I do if I feel stuck in life?": "Reflect on your goals, seek advice from trusted friends or mentors, and consider trying something new.",
    "How can I practice gratitude?": "Keep a gratitude journal, regularly acknowledge what you're thankful for, and express appreciation to others.",
    "What are some effective relaxation techniques?": "Try deep breathing, progressive muscle relaxation, or guided imagery to help you relax.",
    "How can I enhance my creativity?": "Engage in new experiences, set aside time for brainstorming, and allow yourself to think outside the box.",
    "What are some signs of anxiety?": "Signs of anxiety can include excessive worrying, restlessness, difficulty concentrating, and physical symptoms like a racing heart.",
    "How can I improve my decision-making skills?": "Gather information, weigh the pros and cons, and trust your intuition.",
    "What should I do if I feel overwhelmed by work?": "Communicate with your supervisor, prioritize tasks, and consider delegating when possible.",
    "How can I cultivate positive relationships?": "Be open, listen actively, show appreciation, and resolve conflicts respectfully.",
    "What are some tips for effective goal-setting?": "Make your goals specific, measurable, achievable, relevant, and time-bound (SMART).",
    "How can I support a friend in need?": "Be there to listen, offer your help, and encourage them to seek professional support if needed.",
    "What are the benefits of physical exercise for mental health?": "Exercise can reduce stress, improve mood, increase energy levels, and enhance overall well-being.",
    "How can I reduce social anxiety?": "Practice exposure therapy, challenge negative thoughts, and prepare for social situations in advance.",
    "What is the importance of emotional intelligence?": "Emotional intelligence helps you understand and manage your emotions and empathize with others, leading to better relationships.",
    "How can I find work-life balance?": "Set clear boundaries between work and personal time, prioritize self-care, and learn to say no when necessary.",
    "What are some tips for effective stress management?": "Incorporate regular exercise, mindfulness practices, and healthy coping strategies into your daily routine.",
    "How can I improve my listening skills?": "Practice active listening, give your full attention, and avoid interrupting when someone else is speaking.",
    "What should I do if I'm struggling with addiction?": "Seek professional help, connect with support groups, and focus on developing healthy coping mechanisms.",
    "How can I manage conflict in relationships?": "Communicate openly, listen to each other’s perspectives, and work towards finding a mutually acceptable solution.",
    "What are some self-reflection techniques?": "Journaling, meditation, and seeking feedback from others can help you gain insights into your thoughts and behaviors.",
    "How can I cope with major life changes?": "Acknowledge your feelings, stay connected with your support network, and take things one step at a time.",
  };
  
  useEffect(() => {
    const initialMessage = {
      sender: "Assistant",
      text: "Hi, how are you feeling today?",
      profilePicture: assistant.profilePicture,
      name: assistant.name,
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat window when messages change
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]); // This runs whenever messages change

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input) return;

    const newMessage = {
      sender: "User",
      text: input,
      profilePicture: user.profilePicture,
      name: user.name,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Check for predefined responses
    const responseText = Object.keys(predefinedResponses).find((key) =>
      key.toLowerCase().includes(input.toLowerCase())
    )
      ? predefinedResponses[Object.keys(predefinedResponses).find((key) =>
          key.toLowerCase().includes(input.toLowerCase())
        )]
      : `"${input}"`;
    
    const responseMessage = {
      sender: "Assistant",
      text: responseText,
      profilePicture: assistant.profilePicture,
      name: assistant.name,
    };

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    }, 1000);

    setInput("");
  };

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  const startListening = () => {
    recognition.start();
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setInput(transcript);
  };

  const styles = {
    container: {
      maxWidth: "900px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #007bff",
      borderRadius: "10px",
      backgroundColor: "#f1f7fc",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    chatWindow: {
      height: "400px",
      overflowY: "scroll", // Enable scrolling
      marginBottom: "10px",
      padding: "20px",
      border: "1px solid #007bff",
      borderRadius: "10px",
      backgroundColor: "#eef6ff",
      scrollbarWidth: "none", // For Firefox
      '-ms-overflow-style': 'none', // For Internet Explorer and Edge
    },
    message: {
      margin: "10px 0",
      display: "flex",
      alignItems: "center",
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    userMessage: {
      justifyContent: "flex-end",
    },
    assistantMessage: {
      justifyContent: "flex-start",
    },
    profileImage: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    inputContainer: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
    },
    input: {
      flex: 1,
      padding: "12px",
      border: "2px solid #007bff",
      borderRadius: "5px",
    },
    button: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#007bff",
      color: "#fff",
      cursor: "pointer",
    },
    voiceButton: {
      backgroundColor: "#28a745",
      color: "#fff",
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <button 
        onClick={handleBackToHome} 
        className="absolute bg-transparent text-blue-600 focus:outline-none hover:text-blue-800 transition"
      >
        Back to Home
      </button>
      <h2 style={{ textAlign: "center", color: "#007bff" }}>Live Chat</h2>
      <div style={styles.chatWindow} ref={chatWindowRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              ...(message.sender === "User"
                ? styles.userMessage
                : styles.assistantMessage),
            }}
          >
            {message.sender === "Assistant" && (
              <img
                src={message.profilePicture}
                alt={message.name}
                style={styles.profileImage}
              />
            )}
            <div>
              <strong>{message.name}</strong>
              <p style={{ margin: "0" }}>{message.text}</p>
            </div>
            {message.sender === "User" && (
              <img
                src={message.profilePicture}
                alt={message.name}
                style={styles.profileImage}
              />
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} style={styles.inputContainer}>
        <input
          type="text"
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" style={styles.button}>
          Send
        </button>
        <button
          type="button"
          style={styles.voiceButton}
          onClick={startListening}
        >
          🎙️ Voice Input
        </button>
      </form>
    </div>
  );
};

export default VirtualAssistant;
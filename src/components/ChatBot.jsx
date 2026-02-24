import { useState, useRef, useEffect } from "react";
import { events } from "../data/eventsData";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Welcome to Celista 2K26! Ask me about events, rules, team size, venue or registration."
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateReply = (question) => {
    const q = question.toLowerCase();

    const technicalEvents = events.filter(e => e.type === "technical");
    const nonTechnicalEvents = events.filter(e => e.type === "non-technical");

    // Find event mentioned in question
    const matchedEvent = events.find(event =>
      q.includes(event.name.toLowerCase())
    );

    // ----- COUNT QUESTIONS -----

    if (q.includes("how many events")) {
      return `🎯 Celista 2K26 has ${events.length} total events.`;
    }

    if (q.includes("how many technical")) {
      return `💻 We have ${technicalEvents.length} technical events.`;
    }

    if (q.includes("how many non")) {
      return `🎉 We have ${nonTechnicalEvents.length} non-technical events.`;
    }

    // ----- LIST QUESTIONS -----

    if (q.includes("technical events")) {
      return `💻 Technical Events:\n${technicalEvents
        .map(e => "• " + e.name)
        .join("\n")}`;
    }

    if (q.includes("non technical events") || q.includes("non-technical events")) {
      return `🎉 Non-Technical Events:\n${nonTechnicalEvents
        .map(e => "• " + e.name)
        .join("\n")}`;
    }

    if (q.includes("name any event") || q.includes("name one event")) {
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      return `✨ One exciting event is "${randomEvent.name}".`;
    }

    // ----- EVENT SPECIFIC QUESTIONS -----

    if (matchedEvent) {
      if (q.includes("rule")) {
        return `📜 Rules of ${matchedEvent.name}:\n${matchedEvent.rules}`;
      }

      if (q.includes("team") || q.includes("member")) {
        return `👥 Team Size for ${matchedEvent.name}:\n${matchedEvent.teamSize}`;
      }

      if (q.includes("venue") || q.includes("where")) {
        return `📍 Venue of ${matchedEvent.name}:\n${matchedEvent.venue}`;
      }

      return `✨ ${matchedEvent.name}\n📍 Venue: ${matchedEvent.venue}\n👥 Team Size: ${matchedEvent.teamSize}`;
    }

    // ----- GENERAL QUESTIONS -----

    if (q.includes("when") || q.includes("date")) {
      return "📅 The symposium date is shown on the Home page countdown.";
    }

    if (q.includes("register") || q.includes("registration")) {
      return "📝 Click the 'Register Now' button inside the event page.";
    }

    if (q.includes("contact")) {
      return "📞 Contact details are available on the Contact page.";
    }

    return "🤖 Try asking about event rules, team size, venue, or event count.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botReply = { sender: "bot", text: generateReply(input) };

    setMessages(prev => [...prev, userMessage, botReply]);
    setInput("");
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="pointer-events-auto fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-all"
      >
        💬
      </button>

      {open && (
        <div className="pointer-events-auto fixed bottom-20 right-6 w-80 bg-black/95 text-white rounded-2xl shadow-2xl p-4 border border-red-600">

          {/* Header */}
          <div className="flex justify-between items-center mb-3 border-b border-red-600 pb-2">
            <h3 className="text-sm font-semibold text-red-400">
              Celista Assistant
            </h3>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto mb-3 text-sm space-y-2 pr-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[75%] whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-red-600"
                      : "bg-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex border border-gray-700 rounded-lg overflow-hidden">
            <input
              type="text"
              className="flex-1 p-2 bg-gray-900 text-white placeholder-gray-400 outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-red-600 hover:bg-red-700 px-4"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
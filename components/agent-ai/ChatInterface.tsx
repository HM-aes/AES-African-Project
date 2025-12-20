"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Bot, User, X, Lightbulb } from "lucide-react";
import { Leader, Quote, getRandomQuote, educationalTopics } from "@/data/leaders";
import { ChatInput } from "./ChatInput";
import { TopicCard } from "./TopicCard";
import { QuoteCard } from "./QuoteCard";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  leader?: Leader;
}

interface ChatInterfaceProps {
  selectedLeader: Leader | null;
  onClearLeader: () => void;
}

export function ChatInterface({ selectedLeader, onClearLeader }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [featuredQuote, setFeaturedQuote] = useState<{ quote: Quote; leader: Leader } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Generate random quote only on client to avoid hydration mismatch
  useEffect(() => {
    setFeaturedQuote(getRandomQuote());
  }, []);

  // When a leader is selected, add a context message
  useEffect(() => {
    if (selectedLeader) {
      const contextMessage: Message = {
        id: `context-${Date.now()}`,
        type: "ai",
        content: `I'm now focused on **${selectedLeader.name}** (${selectedLeader.era}), ${selectedLeader.role} of ${selectedLeader.country}. ${selectedLeader.countryFlag}\n\n${selectedLeader.biography.split("\n\n")[0]}\n\nWhat would you like to learn about ${selectedLeader.name}?`,
        timestamp: new Date(),
        leader: selectedLeader,
      };
      setMessages((prev) => [...prev, contextMessage]);
    }
  }, [selectedLeader]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: "user",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response (in production, this would call an API)
    setTimeout(() => {
      const aiResponse = generateEducationalResponse(content, selectedLeader);
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        type: "ai",
        content: aiResponse,
        timestamp: new Date(),
        leader: selectedLeader || undefined,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleTopicClick = (topic: typeof educationalTopics[0]) => {
    handleSendMessage(`Tell me about ${topic.title.toLowerCase()}`);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] pt-16 lg:pt-0">
      {/* Chat Header with Selected Leader */}
      {selectedLeader && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border-b border-amber-200/50 dark:border-stone-700 px-4 py-3"
        >
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500">
                <Image
                  src={selectedLeader.imageUrl}
                  alt={selectedLeader.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-semibold text-stone-800 dark:text-white">
                  {selectedLeader.name} {selectedLeader.countryFlag}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {selectedLeader.role} • {selectedLeader.era}
                </p>
              </div>
            </div>
            <button
              onClick={onClearLeader}
              className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Welcome State */}
          {messages.length === 0 && !selectedLeader && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Hero Section */}
              <div className="text-center space-y-4 py-8">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 via-green-500 to-red-500 p-[3px] mx-auto"
                >
                  <div className="w-full h-full rounded-[13px] bg-white dark:bg-stone-900 flex items-center justify-center">
                    <Bot className="w-10 h-10 text-amber-500" />
                  </div>
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-white">
                  Learn Pan-African History
                </h1>
                <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
                  Explore the stories, ideas, and legacies of Africa&apos;s greatest revolutionary leaders.
                  Select a leader from the sidebar or ask me anything about Pan-African history.
                </p>
              </div>

              {/* Featured Quote */}
              {featuredQuote && (
                <QuoteCard quote={featuredQuote.quote} leader={featuredQuote.leader} />
              )}

              {/* Topic Cards */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  Start Exploring
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {educationalTopics.slice(0, 4).map((topic, index) => (
                    <TopicCard
                      key={topic.id}
                      topic={topic}
                      index={index}
                      onClick={() => handleTopicClick(topic)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Message Bubbles */}
          <AnimatePresence mode="popLayout">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.type === "ai" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-green-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.type === "user"
                      ? "bg-amber-500 text-white rounded-br-md"
                      : "bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <p className={`text-[10px] mt-2 ${
                    message.type === "user" ? "text-amber-100" : "text-stone-400"
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
                {message.type === "user" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center">
                    <User className="w-4 h-4 text-stone-600 dark:text-stone-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex gap-3"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-green-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-amber-500"
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <ChatInput onSend={handleSendMessage} disabled={isTyping} />
    </div>
  );
}

// Helper function to generate educational responses
function generateEducationalResponse(query: string, leader: Leader | null): string {
  const lowerQuery = query.toLowerCase();

  if (leader) {
    // Leader-specific responses
    if (lowerQuery.includes("quote") || lowerQuery.includes("said")) {
      const randomQuote = leader.quotes[Math.floor(Math.random() * leader.quotes.length)];
      return `Here's a powerful quote from ${leader.name}:\n\n"${randomQuote.text}"\n\n${randomQuote.context ? `— ${randomQuote.context}` : ""}`;
    }

    if (lowerQuery.includes("achievement") || lowerQuery.includes("accomplish") || lowerQuery.includes("did")) {
      const achievements = leader.achievements.slice(0, 3);
      return `${leader.name}'s key achievements include:\n\n${achievements.map((a, i) => `${i + 1}. **${a.title}** (${a.year || ""})\n${a.description}`).join("\n\n")}`;
    }

    if (lowerQuery.includes("life") || lowerQuery.includes("biography") || lowerQuery.includes("who")) {
      return leader.biography;
    }

    // Default leader response
    return `${leader.name} was known for ${leader.keyThemes.join(", ").toLowerCase()}.\n\n${leader.biography.split("\n\n")[0]}\n\nWould you like to know about their quotes, achievements, or specific policies?`;
  }

  // General topic responses
  if (lowerQuery.includes("independence") || lowerQuery.includes("freedom")) {
    return `The African independence movements of the 1950s and 1960s were a pivotal moment in history.\n\n**Key leaders include:**\n• Kwame Nkrumah (Ghana, 1957) - First sub-Saharan African country to gain independence\n• Patrice Lumumba (Congo, 1960) - Led the Congo to independence from Belgium\n• Modibo Keïta (Mali, 1960) - Founded the Mali Federation\n\nWould you like to learn more about any of these leaders?`;
  }

  if (lowerQuery.includes("pan-african") || lowerQuery.includes("unity") || lowerQuery.includes("united africa")) {
    return `Pan-Africanism is the idea that people of African descent share common interests and should work together.\n\n**Key concepts:**\n• African Unity - The belief that African nations are stronger together\n• Self-Determination - African solutions to African problems\n• Economic Sovereignty - Control over Africa's resources\n\n**Champions of Pan-Africanism:**\n• Kwame Nkrumah advocated for a "United States of Africa"\n• Modibo Keïta attempted the Mali Federation\n• Thomas Sankara promoted economic self-reliance\n\nSelect a leader from the sidebar to explore their Pan-African vision!`;
  }

  if (lowerQuery.includes("economic") || lowerQuery.includes("sovereignty") || lowerQuery.includes("resource")) {
    return `Economic sovereignty was central to the vision of many Pan-African leaders.\n\n**Thomas Sankara** famously said "He who feeds you, controls you" and achieved food self-sufficiency in Burkina Faso.\n\n**Kwame Nkrumah** warned about neo-colonialism - how colonial powers maintain economic control even after political independence.\n\n**Modibo Keïta** nationalized key industries to ensure Malian control over national resources.\n\nThese ideas directly influenced today's AES alliance.`;
  }

  if (lowerQuery.includes("aes") || lowerQuery.includes("sahel") || lowerQuery.includes("today") || lowerQuery.includes("legacy")) {
    return `The Alliance of Sahel States (AES) carries forward the legacy of Pan-African leaders:\n\n• **Like Sankara**, they prioritize food sovereignty and self-reliance\n• **Like Lumumba**, they resist external interference in African affairs\n• **Like Nkrumah**, they seek regional unity and cooperation\n• **Like Keïta**, they pursue economic independence\n\nThe AES represents a new chapter in the ongoing struggle for African sovereignty.`;
  }

  // Default response
  return `I can help you learn about Pan-African history and its leaders!\n\n**Try asking about:**\n• The life and ideas of Sankara, Lumumba, Nkrumah, or Keïta\n• Pan-African unity and its meaning\n• Economic sovereignty and self-reliance\n• How these leaders inspire the AES today\n\nOr select a leader from the sidebar to focus your exploration!`;
}

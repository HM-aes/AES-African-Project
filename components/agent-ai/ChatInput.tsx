"use client";

import { useState, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-stone-200 dark:border-stone-700 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl px-4 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-end gap-3">
          {/* Input Container */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-green-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-stone-100 dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 focus-within:border-amber-400 dark:focus-within:border-amber-500 transition-colors">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Pan-African history..."
                disabled={disabled}
                rows={1}
                className="w-full bg-transparent px-4 py-3 pr-12 text-sm text-stone-800 dark:text-stone-200 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none resize-none max-h-32 min-h-[44px]"
                style={{ height: "44px" }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "44px";
                  target.style.height = Math.min(target.scrollHeight, 128) + "px";
                }}
              />
              
              {/* AI Indicator */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-stone-400">
                <Sparkles className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Send Button */}
          <motion.button
            onClick={handleSend}
            disabled={!message.trim() || disabled}
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
              message.trim() && !disabled
                ? "bg-gradient-to-br from-amber-500 to-green-500 text-white shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30"
                : "bg-stone-200 dark:bg-stone-700 text-stone-400 dark:text-stone-500 cursor-not-allowed"
            }`}
            whileHover={message.trim() && !disabled ? { scale: 1.05 } : {}}
            whileTap={message.trim() && !disabled ? { scale: 0.95 } : {}}
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Helper Text */}
        <p className="text-[11px] text-stone-400 dark:text-stone-500 mt-2 text-center">
          Press Enter to send • Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}

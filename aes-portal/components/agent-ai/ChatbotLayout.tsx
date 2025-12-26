"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bot } from "lucide-react";
import { LeaderSidebar } from "./LeaderSidebar";
import { ChatInterface } from "./ChatInterface";
import { leaders, Leader } from "@/data/leaders";

export function ChatbotLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200/80 to-zinc-200 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-slate-200/90 dark:bg-stone-900/80 backdrop-blur-xl border-b border-slate-300 dark:border-stone-700">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className="p-2 rounded-xl bg-slate-300 dark:bg-amber-500/10 text-slate-600 dark:text-amber-400"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 dark:from-amber-500 dark:to-green-500 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-slate-700 dark:text-white">Agent AI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pt-16 lg:pt-20">
        {/* Desktop Sidebar */}
        <motion.aside
          initial={{ width: 320 }}
          animate={{ width: isSidebarOpen ? 320 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="hidden lg:block fixed left-0 top-20 bottom-0 z-30 overflow-hidden"
        >
          <div className="w-80 h-full">
            <LeaderSidebar
              leaders={leaders}
              selectedLeader={selectedLeader}
              onSelectLeader={setSelectedLeader}
              onClose={() => setIsSidebarOpen(false)}
            />
          </div>
        </motion.aside>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobileSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsMobileSidebarOpen(false)}
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="lg:hidden fixed left-0 top-28 bottom-0 w-80 z-50"
              >
                <LeaderSidebar
                  leaders={leaders}
                  selectedLeader={selectedLeader}
                  onSelectLeader={(leader) => {
                    setSelectedLeader(leader);
                    setIsMobileSidebarOpen(false);
                  }}
                  onClose={() => setIsMobileSidebarOpen(false)}
                />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Chat Area */}
        <main
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "lg:ml-80" : "lg:ml-0"
          }`}
        >
          {/* Sidebar Toggle - Desktop */}
          {!isSidebarOpen && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setIsSidebarOpen(true)}
              className="hidden lg:flex fixed left-4 top-24 z-30 items-center gap-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-stone-800 border border-slate-300 dark:border-stone-700 shadow-lg text-slate-600 dark:text-stone-300 hover:text-slate-800 dark:hover:text-amber-400 transition-colors"
            >
              <Menu className="w-4 h-4" />
              <span className="text-sm font-medium">Show Leaders</span>
            </motion.button>
          )}

          <ChatInterface 
            selectedLeader={selectedLeader} 
            onClearLeader={() => setSelectedLeader(null)}
          />
        </main>
      </div>
    </div>
  );
}

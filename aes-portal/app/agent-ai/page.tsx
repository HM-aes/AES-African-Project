import { Metadata } from "next";
import { ChatbotLayout } from "@/components/agent-ai";

export const metadata: Metadata = {
  title: "Agent AI | Learn Pan-African History",
  description: "Explore the stories and legacies of Africa's greatest revolutionary leaders through our educational AI chatbot.",
};

export default function AgentAIPage() {
  return <ChatbotLayout />;
}

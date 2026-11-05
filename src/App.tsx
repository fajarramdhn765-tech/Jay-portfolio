import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { LearningJourney } from './components/LearningJourney';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GeminiChatBot } from './components/GeminiChatBot';

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  const handleOpenChat = () => setChatOpen(true);
  const handleCloseChat = () => setChatOpen(false);

  return (
    <div className="min-h-screen bg-[#090909] text-white flex flex-col selection:bg-[#FF5A1F] selection:text-white">
      {/* Top Floating Navigation */}
      <Navbar onOpenChat={handleOpenChat} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero onOpenChat={handleOpenChat} />

        {/* Technology Stack Infinite Marquee */}
        <TechStack />

        {/* About Me / Behind the Code */}
        <About />

        {/* My Learning Journey & Creative Works */}
        <LearningJourney />

        {/* Services / What I Can Do */}
        <Services />

        {/* Technical Skills & Expertise */}
        <Skills />

        {/* Direct Contact & Inquiry Form */}
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Interactive Gemini AI Portfolio Assistant */}
      <GeminiChatBot
        isOpen={chatOpen}
        onOpen={handleOpenChat}
        onClose={handleCloseChat}
      />
    </div>
  );
}

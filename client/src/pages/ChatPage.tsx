
import React from 'react';
import Navbar from '@/components/Navbar';
import ChatInterface from '@/components/ChatInterface';
import Footer from '@/components/Footer';

const ChatPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 pt-16">
        <ChatInterface />
      </div>
    </div>
  );
};

export default ChatPage;

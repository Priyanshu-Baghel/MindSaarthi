import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen px-6 py-12 mt-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">MindSaarthi</span>
        </h1>

        <p className="text-lg leading-relaxed mb-6 text-center">
          At MindSaarthi, we believe that emotional well-being is just as important as physical health. Our mission is to make compassionate support accessible to everyone—anytime, anywhere.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-center">
          MindSaarthi is an <span className="font-semibold">AI-powered mental health companion</span> designed to lend a listening ear when you need it most. Whether you're feeling overwhelmed, anxious, or just need to talk something out, our chatbot offers a safe, non-judgmental space to express yourself.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-center">
          Developed with empathy and supported by cutting-edge language models, MindSaarthi isn't a replacement for therapy—but it’s a supportive step toward emotional clarity and self-care.
        </p>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Why We Exist</h2>
          <ul className="list-disc list-inside text-left max-w-xl mx-auto space-y-2">
            <li>To break the stigma around mental health.</li>
            <li>To provide 24/7 support without barriers.</li>
            <li>To guide users toward wellness resources and professional help when needed.</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg italic text-gray-600">"Your mind deserves a friend too—and MindSaarthi is always here to listen."</p>
        </div>
      </div>
    </div>
  );
};

export default About;

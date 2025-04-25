
import React from 'react';
import { Brain, Heart, Clock, Shield, Sparkles, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Brain className="h-10 w-10 text-mindblue" />,
    title: 'Personalized Support',
    description: 'Receive tailored guidance based on your unique emotional needs and situation.'
  },
  {
    icon: <Heart className="h-10 w-10 text-mindpink" />,
    title: 'Empathetic Companion',
    description: 'Experience conversations with genuine understanding and compassion.'
  },
  {
    icon: <Clock className="h-10 w-10 text-mindblue" />,
    title: '24/7 Availability',
    description: 'Access support whenever you need it, day or night, without waiting.'
  },
  {
    icon: <Shield className="h-10 w-10 text-mindpink" />,
    title: 'Private & Secure',
    description: 'Your conversations remain confidential with enhanced privacy protections.'
  },
  {
    icon: <Sparkles className="h-10 w-10 text-mindblue" />,
    title: 'Wellness Exercises',
    description: 'Discover guided breathing, meditation, and quick workout plans.'
  },
  {
    icon: <MapPin className="h-10 w-10 text-mindpink" />,
    title: 'Local Therapist Connect',
    description: 'Get connected with professional therapists in Indore when needed.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How MindSaarthi Helps</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Our AI companion offers multiple ways to support your mental wellbeing journey
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

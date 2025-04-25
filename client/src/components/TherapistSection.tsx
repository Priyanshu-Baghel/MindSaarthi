
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Users, Calendar, Star } from 'lucide-react';

const TherapistSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-mindblue/5 to-mindpink/5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect with Professional Therapists in <span className="text-gradient">Indore</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              While AI support can be helpful, sometimes you need professional human guidance. 
              MindSaarthi makes it easy to find and connect with qualified therapists in Indore 
              who specialize in various mental health concerns.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-mindblue h-5 w-5" />
                <span>Local therapists in Indore</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-mindpink h-5 w-5" />
                <span>Personalized matching</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-mindblue h-5 w-5" />
                <span>Easy scheduling</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-mindpink h-5 w-5" />
                <span>Verified professionals</span>
              </div>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-mindblue to-mindpink text-white hover:shadow-lg transition-all"
              size="lg"
              asChild
            >
              <Link to="/find-therapist">Find a Therapist</Link>
            </Button>
          </div>
          
          <div className="lg:w-1/2 glass-morphism p-6 rounded-lg">
            <div className="aspect-video bg-gradient-to-r from-mindblue/20 to-mindpink/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍⚕️👩‍⚕️</div>
                <p className="text-lg text-gray-600">Interactive therapist directory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapistSection;

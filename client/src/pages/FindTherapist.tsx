
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Star, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const therapists = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialty: 'Anxiety & Depression',
    location: 'Vijay Nagar, Indore',
    rating: 4.9,
    image: '👩‍⚕️'
  },
  {
    id: 2,
    name: 'Dr. Rahul Verma',
    specialty: 'Stress Management',
    location: 'Palasia, Indore',
    rating: 4.8,
    image: '👨‍⚕️'
  },
  {
    id: 3,
    name: 'Dr. Ananya Patil',
    specialty: 'Cognitive Behavioral Therapy',
    location: 'Saket, Indore',
    rating: 4.7,
    image: '👩‍⚕️'
  },
  {
    id: 4,
    name: 'Dr. Vikram Singh',
    specialty: 'Trauma & PTSD',
    location: 'New Palasia, Indore',
    rating: 4.9,
    image: '👨‍⚕️'
  }
];

const FindTherapist = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find a Therapist in Indore</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with qualified mental health professionals in your area who can provide personalized care and support.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12 glass-morphism p-6 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Search by specialty, name, etc." 
                  className="w-full pl-10" 
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Location in Indore" 
                  className="w-full pl-10" 
                />
              </div>
              <Button className="bg-mindblue text-white">
                Search
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapists.map((therapist) => (
              <Card key={therapist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-mindblue/20 to-mindpink/20 p-6 flex items-center justify-center">
                    <div className="text-5xl">{therapist.image}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{therapist.name}</h3>
                    <p className="text-mindblue font-medium mb-2">{therapist.specialty}</p>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{therapist.location}</span>
                    </div>
                    <div className="flex items-center text-amber-500 mb-4">
                      <Star className="h-4 w-4 mr-1 fill-current" />
                      <span>{therapist.rating}/5</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-mindblue to-mindpink text-white">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTherapist;

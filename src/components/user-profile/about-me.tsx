import React from 'react';
import { Card, CardContent, CardTitle } from '../ui/card';
import { HeartIcon } from 'lucide-react';

const AboutMeSection = () => {
  return (
    <Card className="p-4 lg:w-[70%] w-full bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-4">
        <CardTitle className="uppercase text-xl font-bold">About Me</CardTitle>
        <HeartIcon className="w-6 h-6 text-pink-500 ml-2" />

      </div>
      <CardContent>
        <p className="text-gray-600 text-base leading-relaxed">
          Hello! I&#39;m Sahil Kumar, 27, from Amritsar. I come from a well-mannered, middle-class Brahmin family and have a strong belief in Hindu culture and rituals while maintaining an open-minded outlook. I am a pure vegetarian and have never smoked or consumed alcohol. Affectionate, kind-hearted, and hardworking, I value creativity and enjoy learning new things.
        </p>
      </CardContent>
      
    </Card>
  );
};

export default AboutMeSection;

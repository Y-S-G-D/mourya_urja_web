import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, } from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

// const hobbies = [
//   'Modelling',
//   'Watching movies',
//   'Playing volleyball',
//   'Hangout with family',
//   'Adventure travel',
//   'Books reading',
//   'Music',
//   'Cooking',
//   'Yoga'
// ];

export default function HobbiesCard({hobbies}:{hobbies: string[]}) {
  return (
    <Card className="w-full md:max-w-lg  bg-white shadow-md rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl uppercase font-bold">HOBBIES</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {hobbies.map((hobby, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {hobby}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

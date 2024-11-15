import React from 'react';
import { Card, CardContent, CardTitle } from '../ui/card';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Briefcase } from 'lucide-react';

const EducationAndProfessionCard = () => {
  return (
    <Card className="p-6 w-full bg-white shadow-md rounded-lg">
      <div className="flex flex-col lg:flex-row  ">
        
        {/* Education Section */}
        <div className="flex-1 lg:pr-6 mb-6 lg:mb-0">
          <div className="flex items-center  mb-4">
            <CardTitle className="text-xl uppercase font-bold">Educational Details</CardTitle>
            <GraduationCap size={30} className="text-primary ml-4" />
          </div>
          <CardContent>
            <p className="text-gray-600">
              <span className="font-semibold">Highest Education:</span> Bachelor&apos;s in Technology
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Other Educational Details:</span> Completed from National Institute of Technology, Manipur
            </p>
          </CardContent>
        </div>

        {/* Vertical Separator */}
        <Separator orientation="vertical" 
            className="hidden lg:block   h-44 mx-4 bg-muted w-[2px]"
         />

        {/* Professional Section */}
        <div className="flex-1 lg:pl-6">
          <div className="flex items-center  mb-4">
            <CardTitle className="text-xl uppercase font-bold">Professional Details</CardTitle>
            <Briefcase  size={30} className=" ml-4 text-primary" />
          </div>
          <CardContent>
            <p className="text-gray-600">
              <span className="font-semibold">Job Type:</span> Government
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Designation:</span> Software Development Engineer (SDE)
            </p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default EducationAndProfessionCard;

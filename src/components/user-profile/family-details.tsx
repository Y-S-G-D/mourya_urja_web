import React from 'react';
import { Card, CardContent, CardTitle } from '../ui/card';
import { User, Globe } from 'lucide-react';

const FamilyDetailsCard = () => {
  return (
    <Card className="p-4 sm:p-6 bg-white shadow-md rounded-lg w-full sm:w-[70%]">
      <div className="flex items-center mb-4">
        <CardTitle className="text-xl uppercase font-bold">Family Details</CardTitle>
        <User  size={30} className="text-primary ml-4" />
      </div>
      <CardContent>
        <ul className="text-gray-600 space-y-1 text-sm sm:text-base">
          <li><span className="font-semibold">Father&apos;s Name:</span> Mr. Nitish Sinha</li>
          <li><span className="font-semibold">Mother&apos;s Name:</span> Mrs. Devi Sinha</li>
          <li><span className="font-semibold">Father&apos;s Occupation:</span> Manager</li>
          <li><span className="font-semibold">Mother&apos;s Occupation:</span> Homemaker</li>
          <li><span className="font-semibold">Number of Siblings:</span> 2</li>
          <li><span className="font-semibold">Number of Brothers:</span> 1</li>
          <li><span className="font-semibold">Number of Sisters:</span> 1</li>
        </ul>
      </CardContent>
    </Card>
  );
};

const CulturalReligiousDetailsCard = () => {
  return (
    <Card className="p-4 sm:p-6 bg-white shadow-md rounded-lg w-full sm:w-[70%]">
      <div className="flex items-center mb-4">
        <CardTitle className="text-xl uppercase font-bold">Cultural & Religious Details</CardTitle>
        <Globe size={30} className="text-primary ml-4" />
      </div>
      <CardContent>
        <ul className="text-gray-600 space-y-1 text-sm sm:text-base">
          <li><span className="font-semibold">Caste:</span> Brahmin</li>
          <li><span className="font-semibold">Gotra:</span> Kashyap</li>
          <li><span className="font-semibold">Sub-caste:</span> Gaur Brahmin</li>
          <li><span className="font-semibold">Religion:</span> Hindu</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export { FamilyDetailsCard, CulturalReligiousDetailsCard };
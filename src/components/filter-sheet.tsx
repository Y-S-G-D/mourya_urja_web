import { useState } from 'react';
import { SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from './ui/label';
import { Button } from './ui/button';

type Option = {
  id: string;
  label: string;
};

export default function FilterSheet() {
  const [age, setAge] = useState<number>(25);

  const employmentOptions: Option[] = [
    { id: "govt", label: "Government Sector" },
    { id: "private", label: "Private Sector" },
    { id: "self-employed", label: "Self-Employed / Business" },
    { id: "freelance", label: "Freelance" },
    { id: "student", label: "Student" },
    { id: "not-employed", label: "Not Employed" }
  ];

  const locationOptions: Option[] = [
    { id: "north-india", label: "North India" },
    { id: "south-india", label: "South India" },
    { id: "east-india", label: "East India" },
    { id: "west-india", label: "West India" },
    { id: "central-india", label: "Central India" },
    { id: "north-east-india", label: "North-East India" },
    { id: "overseas", label: "Overseas" }
  ];

  return (
        <SheetContent side="right" className="w-80 p-6 bg-gray-50 overflow-y-auto">
          <SheetTitle className="text-2xl  text-primary font-bold mb-4">Filters</SheetTitle>
          <div className="mb-6">
            <Label>Age</Label>
            <Slider
              value={[age]}
              onValueChange={(value: number[]) => setAge(value[0])}
              min={18}
              max={60}
              step={1}
              className="w-full mt-2"
            />
            <p className="text-center mt-2 text-sm text-gray-500">Selected Age: {age}</p>
          </div>
          
          <div className="mb-6">
            <Label>Employment:</Label>
            <div className="space-y-2 mt-2 mx-2">
              {employmentOptions.map((option: Option) => (
                <div key={option.id} className="flex items-center">
                  <Checkbox id={option.id} className="mr-2" />
                  <label htmlFor={option.id} className="text-xs">{option.label}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label >Location:</Label>
            <div className="space-y-2 mt-2">
              {locationOptions.map((option: Option) => (
                <div key={option.id} className="flex items-center">
                  <Checkbox id={option.id} className="mr-2" />
                  <label htmlFor={option.id} className="text-xs">{option.label}</label>
                </div>
              ))}
            </div>
          </div>
          <div 
            className='flex justify-between mt-2 items-center p-2 bg-slate-100 sticky bottom-0'>
            <Button>Apply</Button>
            <Button variant={'secondary'}>Clear</Button>
          </div>
        </SheetContent>
  );
}

import React from 'react';
import { Card, CardContent, CardTitle } from '../ui/card';
import { User} from 'lucide-react';
import { ISibling } from '@/models/siblings-model';
import SiblingCard from '../add-user/sibling-card';
// import SiblingCard from '../add-user/sibling-card';
// import { Label } from '../ui/label';

const SiblingDetailsCard = ({siblings}:{siblings:ISibling[] | null}) => {
  return (
    <Card className="p-4 sm:p-6 bg-white shadow-md rounded-lg w-full">
      <div className="flex items-center mb-4">
        <CardTitle className="text-xl uppercase font-bold">Siblings Details</CardTitle>
        <User  size={30} className="text-primary ml-4" />
      </div>
      <CardContent>
           {
          siblings && siblings.length > 0 && (
             SiblingCard({siblings:siblings, onDelete: () => {} ,showDeleteIcon:false})
          )
        }
        
      </CardContent>
    </Card>
  );
};


export { SiblingDetailsCard };
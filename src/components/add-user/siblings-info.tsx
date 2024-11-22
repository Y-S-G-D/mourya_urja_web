import { ISibling } from '@/models/siblings-model';
import { Button } from '../ui/button'
import { Dialog,DialogTrigger } from '../ui/dialog'
import AddSiblingFormDialog from './add-siblings-form'
import { useState } from 'react';
import SiblingCard from './sibling-card';


const SiblingsInfo = () => {
  const [siblings, setSiblings] = useState<ISibling[]>([
    {
      name: "John Doe",
      relation: "Brother",
      age: 25,
      ageRelation: "Elder",
      education: "Bachelor's Degree",
      workDetails: "Software Engineer",
    },
    {
      name: "Jane Doe",
      relation: "Sister",
      age: 23,
      ageRelation: "Younger",
      education: "Master's Degree",
      workDetails: "Data Scientist",
    },
    {
      name: "Mark Doe",
      relation: "Brother",
      age: 20,
      ageRelation: "Younger",
      education: "Undergraduate",
      workDetails: "Freelancer",
    },
    {
      name: "Emma Doe",
      relation: "Sister",
      age: 28,
      ageRelation: "Elder",
      education: "Ph.D. in Chemistry",
      workDetails: "Research Scientist",
    },
  ]);

  const handleDelete = (index: number) => {
    setSiblings((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section>
    <div className='flex items-center justify-between my-8'>
        <h2 className='text-base font-semibold'>Siblings Information</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button  variant={'secondary'}>Add Siblings</Button>
          </DialogTrigger>
          <AddSiblingFormDialog />
        </Dialog>
    </div>

    <SiblingCard siblings={siblings} onDelete={handleDelete} />

    </section>
  )
}

export default SiblingsInfo

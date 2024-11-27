import { Button } from '../ui/button'
import { Dialog,DialogTrigger } from '../ui/dialog'
import AddSiblingFormDialog from './add-siblings-form'
import SiblingCard from './sibling-card';
import useUserStore from '@/stores/user-store';


const SiblingsInfo = () => {
  const { siblings ,deleteSibling ,isSiblingDialogOpen , handleSiblingDialog} = useUserStore();
 
 

  return (
    <section>
    <div className='flex items-center justify-between my-8'>
        <h2 className='text-base font-semibold'>Siblings Information</h2>
        <Dialog open={isSiblingDialogOpen} onOpenChange={handleSiblingDialog}>
          <DialogTrigger asChild>
            <Button  
             onClick={() => handleSiblingDialog(true)}
              variant={'secondary'}>Add Siblings</Button>
          </DialogTrigger>
          <AddSiblingFormDialog />
        </Dialog>
    </div>

    <SiblingCard 
      siblings={siblings} 
      onDelete={deleteSibling}
       />

    </section>
  )
}

export default SiblingsInfo

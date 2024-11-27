'use client'
import { Dialog ,DialogTrigger} from '@/components/ui/dialog'
import TableLoader from '../../components/skeleton-loaders/table-loader'
import React from 'react'
import {Button} from '@/components/ui/button'
import SuccessDialog from '@/components/dialogs/success-dialog'

const Loader = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div>
      <TableLoader/>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild >
          <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
        </DialogTrigger>
       <SuccessDialog message="Your data has been saved successfully!" />
    </Dialog>
    </div>
  )
}

export default Loader

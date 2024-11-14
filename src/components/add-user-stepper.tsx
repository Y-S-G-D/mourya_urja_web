import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


// const steps = ['Personal Details', 'Contact Info', 'Educational $ Professional','Cultural & Religious','Family Details',"Spouse Expectations","Partner Expectations","Review & Submit"];
const AddUserStepper = ({activeStep, steps}:{activeStep:number,steps:string[]}) => {
  return (
    <div>
      <Stepper 
        activeStep={activeStep}
        alternativeLabel={true}>
        {steps.map((label, ) => (
          <Step 
            key={label}>
            <StepLabel 
              sx={{
                '& .MuiStepIcon-root': {
                  color: '#0a3b37', // Change the default color
                },
                '& .MuiStepIcon-active': {
                  color: '#0a3b37', // Active step color
                },
                '& .MuiStepIcon-completed': {
                  color: '#4caf50', // Completed step color
                },
              }}
            >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}

export default AddUserStepper

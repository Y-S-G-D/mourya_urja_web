"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import AddUserStepper from "@/components/add-user-stepper";
import { Button } from "@/components/ui/button";
import PersonalInformation from "@/components/add-user/personal-information";
import ContactInfo from "@/components/add-user/contact-info";
import EducationNdProfessionalInfo from "@/components/add-user/education-professional-info";
import CulturalNdReligiousInfo from "@/components/add-user/cultural-religious-info";
import FamilyInfo from "@/components/add-user/family-info";
import SpouseExpectations from "@/components/add-user/spouse-expectations";
import Navbar from "@/components/home-page/navbar";
import CircularLoader  from "@/components/skeleton-loaders/circular-loader"
import useUserStore from "@/stores/user-store";
import FinishSection from "@/components/add-user/finish-section";

const AddUserForm = () => {
  const { saveUser,activeStep,handleBack, handleNext, isProcessing } = useUserStore();

  const steps = ['Personal Details', 'Contact Info', 'Educational & Professional','Cultural & Religious','Family Details',"Spouse Expectations",];

  
  const renderComponent = () => {
    const stepContent = [
      <div key="personalInfo"><PersonalInformation /></div>,
      <div key="contactInfo"><ContactInfo isEditing = {false}/></div>,
      <div key="education&professional"><EducationNdProfessionalInfo/></div>,
      <div key="cultural"><CulturalNdReligiousInfo/></div>,
      <div key="familyInfo"><FamilyInfo/></div>,
      <div key="spouseExpectations"><SpouseExpectations/></div>
    ]
    return <React.Fragment>{stepContent[activeStep]}</React.Fragment>
  }

  return (
    <section>
      <Navbar bgColor={"bg-primary"}/>
    <div className="pt-24 flex flex-1 flex-col gap-4 p-6 px-8">
      <h1 className="text-3xl font-semibold">Add New User</h1>
      <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
        <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem className="hidden md:block">
        <BreadcrumbLink href="/users">Manage Users</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />

        <BreadcrumbItem>
        <BreadcrumbPage>Add New User</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
      </Breadcrumb>
      <Separator />
      <AddUserStepper 
        steps={steps}
        activeStep={activeStep} />
      {activeStep === steps.length ? (
      <React.Fragment>
        <FinishSection/>
        {/* <div>
          
        </div> */}
        {/* <div className="mt-2 mb-1">All steps completed - you&apos;re finished</div>
        <div className="flex flex-row pt-2">
        <div className="flex-1" />
        <Button className="btn" onClick={handleReset}>Reset</Button>
        </div> */}
      </React.Fragment>
      ) : (
      <React.Fragment>
        <div className="mt-2 mb-1">{
        renderComponent()
        }</div>
        <div className="flex flex-row  justify-between pt-2">
        <Button
          variant={'secondary'}
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        {activeStep===steps.length-1?
        <Button onClick={()=>{
          saveUser()
          handleNext()
        }}>{isProcessing?<>
          <CircularLoader/>
            <span>Processing...</span>
          </>:"Finish"}</Button>:
        <Button onClick={()=>{
          handleNext()
        }}>Next</Button>}
        
        {/* <Button
          onClick={activeStep ===steps.length-1 ? () =>{
            saveUser()
            handleNext()
            
          } : handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button> */}
        </div>
      </React.Fragment>
      )}
    </div>
    </section>
  );
};

export default AddUserForm;

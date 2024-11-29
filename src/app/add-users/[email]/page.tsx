"use client";
import React, { useState,useEffect, useCallback } from "react";
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
import useUserStore from "@/stores/user-store";
import { useFetchUserStore } from "@/stores/user-store";

interface PageParams{
    email: string
}

const AddUserForm = ({params}:{params:Promise<PageParams>}) => {
  const { saveUser } = useUserStore();

  const steps = ['Personal Details', 'Contact Info', 'Educational & Professional','Cultural & Religious','Family Details',"Spouse Expectations",];

  const [activeStep , setActiveStep] = useState(0)
  const { getSingleUserByEmail,user } = useFetchUserStore();
  const {assignUserData} = useUserStore()

  

  const fetchUser = useCallback(async () => {
    const { email } = await params;
    if(!email) return;
    const fetchedUser = await getSingleUserByEmail(email);
    assignUserData(fetchedUser);

    
    
  }, [params, getSingleUserByEmail,assignUserData,]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser])
  

  const handleReset = (): void => {
    setActiveStep(0)
  }

  const handleBack = (): void=>{
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
 
  const renderComponent = () => {
    const stepContent = [
      <div key="personalInfo">{user && <PersonalInformation />}</div>,
      <div key="contactInfo"><ContactInfo isEditing={true}/></div>,
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
        <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem className="hidden md:block">
        <BreadcrumbLink href="#">Manage Users</BreadcrumbLink>
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
        <div className="mt-2 mb-1">All steps completed - you&apos;re finished</div>
        <div className="flex flex-row pt-2">
        <div className="flex-1" />
        <Button className="btn" onClick={handleReset}>Reset</Button>
        </div>
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
        
        <Button 
          onClick={ activeStep ===steps.length-1 ? () =>{
            saveUser()
            window.location.reload()
            
          } : handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
        </div>
      </React.Fragment>
      )}
    </div>
    </section>
  );
};

export default AddUserForm;

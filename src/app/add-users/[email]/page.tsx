"use client";
import React, { useEffect, useCallback } from "react";
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
import CircularLoader from "@/components/skeleton-loaders/circular-loader";
import useUserStore from "@/stores/user-store";
import { useFetchUserStore } from "@/stores/user-store";
import ProfileSkeletonLoader from "@/components/skeleton-loaders/profile-form-loader";
import FinishSection from "@/components/add-user/finish-section";

interface PageParams {
  email: string;
}

const AddUserForm = ({ params }: { params: Promise<PageParams> }) => {
  const { saveUser ,isProcessing } = useUserStore();

  const steps = [
    "Personal Details",
    "Contact Info",
    "Educational & Professional",
    "Cultural & Religious",
    "Family Details",
    "Spouse Expectations",
  ];

  // const [activeStep , setActiveStep] = useState(0)

  const { getSingleUserByEmail, user,isLoading } = useFetchUserStore();
  
  const { assignUserData, activeStep, handleBack, handleNext } =
    useUserStore();

  const fetchUser = useCallback(async () => {
    const { email } = await params;
    if (!email) return;
    const fetchedUser = await getSingleUserByEmail(email);
    assignUserData(fetchedUser);
  }, [params, getSingleUserByEmail, assignUserData]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  // const handleReset = (): void => {
  //   setActiveStep(0)
  // }

  // const handleBack = (): void=>{
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1)
  // }

  // const handleNext = (): void => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1)
  // }

  const renderComponent = () => {
    const stepContent = [
      <div key="personalInfo">
        {user && <PersonalInformation  />}
      </div>,
      <div key="contactInfo">
        <ContactInfo isEditing={true} />
      </div>,
      <div key="education&professional">
        <EducationNdProfessionalInfo isEditing={true}/>
      </div>,
      <div key="cultural">
        <CulturalNdReligiousInfo isEditing={true} />
      </div>,
      <div key="familyInfo">
        <FamilyInfo isEditing={true}/>
      </div>,
      <div key="spouseExpectations">
        <SpouseExpectations isEditing={true}/>
      </div>,
    ];
    return <React.Fragment>{stepContent[activeStep]}</React.Fragment>;
  };

  return (
    <section>
      <Navbar bgColor={"bg-primary"} />
      <div className="pt-24 flex flex-1 flex-col gap-4 p-6 px-8">
        <h1 className="text-3xl font-semibold">Add New User</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem >
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator  />
            <BreadcrumbItem >
              <BreadcrumbLink href="/users">Manage Users</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator  />

            <BreadcrumbItem>
              <BreadcrumbPage>Add New User</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Separator />
        <AddUserStepper steps={steps} activeStep={activeStep} />
        {activeStep === steps.length ? (
          <React.Fragment>
            <FinishSection />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="mt-2 mb-1">{isLoading ? <ProfileSkeletonLoader /> : renderComponent()}</div>
            <div className="flex flex-row  justify-between pt-2">
              <Button
                variant={"secondary"}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>

              {activeStep === steps.length - 1 ? (
                <Button
                  onClick={() => {
                    saveUser();
                    handleNext();
                  }}
                >
                  {isProcessing ? (
                    <>
                      <CircularLoader />
                      <span>Processing...</span>
                    </>
                  ) : (
                    "Finish"
                  )}
                </Button>
              ) : (
                
                <Button
                  onClick={() => {
                    handleNext();
                  }}
                >
                  Next
                </Button>
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    </section>
  );
};

export default AddUserForm;

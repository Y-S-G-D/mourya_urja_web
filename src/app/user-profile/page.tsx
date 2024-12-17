import Navbar from '@/components/home-page/navbar'
import { CardContent} from '@/components/ui/card'
import React from 'react'
// import BasicInfoSection from '@/components/user-profile/basic-info-section'
// import AboutMeSection from '@/components/user-profile/about-me'
// import HobbiesCard from '@/components/user-profile/hobbies'
// import EducationAndProfessionCard from '@/components/user-profile/education-profession-info'
// import { FamilyDetailsCard,CulturalReligiousDetailsCard } from '@/components/user-profile/family-details'
// import ContactInfoCard from '@/components/user-profile/contact-info-card'
import Footer from '@/components/Footer'


const ViewUserProfile = () => {
  return (
    <main>
        <Navbar bgColor={'bg-primary'}/>
        <section className='bg-accent max-w-7xl w-full mx-auto pt-24 md:px-8 px-4 flex flex-col justify-center items-center'>
          {/* <BasicInfoSection/>
          <div className='w-full my-4 flex lg:flex-row flex-col gap-4 '>
            <AboutMeSection/>
            <HobbiesCard/>
          </div>
          <EducationAndProfessionCard/>
          <div className='w-full my-4 flex lg:flex-row flex-col gap-4'>
            <FamilyDetailsCard/>
            <CulturalReligiousDetailsCard/>
          </div>
          <ContactInfoCard/>
         */}
        
        <CardContent className="my-4 mb-8 bg-secondary p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">EXPECTATION</h2>
          <p className="text-gray-600">I am looking for a life partner who believes in family values and enjoys togetherness. She
            should be well-educated, understanding, and caring. I am looking for someone who can be a true friend for life.</p>
        </CardContent>
      </section>
      <Footer/>
    </main>
  )
}

export default ViewUserProfile

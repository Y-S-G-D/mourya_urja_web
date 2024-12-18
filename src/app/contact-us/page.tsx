import ContactForm from '@/components/contact-us-form';
import Footer from '@/components/Footer';
import Navbar from '@/components/home-page/navbar'
import React from 'react'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'

const ContactInfo = ({ icon: Icon, title, lines }: { icon: React.ElementType; title: string; lines: string[] }) => (
    <div className={`flex items-center bg-white rounded-lg shadow-md w-full py-4 px-6 transition-all duration-300 hover:shadow-lg `}>
      <div className="bg-primary text-white p-4 rounded-lg mr-4">
        <Icon className="text-5xl" />
      </div>
      <div>
        <h3 className={`text-xl font-bold text-darkcolor `}>{title}</h3>
        {lines.map((line, index) => (
          <p key={index} className="text-gray-500 text-xs w-full text-wrap  ">{line}</p>
        ))}
      </div>
    </div>
  )
  

const ContactUsPage = () => {
  return (
    <main className='bg-accent'>
        <Navbar bgColor={'bg-primary'}/>
        <section className="max-w-7xl pt-24  flex flex-col justify-center items-center mx-auto px-6 md:px-8 lg:px-12 ">
            <h1 className='text-5xl font-bold  text-primary mb-8'>Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContactInfo 
            icon={MdLocationOn}
            title="Our Office Address"
            lines={["URJA MAURYA PARIWAR SEVA SANSTHAN", "Aarya Bihar Colony","Bochachak, Ward No-03","Phulwarisharif,Patna, Bihar - 801505"]}
          />
          <ContactInfo 
            icon={MdPhone}
            title="Call Us Anytime"
            lines={["(+91) - NA", "+91- NA"]}
          />
          <ContactInfo 
            icon={MdEmail}
            title="Send An Email"
            lines={["mauryaurjamatrimony@gmail.com",]}
          />
        </div>
        <ContactForm/>
        {/* New responsive map section */}
        <div className="aspect-w-16 aspect-video  w-full lg:px-12 py-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.3364600372474!2d85.1274617738969!3d25.560470577478878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a7ea20bff179%3A0x17b6017762db1a11!2sDariyapur%20Rd%2C%20Bihar%20804453!5e0!3m2!1sen!2sin!4v1728467892082!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </section>
      <Footer/>
    </main>
  )
}

export default ContactUsPage

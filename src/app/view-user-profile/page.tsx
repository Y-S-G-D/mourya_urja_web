import Navbar from '@/components/home-page/navbar'
import { Card , CardContent} from '@/components/ui/card'
import { Avatar } from '@mui/material'
import { Heart, Badge, Home, Circle, Briefcase, User, Book, Globe, Phone, MapPin } from 'lucide-react'
import React from 'react'
import Image from 'next/image'


const ViewUserProfile = () => {
  return (
    <main>
        <Navbar bgColor={'bg-primary'}/>
        <section className='bg-accent max-w-7xl w-full mx-auto pt-24 md:px-8 px-4 flex flex-col justify-center items-center'>
        <Card className="bg-rose-50 p-6 rounded-lg shadow-lg">
        <div className="flex items-center space-x-4">
          {/* Profile Image */}
          <Avatar className="w-32 h-32 rounded-full border-4 border-white">
            <Image
              src="/profile-pic.jpg" // Replace with your profile picture path
              alt="Profile Picture"
              width={128}
              height={128}
              className="rounded-full"
            />
            <Heart className="absolute top-2 right-2 text-red-500" />
          </Avatar>
          
          {/* Basic Info */}
          <div>
            <h1 className="text-2xl font-bold">Sahil Kumar 27 <Badge className="ml-2 text-green-500">Verified</Badge></h1>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li className="flex items-center"><Home className="mr-2" /> Lives in Amritsar</li>
              <li className="flex items-center"><Circle className="mr-2" /> 5'9", Fair</li>
              <li className="flex items-center"><Briefcase className="mr-2" /> Engineer</li>
              <li className="flex items-center"><User className="mr-2" /> Hinduism</li>
              <li className="flex items-center"><User className="mr-2" /> Unmarried</li>
            </ul>
          </div>
        </div>
        
        {/* About Me Section */}
        <CardContent className="mt-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">ABOUT ME</h2>
          <p className="text-gray-600">Hello! I&#39;m Sahil Kumar, 27, from Amritsar. I come from a well-mannered, middle-class Brahmin family and have a strong belief in Hindu culture and rituals while maintaining an open-minded outlook. I am a pure vegetarian and have never smoked or consumed alcohol. Affectionate, kind-hearted, and hardworking, I value creativity and enjoy learning new things. My hobbies include reading, dancing, watching documentaries, and exploring new interests. I&#39;m looking for a partner who shares similar values and is ready to build a joyful, supportive life together.</p>
        </CardContent>
        
        {/* Hobbies Section */}
        <CardContent className="mt-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Hobbies <Book className="inline ml-2" /></h2>
          <p className="text-gray-600">Drawing, dancing, reading, painting, playing cricket, playing football, and spending time with friends (especially books).</p>
        </CardContent>
        
        {/* Educational Details */}
        <CardContent className="mt-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Educational details <Circle className="inline ml-2" /></h2>
          <p className="text-gray-600"><strong>Highest Education:</strong> Bachelor&#39;s in Technology</p>
          <p className="text-gray-600">Other Educational Details: Completed from National Institute of Technology, Manipur</p>
        </CardContent>
        
        {/* Professional Details */}
        <CardContent className="mt-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Professional details <Briefcase className="inline ml-2" /></h2>
          <p className="text-gray-600"><strong>Job Type:</strong> Government</p>
          <p className="text-gray-600">Designation: Software Development Engineer (SDE)</p>
        </CardContent>
        
        {/* Family Details */}
        <CardContent className="mt-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Family Details <User className="inline ml-2" /></h2>
          <ul className="text-gray-600 list-disc pl-5">
            <li>Father&#39;s Name: Champaklal Gada</li>
            <li>Mother&#39;s Name: Daya Gada</li>
            <li>Father&#39;s Occupation: Manager</li>
            <li>Mother&#39;s Occupation: Homemaker</li>
            <li>Number of Siblings: 2</li>
            <li>Number of Brothers: 1</li>
            <li>Number of Sisters: 1</li>
          </ul>
        </CardContent>
                {/* Religious Details */}
                <CardContent className="mt-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Religious Details <Globe className="inline ml-2" /></h2>
          <p className="text-gray-600"><strong>Caste:</strong> Brahmin</p>
          <p className="text-gray-600"><strong>Gotra:</strong> Kashyap</p>
          <p className="text-gray-600"><strong>Sub-caste:</strong> Gaur Brahmin</p>
          <p className="text-gray-600"><strong>Religion:</strong> Hindu</p>
        </CardContent>
        {/* Contact Details */}
        <CardContent className="mt-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Contact details <Phone className="inline ml-2" /></h2>
          <p className="text-gray-600"><strong>Mobile Number:</strong> +91 7000058552</p>
          <p className="text-gray-600"><strong>Email:</strong> joy.thesloth@gmail.com</p>
        </CardContent>
        {/* Address Details */}
        <CardContent className="mt-4 bg-white p-4 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Residential Address <MapPin className="inline ml-2" /></h2>
              <ul className="text-gray-600 list-disc pl-5">
                <li><strong>123, Harmony Lane</strong></li>
                <li>City: Imphal</li>
                <li>State: Manipur</li>
                <li>District: Imphal East</li>
                <li>Pincode: 795001</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Permanent Address <MapPin className="inline ml-2" /></h2>
              <ul className="text-gray-600 list-disc pl-5">
                <li><strong>123, Harmony Lane</strong></li>
                <li>City: Imphal</li>
                <li>State: Manipur</li>
                <li>District: Imphal East</li>
                <li>Pincode: 795001</li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardContent className="mt-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">EXPECTATION</h2>
          <p className="text-gray-600">I am looking for a life partner who believes in family values and enjoys togetherness. She
            should be well-educated, understanding, and caring. I am looking for someone who can be a true friend for life.</p>
        </CardContent>
      </Card>

      </section>
    </main>
  )
}

export default ViewUserProfile

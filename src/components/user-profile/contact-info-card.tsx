import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Phone, MapPin } from 'lucide-react'
import React from 'react'

const ContactInfoCard = () => {
  return (
    <Card className="p-6 w-full bg-white shadow-md rounded-lg">
      <div className="flex flex-col lg:flex-row  ">
        
        {/* Contact Details Section */}
        <div className="flex-1 lg:pr-6 mb-6 lg:mb-0">
          <div className="flex items-center  mb-4">
            <CardTitle className="text-xl uppercase font-bold">Contact details</CardTitle>
            <Phone size={30} className="text-primary ml-4" />
          </div>
          <CardContent>
            <p className="text-gray-600">
              <span className="font-semibold">Mobile Number::</span> +91 7000058552
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Email:</span> joy.thesloth@gmail.com
            </p>
          </CardContent>
        </div>

        {/* Vertical Separator */}
        <Separator orientation="vertical" 
            className="hidden lg:block   h-44 mx-4 bg-muted w-[2px]"
         />

        {/* Residential Address Section */}
        <div className="flex-1 lg:pl-6">
          <div className="flex items-center  mb-4">
            <CardTitle className="text-xl uppercase font-bold">Residential Address</CardTitle>
            <MapPin  size={30} className=" ml-4 text-primary" />
          </div>
          <CardContent>
          <ul className="text-gray-600 list-disc pl-5">
                <li><strong>123, Harmony Lane</strong></li>
                <li>City: Imphal</li>
                <li>State: Manipur</li>
                <li>District: Imphal East</li>
                <li>Pincode: 795001</li>
              </ul>
          </CardContent>
        </div>
        {/* Vertical Separator */}
        <Separator orientation="vertical" 
            className="hidden lg:block   h-44 mx-4 bg-muted w-[2px]"
         />

        {/* Permanent Address Section */}
        <div className="flex-1 lg:pl-6">
          <div className="flex items-center  mb-4">
            <CardTitle className="text-xl uppercase font-bold">Permanent Address</CardTitle>
            <MapPin  size={30} className=" ml-4 text-primary" />
          </div>
          <CardContent>
          <ul className="text-gray-600 list-disc pl-5">
                <li><strong>123, Harmony Lane</strong></li>
                <li>City: Imphal</li>
                <li>State: Manipur</li>
                <li>District: Imphal East</li>
                <li>Pincode: 795001</li>
              </ul>
          </CardContent>
        </div>

      </div>
    </Card>  
   )
}

export default ContactInfoCard

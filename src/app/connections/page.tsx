import Navbar from "@/components/home-page/navbar";
import React from "react";
import {
   Eye,
  MessageSquarePlus,
} from "lucide-react";
import { FaHeart } from "react-icons/fa6"; // Filled Heart icon
import { FaRegHeart } from "react-icons/fa"; // Outline Hea
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import CommentsSection from "@/components/comments-sheet";
import UserBasicInfo from "@/components/user-basic-info";
import { connectionData } from "@/utils/connection-data";



const ConnectionsPage = () => {
  return (
    <main>
      <Navbar bgColor={"bg-primary"} />
      <section className="bg-accent max-w-7xl w-full mx-auto pt-24 md:px-8 px-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Your Connections
        </h1>
        <div className="w-full grid auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6 px-6 lg:px-12">
          {connectionData.map((connection, index) => (
            <div
              key={index}
              className="p-4 bg-white border border-secondary rounded-2xl shadow-lg  group hover:bg-primary hover:text-accent transition duration-500"
            >
              <UserBasicInfo data={connection}/>
              <div className="flex items-center gap-4 justify-center">
                <div className="p-2 cursor-pointer bg-accent rounded-full border border-border">
                  <FaHeart className="text-red-500" />
                </div>
                <div className="p-2 cursor-pointer bg-accent rounded-full border border-border">
                  <Eye className="text-primary" size={18} />
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <div className="p-2  cursor-pointer bg-accent rounded-full border border-border">
                      <MessageSquarePlus className="text-primary" size={18} />
                    </div>
                  </SheetTrigger>

                  <CommentsSection />
                </Sheet>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ConnectionsPage;

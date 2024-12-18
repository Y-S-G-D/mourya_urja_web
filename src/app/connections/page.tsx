'use client'
import Navbar from "@/components/home-page/navbar";
import React, { useCallback, useEffect } from "react";
import {
   Eye,
  MessageSquarePlus,
} from "lucide-react";
import { MdDelete } from "react-icons/md"; // Filled Heart icon
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import CommentsSection from "@/components/comments-sheet";
import UserBasicInfo from "@/components/user-basic-info";
// import { connectionData } from "@/utils/connection-data";

import { useConnectionStore } from "@/stores/connection-store";
import { useRouter } from "next/navigation";
import { useCommentStore } from "@/stores/comments-store";
import Footer from "@/components/Footer";
import UserNotFound from "@/components/skeleton-loaders/user-not-found";

const ConnectionsPage = () => {
  const router = useRouter()

  const { connections, getConnections } = useConnectionStore();
  const { getComments} = useCommentStore();


  const fetchConnections = useCallback( async () => {
      getConnections();
   }, [getConnections]);
  
   useEffect(() => {
     fetchConnections();
   }, [fetchConnections]);
  
  
  return (
    <main>
      <Navbar bgColor={"bg-primary"} />
      <section className="bg-accent max-w-7xl w-full mx-auto pt-24 md:px-8 px-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Your Connections
        </h1>
        {connections.length > 0 ? <div className="w-full grid auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6 px-6 lg:px-12">
          {connections.map((connection, index) => (
              console.log("connection  ID", connection),
            <div
              key={index}
              className="p-4 bg-white border border-secondary rounded-2xl shadow-lg  group hover:bg-primary hover:text-accent transition duration-500"
             > 
              <UserBasicInfo  data={connection.user}/>
              <div className="flex items-center gap-4 justify-center">
                <div 
                  onClick={() => {
                    // deleteConnection(connection.user._id ?? "")
                  }}
                  className="p-2 cursor-pointer bg-accent rounded-full border border-border">
                  <MdDelete className="text-red-500" />
                </div>
                <div 
                  onClick={() => {
                     router.push(`/user-profile/${connection.user._id}`)
                  }}
                  className="p-2 cursor-pointer bg-accent rounded-full border border-border">
                  <Eye className="text-primary" size={18} />
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <div 
                      onClick={() => {
                          getComments(connection.user._id ?? "")
                      }}
                      className="p-2  cursor-pointer bg-accent rounded-full border border-border">
                      <MessageSquarePlus className="text-primary" size={18} />
                    </div>
                  </SheetTrigger>

                  <CommentsSection 
                    userId={connection.user._id ?? ""} 
                    connectionName={`${connection.user.personalInfo.firstName} ${connection.user.personalInfo.lastName}`}
                    connectionId={connection.user._id ?? ""} />
                </Sheet>
              </div>
            </div>
          ))}
        </div>:<UserNotFound title="Connections Not Found :(" desc="Make your connections from exploring profiles."/>}
      </section>
      <Footer/>
    </main>
  );
};

export default ConnectionsPage;

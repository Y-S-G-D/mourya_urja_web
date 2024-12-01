'use client';
import Navbar from "@/components/home-page/navbar";
import SearchForm from "@/components/search-form";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import UserBasicInfo from "@/components/user-basic-info";
// import { connectionData } from "@/utils/connection-data";
import { Button } from "@/components/ui/button";
import React, { useCallback, useEffect } from "react";
import { FaHeart , FaRegHeart } from "react-icons/fa";
import { Sheet ,SheetTrigger,} from "@/components/ui/sheet";
import FilterSheet from "@/components/filter-sheet";
import { PaginationButton } from "@/components/pagination";
import Footer from "@/components/Footer";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useBrowseProfilesStore } from "@/stores/browse-profiles-store";
import { IUser } from "@/models/user-model";

const BrowseProfilePage = () => {
  const router = useRouter();
  const { getBrowseProfiles , browseProfiles} = useBrowseProfilesStore();

  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  }

  const fetchBrowseProfiles = useCallback( async () => {
     await getBrowseProfiles();
  },[getBrowseProfiles])

     
  useEffect(() => {
     fetchBrowseProfiles();
  },[fetchBrowseProfiles])

  return (
    <main>
      <Navbar bgColor={"bg-primary"} />
      <section className="bg-accent max-w-7xl w-full mx-auto pt-24 md:px-8 px-4 flex flex-col">
        <div className="px-6 lg:px-12 flex md:flex-row flex-col  items-center justify-between ">
          <Breadcrumb className="md:mb-0 mb-2">
            <BreadcrumbList>
              <BreadcrumbItem className="">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Browse Profiles</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex justify-between">
            <SearchForm />
            <Sheet>
              
             <SheetTrigger asChild >
             <Button className="ml-4" variant={"secondary"}>
              Filter
            </Button>
            </SheetTrigger>

            <FilterSheet></FilterSheet>
            </Sheet>
          </div>
        </div>

        <div className="w-full grid auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6 px-6 lg:px-12">
          {browseProfiles.map((profile : IUser, index) => (
            <div
              key={index}
              className="relative p-4 bg-white border border-secondary rounded-2xl shadow-lg  group hover:bg-primary hover:text-accent transition duration-500"
            >
              <UserBasicInfo data={profile} />
                <div 
                  onClick={handleLike}
                  className="absolute  top-6 right-6 p-2 cursor-pointer bg-accent rounded-full border border-border hover:bg-secondary">
                  {isLiked?<FaHeart className="text-red-500" />:<FaRegHeart  className="text-primary hover:text-secondary-foreground" />}
                </div>
                <div 
                  onClick={()=> {
                    router.push(`/user-profile/${profile._id}`)
                  }}
                  className="absolute  top-16 right-6 p-2 cursor-pointer bg-accent rounded-full border border-border hover:bg-sidebar-primary">
                  <Eye className="text-primary hover:text-primary-foreground" size={18} />

                </div>
                
            </div>
          ))}
        </div>
        <PaginationButton/>
      </section>
      <Footer/>
    </main>
  );
};

export default BrowseProfilePage;

import Navbar from "@/components/home-page/navbar";
import { SearchForm } from "@/components/search-form";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import UserBasicInfo from "@/components/user-basic-info";
import { connectionData } from "@/utils/connection-data";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaHeart } from "react-icons/fa";

const BrowseProfilePage = () => {
  return (
    <main>
      <Navbar bgColor={"bg-primary"} />
      <section className="bg-accent max-w-7xl w-full mx-auto pt-24 md:px-8 px-4 flex flex-col">
        <div className="px-6 lg:px-12 flex items-center justify-between ">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Browse Profiles</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex justify-between">
            <SearchForm />
            <Button className="ml-4" variant={"secondary"}>
              Filter
            </Button>
          </div>
        </div>

        <div className="w-full grid auto-rows-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6 px-6 lg:px-12">
          {connectionData.map((connection, index) => (
            <div
              key={index}
              className="relative p-4 bg-white border border-secondary rounded-2xl shadow-lg  group hover:bg-primary hover:text-accent transition duration-500"
            >
              <UserBasicInfo data={connection} />
                <div className="absolute  top-5 rigtp-2 cursor-pointer bg-accent rounded-full border border-border">
                  <FaHeart className="text-red-500" />
                 </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BrowseProfilePage;

import Image from "next/image";
import { Card, CardContent, } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Person from "@/app/assets/person.jpeg";
import { Home, Ruler, Briefcase, Sun, CheckCircle } from "lucide-react";
import { LikeType } from "@/utils/enums/likeType-enum";
import { FaHeart } from "react-icons/fa6";

export default function ProfileCard({ likeType }: { likeType: LikeType }) {
  return (
    <Card className="relative group transition-all duration-500 hover:scale-105 mx-auto rounded-xl p-2 shadow-sm overflow-hidden border border-secondary bg-background text-foreground">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="relative flex flex-col justify-start gap-4 ">
        <div className="flex gap-4 ">
        <div className="relative w-24 -left-4 h-28 rounded-lg overflow-hidden">
          <Image
            src={Person.src} 
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold">Sahil Kumar</h2>
            <CheckCircle
              className="ml-2 rounded-full bg-blue-700 text-white"
              size={14}
            />
            <span className="text-lg font-bold">27</span>
          </div>
          <ul className="space-y-1 mt-2 text-sm text-gray-600">
            <li className="flex items-center">
              <Home size={14} className="mr-2" /> Lives in Amritsar
            </li>
            <li className="flex items-center">
              <Ruler size={14} className="mr-2" /> 5.9&quot;, Fair
            </li>
            <li className="flex items-center">
              <Briefcase size={14} className="mr-2" /> Engineer
            </li>
            <li className="flex items-center">
              <Sun size={14} className="mr-2" /> Hinduism
            </li>
          </ul>
        </div>
        </div>
        {likeType === LikeType.WhoLikedYou ? (
          <div className="mt-4 flex justify-around">
            <Button className="w-24 bg-sidebar-primary">Accept</Button>
            <Button variant={"destructive"}>
              Remove
            </Button>
          </div>
        ) : (
          <div >
            <div 
              className="absolute bottom-4  right-2 px-2 py-1">
              <FaHeart className="text-red-500 text-2xl" />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

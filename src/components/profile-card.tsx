import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Person from "@/app/assets/person.jpeg";
import { Home, Ruler, Briefcase, Sun, CheckCircle } from "lucide-react";
import { LikeType } from "@/utils/enums/likeType-enum";
import { FaHeart } from "react-icons/fa6";

export default function ProfileCard({ likeType }: { likeType: LikeType }) {
  return (
    <Card className="mx-auto rounded-xl p-2 shadow-lg overflow-hidden bg-primary text-accent">
      <CardContent className="flex justify-start gap-4">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden">
          <Image
            src={Person.src} // Replace with the correct path or URL for the image
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
          <ul className="space-y-1 mt-2 text-sm">
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
      </CardContent>

      {likeType === LikeType.WhoLikedYou ? (
        <CardFooter className="mt-4 flex justify-around">
          <Button className="w-24 bg-sidebar-primary">Accept</Button>
          <Button variant={"outline"} className="w-24 bg-red-400">
            Remove
          </Button>
        </CardFooter>
      ) : (
        <CardFooter>
          <Button variant={"outline"} className="rounded-full px-2 py-1">
            <FaHeart className="text-red-500" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

import React  from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { Label } from "../ui/label";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import useUserStore from "@/stores/user-store";
import { useFetchUserStore } from "@/stores/user-store";

interface ImageViewParams {
  profileImages: string[]
}

const ImageView = ({params}:{params:ImageViewParams | null}) => {
  const { profileImageFiles, addProfileImageFiles ,removeProfileImageFile,removeProfileImageFromPersonalInfo} = useUserStore();
  const {deleteImage} = useFetchUserStore();


  const handleDeleteImage = (index:number, image:File | string) => {
    if(image instanceof File){
      removeProfileImageFile(index);
      
      return;
    }
    removeProfileImageFromPersonalInfo(image);
    deleteImage(image);
   

  }
  // const [selectedImages, setSelectedImages] = useState<File[]>([]);

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     const filesArray = Array.from(e.target.files);
      
  //     setSelectedImages((prevImages) => [...prevImages, ...filesArray]);
  //   }
  // };

  // const handleDeleteImage = (index: number) => {
  //   setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  // };





    return (
    <div className="my-4">
      <Label>Upload Images (up to 5)</Label>
      <div className="flex items-center space-x-4 my-4">
        {[...profileImageFiles, ...(params?.profileImages || [])].map((image, index) => (
          <div
            key={index}
            className="relative w-24 h-24 rounded-lg border border-gray-300 overflow-hidden"
          >
            <Image
              src={image instanceof File ? URL.createObjectURL(image) : image}
              alt={`Preview ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
            <Button
              onClick={() => {
                
                handleDeleteImage(index, image);
              }}
              variant={"destructive"}
              className=" p-1 h-5 text-xs absolute top-0 right-0"
            >
              <FaTimes size={10} />
            </Button>
          </div>
        ))}

        <label
          htmlFor="image-upload"
          className="flex items-center justify-center w-20 h-20 rounded-lg border border-dashed border-gray-400 bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
        >
          <Plus size={24} className="text-gray-500" />
          <input
            id="image-upload"
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                try{
                  addProfileImageFiles(Array.from(e.target.files));
                }catch(e){
                  console.log(e);
                  //TODO: Show Toast UI when error happens
                }
                
              }
            }}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default ImageView;

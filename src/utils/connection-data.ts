import Women from "@/app/assets/women.jpeg"
import Person from "@/app/assets/person.jpeg"

export interface Connection {
    userName: string;
    image: string;
    location: string;
    age: string;
    employment: string;
  }
  
  export const connectionData: Connection[] = [
    {
      userName: "Shradhha Roy",
      image: `${Women.src}`,
      location: "New York, USA",
      age: "29",
      employment: "Software Engineer",
    },
    {
      userName: "Amit Sharma",
      image: `${Person.src}`,
      location: "San Francisco, USA",
      age: "32",
      employment: "Product Manager",
    },
    {
      userName: "Priya Singh",
      image: `${Women.src}`,
      location: "London, UK",
      age: "27",
      employment: "Data Scientist",
    },
    {
      userName: "John Doe",
      image: `${Person.src}`,
      location: "Sydney, Australia",
      age: "35",
      employment: "UX Designer",
    },
    {
      userName: "Jane Smith",
      image: `${Person.src}`,
      location: "Toronto, Canada",
      age: "30",
      employment: "Marketing Specialist",
    },
    {
      userName: "Carlos Mendez",
      image: `${Person.src}`,
      location: "Mexico City, Mexico",
      age: "28",
      employment: "Sales Manager",
    },
  ];
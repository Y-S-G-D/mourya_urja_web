import { UnauthorizedCard } from "@/components/unauthorized-card";

const Page = () => {


    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
          <UnauthorizedCard />
        </div>
      );
}

export default Page;
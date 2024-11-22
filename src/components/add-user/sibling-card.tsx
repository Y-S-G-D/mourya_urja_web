import { Card, CardHeader, CardTitle, CardContent,} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Trash, User, Users } from "lucide-react";
import { ISibling } from "@/models/siblings-model";
import { Separator } from "../ui/separator";



export default function SiblingCard({ siblings, onDelete }: { siblings: ISibling[]; onDelete: (index: number) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {siblings.map((sibling, index) => (
        <Card
          key={index}
          className="shadow-md  border bg-gradient-to-br from-gray-50 to-secondary/40  rounded-lg"
        >
          <CardHeader className="pb-1">
            <CardTitle className="flex justify-between items-center text-base font-semibold">
              <span className="flex items-center gap-2 text-primary">
                <User size={18} />
                {sibling.name}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(index)}
                className="text-red-600 hover:text-red-800"
                title="Delete"
              >
                <Trash size={18} />
              </Button>
            </CardTitle>
          </CardHeader>

          <CardContent className="items-center text-sm text-gray-600">
            <div className="flex items-center gap-2 mb-1">
              <Users size={16} className="text-blue-500" />
              <span>{sibling.relation}</span>
              <Separator orientation="vertical" className="h-5 w-[1px] bg-secondary" />
              <span>
                {sibling.age} yrs ({sibling.ageRelation})
              </span>
            </div>
             <div className="flex items-center gap-2 mb-1">
              <GraduationCap size={16} className="text-purple-500" />
              <span>{sibling.education}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} className="text-yellow-500" />
              <span>{sibling.workDetails || "N/A"}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

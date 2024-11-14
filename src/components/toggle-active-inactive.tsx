// import { Bold, Italic, Underline } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function ToggleActiveInActive() {
  return (
    <ToggleGroup type="single" variant={'outline'}>
    <ToggleGroupItem  value="a">Active</ToggleGroupItem>
    <ToggleGroupItem value="b">In-active</ToggleGroupItem>
    {/* <ToggleGroupItem value="c">C</ToggleGroupItem> */}
  </ToggleGroup>
  
  )
}

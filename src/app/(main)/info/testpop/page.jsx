"use client";
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";


import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar1 } from "lucide-react";

export default function Page() {
  const [date, setDate] = useState(new Date());

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <Calendar1 color="#0033ff" /> {/* 정식 아이콘 */}
                    Open Popover    
                </Button>
            </PopoverTrigger>
            <PopoverContent>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                //className={`${atv === 1 ? s.a : s.a2} ${s.aa}`}
                captionLayout="dropdown"
            />

                {/* <PopoverHeader>
                <PopoverTitle>Title</PopoverTitle>
                <PopoverDescription>Description text here.</PopoverDescription>
                </PopoverHeader> */}
            </PopoverContent>
        </Popover>
    )
}
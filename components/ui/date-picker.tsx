"use client"

import * as React from "react"
import { format } from "date-fns"
import { tr } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  date?: Date
  setDate: (date?: Date) => void
  placeholder?: string
  className?: string
}

export function DatePicker({ date, setDate, placeholder = "Bir tarih seçin", className }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal px-4 py-3 h-auto rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-accent" />
          {date ? format(date, "PPP", { locale: tr }) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          locale={tr}
        />
      </PopoverContent>
    </Popover>
  )
}

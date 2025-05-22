"use client"
import ThemeToggle from "./themeToggle";
import { Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function SettingsMenu(){

    return(
         <div className="flex items-center">
            <DropdownMenu>
            <DropdownMenuTrigger> <Settings className="w-[20] h-[20]" /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>TemaAyarı</DropdownMenuItem>
                <ThemeToggle/>
            </DropdownMenuContent>
            </DropdownMenu>
         </div>




    )
}
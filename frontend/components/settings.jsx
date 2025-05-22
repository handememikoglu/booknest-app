"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./themeToggle";

export default function SettingsMenu(){
    const [open, setOpen] = useState(false);

    return(
        <div className="relative">
            <Button onClick={()=> setOpen(!open)}>Ayarlar</Button>

            {open && (
                <div className="absolute right-0 mt-2 p-4 bg-white dark:bg-gray-800 border rounded shadow-xl z-50">
                    <h4 className="mb-2 font-semibold">Tema Ayarı</h4>
                    <ThemeToggle/>
                </div>
            )}
        </div>
    )
}
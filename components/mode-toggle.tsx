"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-10 h-10 border-white/20 dark:border-gray-600/30 bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg hover:bg-white/20 dark:hover:bg-gray-700/40 text-gray-700 dark:text-gray-300">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-white/20 dark:border-gray-600/20">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gfg-50 dark:hover:bg-gray-700/50 focus:bg-gfg-50 dark:focus:bg-gray-700/50">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gfg-50 dark:hover:bg-gray-700/50 focus:bg-gfg-50 dark:focus:bg-gray-700/50">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gfg-50 dark:hover:bg-gray-700/50 focus:bg-gfg-50 dark:focus:bg-gray-700/50">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
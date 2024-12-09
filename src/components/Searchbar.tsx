'use client'

import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card } from "./ui/card"
import { Search } from 'lucide-react'

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Card className={`w-full max-w-2xl mx-auto transition-all duration-300 rounded-3xl ${isFocused ? 'shadow-lg' : 'shadow'}`}>
      <div className="flex items-center p-1 rounded-full">
        <Input 
          type="text" 
          placeholder="Search products..." 
          className="flex-grow rounded-xl bg-transparent border-none text-lg focus:outline-none focus:ring-0 placeholder-gray-300"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Button 
          variant={'default'}
          type="submit" 
          size="lg"
          className="rounded-full ml-2"
        >
          <Search className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">Search</span>
        </Button>
      </div>
    </Card>
  )
}


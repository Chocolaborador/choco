'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function PresentationGenerator() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isGenerating, setIsGenerating] = useState(false)
  const [presentationReady, setPresentationReady] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  const handleGeneratePresentation = () => {
    setIsGenerating(true)
    // Simulate AI generating a presentation
    setTimeout(() => {
      setIsGenerating(false)
      setPresentationReady(true)
    }, 3000)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-700 via-blue-600 to-teal-400">
      {/* Rest of your component code remains the same */}
    </div>
  )
} 
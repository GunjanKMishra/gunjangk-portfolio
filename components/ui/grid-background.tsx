"use client"

import React from "react"
import { cn } from "@/lib/utils"

export const GridBackground = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("relative w-full min-h-screen bg-[#0D0B0E]", className)}>
      {/* Grid Lines */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:50px_50px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_0px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_0px)]"
        )}
      />
      {/* Radial mask to dim outer edges */}
      {/* <div className="pointer-events-none absolute inset-0 z-10 bg-black [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0)_10%,black)]" /> */}

      {/* Foreground Content */}
      <div className="relative z-20">{children}</div>
    </div>
  )
}

import * as React from "react"
import { cn } from "@/lib/utils"
import { Table } from "@/components/ui/table"

interface ResponsiveTableProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function ResponsiveTable({ 
  children, 
  className,
  ...props 
}: ResponsiveTableProps) {
  return (
    <div 
      className={cn(
        "w-full overflow-auto rounded-md border", 
        className
      )}
      {...props}
    >
      <div className="min-w-full">
        {children}
      </div>
    </div>
  )
} 
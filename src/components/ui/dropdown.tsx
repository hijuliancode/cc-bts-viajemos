"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

export default function Dropdown({ label, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div 
        className="dropdown__trigger d-flex align-items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <ChevronDown size={16} />
      </div>
      {isOpen && <div className="dropdown__menu">{children}</div>}
    </div>
  );
}

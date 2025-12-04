"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import type { LucideIcon } from "lucide-react";

type DropdownItem = {
  label: string;
  href: string;
};

type DropDownProps = {
  label: string;
  Icon: LucideIcon;
  items: DropdownItem[];
};

export default function DropDown({ label, Icon, items }: DropDownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col font-light">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex gap-2 justify-between items-center w-full cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <Icon size={23} />
          <p>{label}</p>
        </div>

        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown size={20} />
        </motion.div>
      </button>

      {/* Dropdown Body */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden ml-9 mt-3"
          >
            <ul className="mt-2 flex flex-col gap-4">
              {items.map((item, index) => (
                <li key={index} className="hover:text-blue-500">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

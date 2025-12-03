"use client";

import {
  Calendar,
  CalendarDays,
  DollarSign,
  Home,
  LayoutDashboard,
  User,
} from "lucide-react";
import Link from "next/link";
import DropDown from "./reusableComponents/DropDown";

export default function Nav() {
  return (
    <div className="min-w-56 h-[93.3vh]  bg-red-300 flex flex-col justify-between p-4">
      <div>
        <nav className="mt-2">
          <ul className="flex flex-col gap-5">
            <li>
              <Link href={"/"} className="flex items-center gap-2 font-light">
                <LayoutDashboard size={23} /> <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <DropDown
                label="Employees"
                Icon={User}
                items={[
                  { label: "All Employees", href: "/employees/list" },
                  { label: "Add Employee", href: "/employees/add" },
                ]}
              />
            </li>
            <li>
              <DropDown
                label="Attendance"
                Icon={CalendarDays}
                items={[
                  { label: "Attendance list", href: "/attendance/list" },
                  { label: "Attendance Report", href: "/attendance/report" },
                ]}
              />
            </li>
            <li>
              <DropDown
                label="Leave"
                Icon={Calendar}
                items={[
                  { label: "Leave list", href: "/leave/list" },
                  { label: "Approve leave", href: "/leave/approve" },
                ]}
              />
            </li>
            <li>
              <DropDown
                label="Payroll"
                Icon={DollarSign}
                items={[
                  { label: "Payroll list", href: "/payroll/list" },
                  { label: "Generate Payslip", href: "/payroll/generate" },
                  { label: "Payroll  Report", href: "/payroll/report" },
                ]}
              />
            </li>
            <li>
              <DropDown
                label="Departments"
                Icon={Home}
                items={[
                  { label: "Departments list", href: "/department/list" },
                  { label: "Add Departments", href: "/department/add" },
                ]}
              />
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h3>HRMS v-1.0</h3>
      </div>
    </div>
  );
}

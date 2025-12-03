import { BellRing, ChevronDown } from "lucide-react";

export default function HeaderNav() {
  return (
    <nav className="flex w-full h-16 items-center justify-between px-10 text-lg shadow-gray-600 shadow">
      <div className="flex gap-10 items-center">
        <h1 className="font-bold text-blue-500">HRMS</h1>
        <h2>Techon IT Solution</h2>
      </div>
      <div>search</div>
      <div className="flex items-center gap-10">
        <BellRing size={21} />
        <div className="flex gap-3 items-center">
          <span>Deepak</span>
          <ChevronDown size={21} />
        </div>
      </div>
    </nav>
  );
}

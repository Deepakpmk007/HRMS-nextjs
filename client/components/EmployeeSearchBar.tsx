"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function EmployeeSearchBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const params = useSearchParams();

  const updateFilter = (key: string, value: string) => {
    const q = new URLSearchParams(params.toString());
    if (!value.trim()) {
      q.delete(key);
    } else {
      q.set(key, value);
    }
    router.push(`?${q.toString()}`);
  };

  return (
    <>
      <div className="flex gap-5">
        <input
          type="text"
          placeholder="Search Name ,Email ........"
          className="border border-s-stone-500 flex-1 px-2 py-1 outline-none rounded"
          onChange={(e) => updateFilter("search", e.target.value)}
        />
        <div className="flex gap-5">
          <select
            id="dept"
            className="border-s-stone-500 border px-2 outline-none rounded"
            onChange={(e) => updateFilter("department", e.target.value)}
          >
            <option value="">All Departments</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
          <select
            id="status"
            className="border-s-stone-500 border px-3 outline-none rounded"
            onChange={(e) => updateFilter("status", e.target.value)}
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="onLeave">On Leave</option>
            <option value="inActive">In Active</option>
          </select>
        </div>
      </div>
      <section>{children}</section>
    </>
  );
}

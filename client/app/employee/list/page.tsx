import { Plus } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full ">
      <section className="w-full flex justify-between p-4">
        <div>
          <h1 className="text-3xl font-bold">Employesss</h1>
          <p className="text-xl">
            {" "}
            Manage your team members and their information
          </p>
        </div>
        <button className="flex gap-3 items-center bg-blue-500 px-5 rounded-sm text-white cursor-pointer hover:bg-blue-400 transition-all">
          <Plus size={20} />
          <span className="text-lg font-bold tracking-wide">Add Employee</span>
        </button>
      </section>
    </div>
  );
}

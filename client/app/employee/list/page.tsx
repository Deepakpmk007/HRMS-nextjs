import EmployeeSearchBar from "@/components/EmployeeSearchBar";
import TableEmployeeList from "@/components/Table/TableEmployeeList";

export default function Page() {
  return (
    <div className="w-full p-4 flex flex-col gap-5">
      <section className="w-full flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">Employesss</h1>
          <p className="text-xl">
            {" "}
            Manage your team members and their information
          </p>
        </div>
      </section>
      <EmployeeSearchBar>
        <TableEmployeeList />
      </EmployeeSearchBar>
    </div>
  );
}

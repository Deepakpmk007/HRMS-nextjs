import { EmployeeT } from "@/types/EmployeeType";
import axios from "axios";
import { Eye, SquarePen } from "lucide-react";
import Link from "next/link";

type searchParamsT = {
  dept?: string;
  status?: string;
  search?: string;
};

export default async function TableEmployeeList({
  searchParams,
}: {
  searchParams: Promise<searchParamsT>;
}) {
  const getEmployees = async () => {
    const url = "http://localhost:8000/api/v1/user";
    const params = await searchParams;
    const data = await axios.get(url, { params });
    const length: number = data.data.length;
    const result: EmployeeT[] = data.data.data || [];
    return { result, length };
  };

  const { result, length } = await getEmployees();
  return (
    <section className="w-full flex flex-col gap-5">
      <p>
        Showing {length} of {length}employees
      </p>
      <table>
        <thead>
          <tr className="bg-blue-300 text-lg uppercase">
            <th className="table-head">Employee Name</th>
            <th className="table-head">Employee ID</th>
            <th className="table-head">department</th>
            <th className="table-head">postion</th>
            <th className="table-head">joining data</th>
            <th className="table-head">status</th>
            <th className="table-head">Actions</th>
          </tr>
        </thead>
        <tbody>
          {result.map((employee) => (
            <tr key={employee._id}>
              <td className="p-4 bg-gray-100">{employee.firstName}</td>
              <td className="p-4 bg-gray-100">{employee._id}</td>
              <td className="p-4 bg-gray-100">{employee.department}</td>
              <td className="p-4 bg-gray-100">{employee.position}</td>
              <td className="p-4 bg-gray-100">
                {new Date(employee.joiningDate).toLocaleDateString()}
              </td>
              <td className="p-4 bg-gray-100">{employee.status}</td>
              <td className="p-4 bg-gray-100">
                <div className="flex gap-3">
                  <Link href={`/employee/${employee._id}`}>
                    <Eye />
                  </Link>
                  <Link href={`/employee/${employee._id}/edit`}>
                    <SquarePen size={22} />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

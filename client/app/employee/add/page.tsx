"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, X } from "lucide-react";
// import { useDropzone } from "react-dropzone";
// import { useCallback, useState } from "react";

const EmployeeSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phonenumber: z
    .string()
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits"),
  dob: z.string(),
  gender: z.enum(["male", "female", "other"], {
    message: "Select a gender",
  }),
  bloodgroup: z.string().min(1, "Blood group required"),
  address: z.string().min(5, "Address too short"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z
    .string()
    .min(1, "Pincode must be 6 digits")
    .max(6, "Pincode must be 6 digits"),
  department: z.enum(["IT", "HR", "Marketing"]),
  position: z.string().min(1, "Position required"),
  joiningDate: z.string().min(1, "Joining date required"),
  status: z.string().min(1, "Status required"),
  employmentType: z.string().min(1, "Employment type is required"),
  salary: z.string(),
  reportingManager: z.string().min(1, "Reporting Manager required"),
});

type FormInputs = z.infer<typeof EmployeeSchema>;

// interface PerviweFile extends File {
//   preview: string;
// }

export default function Page() {
  // const { getRootProps, getInputProps, isDragActive } = useDropzone();
  // const [file, setFile] = useState<PerviweFile[]>([]);

  // const onDrop = useCallback((acceptedFile: File[]) => {
  //   if (acceptedFile.length > 0) {
  //     const file = acceptedFile[0];
  //     const previewFile = Object.assign(file, {
  //       preview: URL.createObjectURL(file),
  //     });
  //     setFile([previewFile]);
  //   }
  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    resolver: zodResolver(EmployeeSchema),
  });

  const onSubmit = (data: FormInputs) => {
    console.log("FORM DATA:", data);
  };

  return (
    <div className="flex flex-col w-full h-[93vh] overflow-y-auto p-6 bg-blue-50">
      <h1 className="text-4xl font-bold tracking-wide mb-6 ml-20">
        Add Employee
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 bg-white my-10 mx-20 p-10"
      >
        <section>
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <label>First Name</label>
              <input
                {...register("firstname")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.firstname && (
                <p className="text-red-500 text-sm">
                  {errors.firstname.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label>Last Name</label>
              <input
                {...register("lastname")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm">
                  {errors.lastname.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                type="email"
                {...register("email")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-6">
            <div className="flex flex-col gap-1">
              <label>Phone Number</label>
              <input
                {...register("phonenumber")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.phonenumber && (
                <p className="text-red-500 text-sm">
                  {errors.phonenumber.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label>Date of Birth</label>
              <input
                type="date"
                {...register("dob")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.dob && (
                <p className="text-red-500 text-sm">{errors.dob.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label>Gender</label>
              <select
                {...register("gender")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label>Blood Group</label>
              <input
                {...register("bloodgroup")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.bloodgroup && (
                <p className="text-red-500 text-sm">
                  {errors.bloodgroup.message}
                </p>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Address Information</h2>

          <div className="flex flex-col gap-1">
            <label>Address</label>
            <textarea
              {...register("address")}
              className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring h-24"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col gap-1">
              <label>City</label>
              <input
                {...register("city")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label>State</label>
              <input
                {...register("state")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label>Pincode</label>
              <input
                {...register("pincode")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.pincode && (
                <p className="text-red-500 text-sm">{errors.pincode.message}</p>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Employment Information</h2>

          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <label>Department</label>
              <select
                {...register("department")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              >
                <option value="">Select</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="marketing">Marketing</option>
              </select>
              {errors.department && (
                <p className="text-red-500 text-sm">
                  {errors.department.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label>Position</label>
              <input
                {...register("position")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.position && (
                <p className="text-red-500 text-sm">
                  {errors.position.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label>Joining Date</label>
              <input
                type="date"
                {...register("joiningDate")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.joiningDate && (
                <p className="text-red-500 text-sm">
                  {errors.joiningDate.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col gap-1">
              <label>Employment Type</label>
              <input
                {...register("employmentType")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.employmentType && (
                <p className="text-red-500 text-sm">
                  {errors.employmentType.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label>Salary</label>
              <input
                {...register("salary")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.salary && (
                <p className="text-red-500 text-sm">{errors.salary.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label>Reporting Manager</label>
              <input
                {...register("reportingManager")}
                className="border-gray-400 border active:shadow shadow-gray-400 px-3 py-2 rounded focus:outline-none focus:ring"
              />
              {errors.reportingManager && (
                <p className="text-red-500 text-sm">
                  {errors.reportingManager.message}
                </p>
              )}
            </div>
          </div>
        </section>
        <div className="flex gap-5 self-end">
          <button
            className="mt-4 py-2 px-4 bg-red-400 text-white rounded hover:bg-red-600 w-fit flex gap-2 cursor-pointer"
            onChange={() => reset()}
          >
            <X />
            <span>cancel</span>
          </button>
          <button
            type="submit"
            className="mt-4 py-2 px-4 bg-blue-400 text-white rounded hover:bg-blue-600 w-fit flex gap-2 cursor-pointer"
          >
            <Check />
            <span>Add Employee</span>
          </button>
        </div>
      </form>
    </div>
  );
}

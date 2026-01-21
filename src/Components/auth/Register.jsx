import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "user",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Minimum 3 characters").required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
      role: Yup.string().oneOf(["user", "admin"]).required("Role is required"),
    }),
    onSubmit: (values) => {
      console.log("Register Data:", values);
      // API call here
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded-lg shadow w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="w-full border p-2 rounded mb-1"
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm mb-2">{formik.errors.name}</p>
        )}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full border p-2 rounded mb-1"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm mb-2">{formik.errors.email}</p>
        )}

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="w-full border p-2 rounded mb-1"
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm mb-2">{formik.errors.password}</p>
        )}

        {/* Role */}
        <select
          name="role"
          onChange={formik.handleChange}
          value={formik.values.role}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

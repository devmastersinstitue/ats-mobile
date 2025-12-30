import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo.jsx";
import Button from "../components/Button.jsx";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    const validationSchema = Yup.object({
        email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
        password: Yup.string().max(255).required("Password is required"),
    });
    const onSubmit = (value) => {
        axios
            .post("api/auth/signin", {
                email: value.email,
                password: value.password,
            })
            .then((res) => {
                if (res.status === 200 && res.data !== '') {
                    localStorage.setItem("userId", res.data.userId)
                    localStorage.setItem("email", res.data.email);
                    localStorage.setItem("userName", res.data.userName);
                    localStorage.setItem("role", res.data.role);
                    
                    // Show success message
                    toast.success("Login successful! Redirecting...", { position: "top-right" });
    
                    setTimeout(() => {
                        window.location = "/app/dashboard";
                    }, 1500); // Delay to allow users to see the message
                }else{
                    const errorMessage = "Email | Password is incorrect.";
                    toast.error(errorMessage, { position: "top-right" });
                }
            })
            .catch((error) => {
                const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
                toast.error(errorMessage, { position: "top-right" });
            });
    };


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onSubmit(values);
        },
    });

    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="mb-16">
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col text-xl font-bold text-gray-700 p-10 lg:mt-20">
                        <Logo />
                        <label className="w-20 my-5 m-auto">SIGN IN</label>
                        <div className="flex flex-col w-full md:w-[55%] lg:w-[40%] xl:w-[28%] 2xl:w-[20%] m-auto">
                        <label className="my-5">Email</label>
                        <input
                            className="rounded-md font-normal pl-4 border-gray-300 bg-gray-200 md:w-96 w-[100%] h-10"
                            type={"text"}
                            label={"Email"}
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-600">{formik.errors.email}</div>
                        )}
                        <label className="my-5">Password</label>
                        <input
                            className="rounded-md font-normal pl-4 border-gray-300 bg-gray-200 md:w-96 w-[100%] h-10"
                            type={"password"}
                            label={"Password"}
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="text-red-600">{formik.errors.password}</div>
                        )}
                        {/* <Link to="/app/email">
                            <p className="my-8 text-sm font-medium underline hover:cursor-pointer">Forgot password?</p>
                        </Link> */}
                        <Button label="Login" width="md:w-96 w-[100%]"/>
                        </div>
                        
                    </div>
                </form>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

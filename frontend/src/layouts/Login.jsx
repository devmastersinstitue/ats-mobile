import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo.jsx";
import Button from "../components/Button.jsx";
import Footer from "./Footer.jsx";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    // const url = `${process.env.REACT_APP_BASE_URL}/api/auth/signin`;
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
                debugger
                if (res.status === 200 && res.data !== '') {
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
        <div className=" ">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="">
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col h-screen items-center justify-center">
                        <Logo />
                        <label className="my-6 text-2xl font-bold text-center">
                            <h1>SIGN IN</h1>
                        </label>
                        <label className="mt-7 mb-1 block text-md font-medium text-gray-700 -ml-[340px]">Email</label>
                        <input
                            className="rounded-md border-gray-300 bg-gray-200 w-96 h-10"
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
                        <label className="mt-7 mb-1 block text-md font-medium text-gray-700 -ml-[310px]">
                            Password
                        </label>
                        <input
                            className="rounded-md border-gray-300 bg-gray-200 w-96 h-10"
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
                        <Link to="/app/email">
                            <p className="my-8 text-sm font-medium underline hover:cursor-pointer">Forgot password?</p>
                        </Link>
                        <Button label="Login" />
                    </div>
                </form>
            </div>
            <div className="-mt-20 sm:mr-20 md:mr-20 lg:mr-16 xl:mr-16 2xl:mr-32">
                <Footer />
            </div>
        </div>
    );
}

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import { divider } from "@heroui/theme";

export default function Signup() {

    const [signup, login] = useState(false);

    const formChange = () => {
        login((prev) => !prev);
    };

    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(["token"]); // Proper hook usage

    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });

    const { email, password, username } = inputValue;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err: string) =>
        toast.error(err, { position: "bottom-left" });

    const handleSuccess = (msg: string) =>
        toast.success(msg, { position: "bottom-right" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Login successful:", data);
                window.location.href = "/"; // Redirect to home page on successful login
                // You can store the token in localStorage or handle it as needed
                setCookie("token", data.token);
                localStorage.setItem("token", data.token);
                window.location.href = "/"; // Redirect to home page on successful login
            } else {
                console.error("Login failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error during login:", error);
            handleError("An error occurred during signup. Please try again.");
        }

        setInputValue({ email: "", password: "", username: "" });
    };

    return (

        <div className="bg-slate-100 w-sceen h-screen flex items-center justify-center">

            <div className="bg-white border border-gray-300 rounded shadow-lg grid grid-rows-4 md:grid-rows-4 lg:grid-rows-1 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:h-3/4 lg:h-5/6 w-2/3 lg:w-4/5 justify-items-center place-items-center">

                <div className="text-blue-500 text-4xl md:text-6xl lg:text-8xl font-bold row-span-1 md:row-span-1"><Link href={"/"}>LookUp</Link></div>

                <div className="form_container w-2/3 row-span-3 md:row-span-3">

                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-4 lg:gap-4 items-center">

                        <div className={`font-bold text-lg md:text-2xl lg:text-4xl transition-all duration-60 ease-in-out ${signup ? "translate-y-[-5px]" : "translate-y-0"}`}>Join us now</div>

                        {signup ? (

                            <div className="w-full">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={handleOnChange}
                                    required
                                    className={`outline-none w-full p-2 border border-gray-300 focus:border-blue-500 rounded-md`}
                                />
                            </div>
                        ) : null
                        }

                        <div className="w-full">
                            <input
                                type="text"
                                name="username"
                                value={username}
                                placeholder="Username"
                                onChange={handleOnChange}
                                required
                                className="outline-none w-full p-2 border border-gray-300 focus:border-blue-500 rounded-md"
                            />
                        </div>

                        <div className="w-full">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={handleOnChange}
                                required
                                className="outline-none w-full p-2 border border-gray-300 focus:border-blue-500 rounded-md"
                            />
                        </div>

                        {signup ? (

                            <div className="w-full">
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Confirm Password"
                                    onChange={handleOnChange}
                                    required
                                    className="outline-none w-full p-2 border border-gray-300 focus:border-blue-500 rounded-md"
                                />
                            </div>
                        ) : null
                        }
                        

                        {signup ? (
                            <button type="submit" className={`font-semibold text-blue-500 text-sm sm:text-base border hover:bg-blue-100 border-gray-300 rounded-full w-3/5 sm:w-2/5 py-1 transition-all duration-60 ease-in-out ${signup ? "translate-y-[5px]" : "translate-y-[0]"}`}>Sign Up</button>
                        ) : (
                            <button type="submit" className={`font-semibold text-blue-500 text-sm sm:text-base border hover:bg-blue-100 border-gray-300 rounded-full w-3/5 sm:w-2/5 py-1 transition-all duration-60 ease-in-out ${signup ? "translate-y-[5px]" : "translate-y-[0]"}`}>Log In</button>
                        )
                        }


                        <fieldset className={`border border-t-gray-300 border-b-0 border-x-0 w-full text-center transition-all duration-60 ease-in-out ${signup ? "translate-y-[5px]" : "translate-y-[0]"}`}>
                            <legend className="px-1 text-gray-500 text-sm sm:text-base">OR</legend>
                        </fieldset>

                        <button className={`border rounded-full w-full py-1 transition-all duration-60 ease-in-out ${signup ? "translate-y-[5px]" : "translate-y-[0]"}`}>Continue with Google</button>

                        <div className={`mb-5 sm:mb-0 text-sm sm:text-base transition-all duration-60 ease-in-out ${signup ? "translate-y-[5px]" : "translate-y-[0]"}`}>
                            Already have an account?
                            <span onClick={formChange}>
                                {signup ? (
                                    <span className="text-blue-500 hover:cursor-pointer"> Login</span>
                                ) : (
                                    <span className="text-blue-500 hover:cursor-pointer"> Sign Up</span>
                                )
                                }
                            </span>

                        </div>
                    </form>
                    <ToastContainer />
                </div>

            </div>

        </div>
    );
}

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";

export default function login() {
    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(["token"]); // Proper hook usage

    const [inputValue, setInputValue] = useState({
        username: "",
        password: "",
    });

    const { username, password } = inputValue;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err: string) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg: string) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password: password,
                    username: username,
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
        setInputValue({
            ...inputValue,
            username: "",
            password: "",
        });
    };

    return (
        <div className="form_container">
            <h2>Login Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">username</label>
                    <input
                        type="username"
                        name="username"
                        value={username}
                        placeholder="Enter your username"
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit">Submit</button>
                <span>
                    Already have an account?{" "}
                    <Link href={"/signup"}>Signup</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    );
}

import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";

import { CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
// import { ReactDOM } from "react-dom/frontend/lookup";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    // const root = ReactDOM.createRoot(document.getElementById('root')); //fssgrs

    return (
        <CookiesProvider>
            <HeroUIProvider navigate={router.push}>
                <Component {...pageProps} />
                <ToastContainer position="bottom-right" autoClose={3000} />
            </HeroUIProvider>
        </CookiesProvider>
    );
}

export const fonts = {
    sans: fontSans.style.fontFamily,
    mono: fontMono.style.fontFamily,
};

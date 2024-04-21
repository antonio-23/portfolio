import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0ea5e9",
                }
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
}

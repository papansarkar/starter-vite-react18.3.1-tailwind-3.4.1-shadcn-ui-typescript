import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <SwitchPrimitive.Root
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
            className={cn(
                "peer inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full border-0 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
                theme === "dark" ? "bg-slate-900" : "bg-slate-200"
            )}
        >
            <SwitchPrimitive.Thumb
                className={cn(
                    "pointer-events-none flex items-center justify-center h-8 w-8 rounded-full shadow-lg ring-0 transition-transform",
                    theme === "dark"
                        ? "translate-x-8 bg-slate-800"
                        : "translate-x-0 bg-white"
                )}
            >
                {theme === "dark" ? (
                    <Moon className='h-4 w-4 text-slate-200' />
                ) : (
                    <Sun className='h-4 w-4 text-black' />
                )}
            </SwitchPrimitive.Thumb>
        </SwitchPrimitive.Root>
    );
};

export default ThemeToggle;

import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const dark = theme === "dark";

    return (
        <motion.button
            whileHover={{
                scale: 1.08,
                rotate: 8,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
                setTheme(dark ? "light" : "dark")
            }
            className="relative flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-xl"
            style={{
                background: dark
                    ? "rgba(18,9,31,0.85)"
                    : "rgba(255,255,255,0.85)",

                borderColor: dark
                    ? "rgba(168,85,247,0.35)"
                    : "rgba(124,58,237,0.2)",

                boxShadow: dark
                    ? "0 0 30px rgba(168,85,247,0.35)"
                    : "0 0 30px rgba(124,58,237,0.15)",
            }}
        ><motion.div
            key={theme}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
                {dark ? (
                    <Sun size={20} color="#F8F7FF" />
                ) : (
                    <Moon size={20} color="#7C3AED" />
                )}
            </motion.div>
        </motion.button>
    );
}
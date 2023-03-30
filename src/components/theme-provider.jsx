import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";
const customTheme = {
  button: {
    valid: {
      colors: [
        'dark'
      ],
    },
    styles: {
      base: {
        initial: {
          className: "capitalize font-medium"
        }
      },
      variants: {
        filled: {
          cyan: {
            background: "bg-cyan",
            color: "text-dark"
          },
          yellow: {
            background: "bg-yellow",
            color: "text-dark"
          },
          blue: {
            background: "bg-blue-500",
            color: "text-white"
          },
          red: {
            background: "bg-red",
            color: "text-white"
          },
          dark: {
            background: "bg-dark",
            color: "text-white",
            className: "border border-[#383B3D]"
          },
        },
        outlined: {
          cyan: {
            background: "bg-cyan",
            color: "text-dark"
          },
          yellow: {
            background: "bg-yellow",
            color: "text-dark"
          },
          blue: {
            background: "bg-blue",
            color: "text-white"
          },
          red: {
            background: "bg-red",
            color: "text-white"
          },
          dark: {
            background: "bg-dark",
            color: "text-white",
            className: "border border-[#383B3D]"
          },
        }
      },

    },
  }
}

export function ThemeProvider({ children }) {
  return <MTThemeProvider value={customTheme}>{children}</MTThemeProvider>;
}
 
export default ThemeProvider;
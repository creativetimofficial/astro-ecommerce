import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";
const customTheme = {
  button: {
    valid: {
      colors: ["dark"],
    },
    styles: {
      base: {
        initial: {
          textTransform: "capitalize",
          fontWeight: "font-medium",
        },
      },
      variants: {
        filled: {
          cyan: {
            background: "bg-cyan",
            color: "text-dark",
          },
          yellow: {
            background: "bg-yellow",
            color: "text-dark",
          },
          blue: {
            background: "bg-blue-500",
            color: "text-white",
          },
          red: {
            background: "bg-red",
            color: "text-white",
          },
          dark: {
            background: "bg-dark",
            color: "text-white",
            className: "border border-[#383B3D]",
          },
        },
        outlined: {
          cyan: {
            background: "bg-cyan",
            color: "text-dark",
          },
          yellow: {
            background: "bg-yellow",
            color: "text-dark",
          },
          blue: {
            background: "bg-blue",
            color: "text-white",
          },
          red: {
            background: "bg-red",
            color: "text-white",
          },
          dark: {
            background: "bg-dark",
            color: "text-white",
            className: "border border-[#383B3D]",
          },
        },
      },
    },
  },
  iconButton: {
    valid: {
      colors: [
        'dark'
      ],
    },
    styles: {
      variants: {
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
            color: "text-white"
          },
        }
      },

    },
  },
  navbar: {
    styles: {
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
            background: "bg-blue",
            color: "text-white"
          },
          red: {
            background: "bg-red",
            color: "text-white"
          },
          dark: {
            background: "bg-dark",
            color: "text-white"
          }
        }
      },
    },
    valid: {
      colors: [
        'dark'
      ],
    }
  },

  card: {
    valid: {
      colors: [
        'dark'
      ],
    },
    styles: {
      variants: {
        filled: {
          cyan: {
            background: "bg-cyan"
          },
          yellow: {
            background: "bg-yellow"
          },
          blue: {
            background: "bg-blue"
          },
          red: {
            background: "bg-red"
          },
          dark: {
            background: "bg-dark"
          },

        }
      }
    }
  },

  input: {
    styles: {
      base: {
     
      },
      variants: {
        outlined: {
          cyan: {
            background: "bg-cyan"
          },
          yellow: {
            background: "bg-yellow"
          },
          blue: {
            background: "bg-blue"
          },
          red: {
            background: "bg-red"
          },
          dark: {
            background: "bg-dark",
            className: "border border-[#383B3D]"

          },

        }
      }
    }
  }
};

export function ThemeProvider({ children }: any) {
  return (
    <MTThemeProvider value={customTheme as any}>{children}</MTThemeProvider>
  );
}

export default ThemeProvider;

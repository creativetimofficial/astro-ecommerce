import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";
const customTheme = {
  button: {
    valid: {
      colors: ["dark", "slate", "sky", "yellow", "blue", "green", "red"],
    },
    styles: {
      base: {
        initial: {
          fontWeight: "font-bold",
          // fontSize: "!text-sm",
        }
      },
      variants: {
        filled: {
          sky: {
            background: "bg-sky",
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
          green: {
            background: "bg-green",
            color: "text-white",
          },
          red: {
            background: "bg-red",
            color: "text-white",
          },
          slate: {
            background: "bg-slate",
            color: "text-white",
          },
          dark: {
            background: "bg-dark",
            color: "text-white",
          }
        },
        outlined: {
          sky: {
            color: "text-sky",
            border: "border border-sky",
          },
          yellow: {
            color: "text-yellow",
            border: "border border-yellow",
          },
          blue: {
            color: "text-blue",
            border: "border border-blue",
          },
          red: {
            color: "text-red",
            border: "border border-red"
          },
          green: {
            color: "text-green",
            border: "border border-green"
          },
          slate: {
            color: "text-slate",
            border: "border border-slate"
          },
          dark: {
            color: "text-dark",
            border: "border border-dark"
          }
        },
        text: {
          dark: {
            color: "text-dark"
          }
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
          sky: {
            color: "text-sky",
            border: "border border-sky",
          },
          yellow: {
            color: "text-yellow",
            border: "border border-yellow",
          },
          blue: {
            color: "text-blue",
            border: "border border-blue",
          },
          red: {
            color: "text-red",
            border: "border border-red"
          },
          green: {
            color: "text-green",
            border: "border border-green"
          },
          slate: {
            color: "text-slate",
            border: "border border-slate"
          },
          dark: {
            color: "text-dark",
            border: "border border-dark"
          }
        },
        filled: {
          dark: {
            background: "bg-dark",
            color: "text-white"
          }
        }
      },

    },
  },
  checkbox: {
    valid: {
      colors: [
        'dark'
      ],
    },
    styles: {
      variants: {
        filled: {
          dark: {
            color: "bg-dark",
            border: "text-white"
          }
        }
      }
    },
  },
  navbar: {
    styles: {
      variants: {
        filled: {
          sky: {
            background: "bg-sky",
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
          green: {
            background: "bg-green",
            color: "text-white",
          },
          red: {
            background: "bg-red",
            color: "text-white",
          },
          slate: {
            background: "bg-slate",
            color: "text-white",
          },
          dark: {
            background: "bg-dark",
            color: "text-white",
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
          sky: {
            background: "bg-sky"
          },
          yellow: {
            background: "bg-yellow"
          },
          blue: {
            background: "bg-blue"
          },
          green: {
            background: "bg-green"
          },
          red: {
            background: "bg-red"
          },
          slate: {
            background: "bg-slate"
          },
          dark: {
            background: "bg-dark"
          }
        }
      }
    }
  },

  input: {
    valid: {
      colors: ["dark", "slate", "sky", "yellow", "blue", "green", "red"],
    },
    styles: {
      base: {
     
      },
      variants: {
        outlined: {
          sky: {
            color: "text-sky",
            border: "border border-sky",
          },
          yellow: {
            color: "text-yellow",
            border: "border border-yellow",
          },
          blue: {
            color: "text-blue",
            border: "border border-blue",
          },
          red: {
            color: "text-red",
            border: "border border-red"
          },
          green: {
            color: "text-green",
            border: "border border-green"
          },
          slate: {
            color: "text-slate",
            border: "border border-slate"
          },
          dark: {
            color: "text-dark",
            border: "border border-dark"
          }
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

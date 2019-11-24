class LightTheme {
    palette = {
        primary: {
            main: "#00abfa",
            contrastText: "#000"
        },
        secondary: {
            main: "#21d68f"
        }
    };

    card = {
        width: 500
    };

    typography = {
        useNextVariants: true,
        fontSize: 16,
        button: {
            color: "#000",
            fontSize: "1rem",
            textTransform: "uppercase",
        },
        body1: {
            color: "#000",
            '&:hover': {
                color: "#000",
            },
        },
        body2: {
            color: "#4C5356",
            lineHeight: 1.7,
        },
        h1: {
            fontSize: "1.8rem",
            textTransform: "uppercase",
            marginBottom: 40,
            marginTop: 20
        },
        h2: {
            textTransform: "uppercase",
            fontSize: "1.2rem",
            marginBottom: 40,
        },
        h5: {
            color: "#597b8c",
            textTransform: "uppercase",
            fontSize: "1.2rem",
        },
        h6: {
            fontSize: "1.2rem",
            color: "#4C5356",
            marginBottom: 5
        }
    };

    shape = {
        borderRadius: 0,
    };

    overrides = {
        MuiDrawer: {
            paper: {
                backgroundColor: "#00abfa",
                color: "#000"
            }
        },
        MuiButton: {
            root: {
                width: 240,
                marginTop: 15,
                marginRight: 15,
                border: "1px solid #fff",
            },
            contained: {
                boxShadow: "none",
                backgroundColor: "none",
                color: "#ffffff"
            }
        },
        MuiIconButton: {
            root: {
                color: "#597b8c",
            }
        },
        MuiList: {
            root: {
                marginTop: 20,
            }
        },
        MuiListItem: {
            root: {
                '&$selected': {
                    '&&': {
                        backgroundColor: "#21d68f !important"
                    }
                }
            }
        },
        MuiCardHeader: {
            subheader: {
                color: "#BDC1C7"
            }
        },
        MuiMenuItem: {
            root: {
                color: "#597b8c",
            }
        },
        MuiFormControl: {
            root: {
                width: 370,
                height: 40,
                left: 0,
                marginRight: 50,
                boxShadow: "none",
                border: 0,
            }
        },
        MuiInput: {
            root: {
                width: 370,
                height: 40,
                marginRight: 20,
                border: "1px solid #BDC1C7",
                borderRadius: 2,
                '&$focused': {
                    border: "1px solid #597b8c",
                },
            },
            underline: {
                '&:before': {
                    borderBottom: 0,
                },
                '&:after': {
                    borderBottom: 0,
                }
            }
        },
        MuiInputLabel: {
            formControl: {
                top: 4,
                left: 16,
                color: "#BDC1C7",
                fontSize: 16,
            },
            shrink: {
                transform: "translate(0, -3px) scale(0.75)",
            }
        },
        MuiInputBase: {
            input: {
                marginLeft: 15,
                color: "#4C5356",
            },
        },
        MuiFab: {
            root: {
                borderRadius: 0,
                boxShadow: "none"
            }
        },
        MuiSvgIcon: {
            root: {
                width: "1.2em",
                height: "1.0em"
            }
        }
    }

}

export default LightTheme;

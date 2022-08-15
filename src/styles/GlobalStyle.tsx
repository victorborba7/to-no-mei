import { Form, Row } from "react-bootstrap";
import { styled } from "@/stitches.config";

const inputsStyle = {
    variants: {
        bgColor: {
            darkBlue: {
                backgroundColor: "#0e002e !important",
            },
            mintGreen: {
                backgroundColor: "#5cb85c !important"
            },
            lightYellow: {
                backgroundColor: "#efc04d !important"
            },
            lightRed: {
                backgroundColor: "#cc5454 !important"
            },
            darkSeaGreen: {
                backgroundColor: "#00a1a0 !important"
            },
            mediumBlue: {
                backgroundColor: "#0058a0 !important"
            },
            grey: {
                backgroundColor: "#F8F9FA !important"
            }
        },
        color: {
            black: {
                color: "#000000 !important"
            },
            white: {
                color: "#FFFFFF !important"
            }
        }
    },
    borderRadius: "1rem !important",
    padding: "0.5rem 1rem !important",
    border: "none !important",
    fontWeight: "bold !important",
    width: "100% !important"
}

const HeaderStyle = styled(Row, {
    backgroundColor: "#0e002e",
});

const Title = styled("h1", {
    color: "#0e002e",
    fontSize: "2.5em",
    variants: {
        font: {
            10: {
                fontSize: "1em"
            },
            15: {
                fontSize: "1.5em"
            },
            20: {
                fontSize: "2em"
            },
            30: {
                fontSize: "3em"
            }
        }
    }
});

const Subtitle = styled("h2", {
    color: "#0e002e",
    fontSize: "2em",
    variants: {
        font: {
            10: {
                fontSize: "1em"
            },
            15: {
                fontSize: "1.5em"
            },
            25: {
                fontSize: "2.5em"
            },
            30: {
                fontSize: "3em"
            }
        }
    }
});

const Text = styled("p", {
    color: "#0e002e",
    fontSize: "1em",
    variants: {
        font: {
            15: {
                fontSize: "1.5em"
            },
            20: {
                fontSize: "2em"
            },
            25: {
                fontSize: "2.5em"
            },
            30: {
                fontSize: "3em"
            }
        }
    }
});

const Button = styled("button", inputsStyle);

const Select = styled(Form.Select, inputsStyle);

export {
    HeaderStyle,
    Title,
    Subtitle,
    Text,
    Button,
    Select
}
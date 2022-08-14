import { Row } from "react-bootstrap";
import { styled } from "@/stitches.config";

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

const Button = styled("button", {
    variants: {
        backgroundColor: {
            darkBlue: {
                backgroundColor: "#0e002e",
            },
            mintGreen: {
                backgroundColor: "#5cb85c"
            },
            lightYellow: {
                backgroundColor: "#efc04d"
            },
            lightRed: {
                backgroundColor: "#cc5454"
            },
            darkSeaGreen: {
                backgroundColor: "#00a1a0"
            },
            mediumBlue: {
                backgroundColor: "#0058a0"
            }
        },
        color: {
            black: {
                color: "#000000"
            },
            white: {
                color: "#FFFFFF"
            }
        }
    },
    borderRadius: "1rem",
    cursor: "pointer",
    padding: "0.5rem 1rem",
    border: "none",
    fontWeight: "bold"
});

export {
    HeaderStyle,
    Title,
    Subtitle,
    Text,
    Button,
}
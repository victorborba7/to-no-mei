import { Row } from "react-bootstrap";
import { styled } from "@/stitches.config";

const Header = styled(Row, {
    backgroundColor: "#0e002e",
});

const Title = styled("h1", {
    color: "#0e002e",
    fontSize: "3em"
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
    Header,
    Title,
    Button
}
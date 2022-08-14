import React from "react";
import { Header } from "@/components/Header"
import { Menu } from "@/components/Menu"
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "@/stitches.config";
import { Title, Subtitle } from "../styles/GlobalStyle";
import * as Tabs from '@radix-ui/react-tabs';

const MeiSection = styled(Row, {
    paddingTop: 75,
    backgroundColor: "#EEEEEE",
    borderBottom: "50px solid #0e002e"
});

const Card = styled("div", {
    padding: 50,
    borderRadius: "10px 10px 0 0",
    width: "100%",
    height: 200,
    cursor: "pointer",
    variants: {
        color: {
            blue: {
                backgroundColor: "#0e002e",
                color: "#FFFFFF"
            },
            white: {
                backgroundColor: "#FFFFFF",
                color: "#00a1a0",
                transition: "0.3s",
                boxShadow: "-1px -3px 3px #999, 3px -3px 3px #999",
                "&:hover": {
                    backgroundColor: "#0e002e",
                    color: "#FFFFFF",
                    boxShadow: "none"
                }
            }
        }
    }
});

export default function Home() {
    return (
        <Container fluid className="text-center">
            <Header />
            <Menu />
            <Row className="justify-content-center mt-4">
                <Col xs={3} className="text-start">
                    <Title>MEU MEI</Title>
                    <Subtitle>O que deseja fazer?</Subtitle>
                    <p>Rafael Andrade do Nascimento 000.000.999-90</p>
                </Col>
            </Row>
            <MeiSection className="justify-content-center align-items-center">
                <Col xs={8}>
                    <Row className="justify-content-around align-items-center">
                        <Col xs={3}>
                            <Card color="blue" className="text-center">
                                <h3>Gerador de DAS</h3>
                            </Card>
                        </Col>
                        <Col xs={3}>
                            <Card color="white" className="text-center">
                                <h3>Declaração Anual (SIMEI)</h3>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </MeiSection>
        </Container>
    )
}
import React from "react";
import { Header } from "@/components/Header"
import { Menu } from "@/components/Menu"
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "../stitches.config";
import Profile from "@/assets/unknown.jpeg"
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Title, Subtitle } from "@/styles/GlobalStyle";

const Card = styled("div", {
    padding: 10,
    borderRadius: 3,
    border: "1px solid #cccccc",
    width: "100%",
    variants: {
        box: {
            true: {
                boxShadow: "0px 0px 4px 1px #999999",
            },
        },
        color: {
            red: {
                backgroundColor: "#dc3545",
                color: "#FFFFFF"
            },
            yellow: {
                backgroundColor: "#f7ba06",
                color: "#000000"
            },
            green: {
                backgroundColor: "#188251",
                color: "#FFFFFF"
            },
            white: {
                backgroundColor: "#FFFFFF",
                color: "#000000"
            }
        }
    }
});

const LinkStyle = styled(Link, {
    padding: 5,
    color: "#00a1a0",
    textDecoration: "none",
    '&:hover': {
        color: "#00a1a0 !important"
    }
});

export default function Home() {
    return (
        <Container fluid className="text-center">
            <Header />
            <Menu />
            <Row className="justify-content-center mt-4">
                <Col xs={10}>
                    <Title>Seja bem vindo(a),</Title>
                    <Subtitle>é uma grande alegria estarmos juntos.</Subtitle>
                    <Row className="justify-content-between mt-4">
                        <Col xs={12} sm={3}>
                            <Card box="true">
                                <div className="d-flex flex-column jutify-content-between align-items-center">
                                    <img src={Profile} style={{
                                        borderRadius: "50%",
                                        width: "30%",
                                    }} />
                                    <h3>Odair Silva</h3>
                                    <h4>Artesanato</h4>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={12} sm={5} className="d-flex flex-column jutify-content-between align-items-center">
                            <Card box="true">
                                <Row className="flex-column jutify-content-between align-items-center">
                                    <Col xs={12}>
                                        <Row className="justify-content-center">
                                            <Col xs={1}>
                                                <FaRegMoneyBillAlt color="#00a1a0" size="30px" />
                                            </Col>
                                            <Col xs={1}>
                                                <h4>Gastos</h4>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={10}>
                                        <Card color="red" className="d-flex flex-column jutify-content-between align-items-center">
                                            <h6>Total de gastos da empresa</h6>
                                            <h4>R$ 262,00</h4>
                                        </Card>
                                    </Col>
                                    <Col xs={10}>
                                        <Card color="yellow" className="d-flex flex-column jutify-content-between align-items-center mt-3">
                                            <h6>Total de gastos pessoais</h6>
                                            <h4>R$ 262,00</h4>
                                        </Card>
                                    </Col>
                                    <Col xs={10}>
                                        <p>Ver informação<LinkStyle to="/home">completa</LinkStyle></p>
                                    </Col>
                                </Row>
                            </Card>
                            <Card box="true" className="mt-2">
                                <Row className="flex-column jutify-content-between align-items-center">
                                    <Col xs={12}>
                                        <Row className="justify-content-center">
                                            <Col xs={1}>
                                                <FaRegMoneyBillAlt color="#00a1a0" size="30px" />
                                            </Col>
                                            <Col xs={1}>
                                                <h4>Gastos</h4>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={10}>
                                        <Card color="green" className="d-flex flex-column jutify-content-between align-items-center">
                                            <h6>Total Receitas</h6>
                                            <h4>R$ 262,00</h4>
                                        </Card>
                                    </Col>
                                    <Col xs={10}>
                                        <Card color="white" className="d-flex flex-column jutify-content-between align-items-center mt-3">
                                            <h6>Total Canceladas</h6>
                                            <h4>R$ 262,00</h4>
                                        </Card>
                                    </Col>
                                    <Col xs={10}>
                                        <p>Ver informação<LinkStyle to="/home">completa</LinkStyle></p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={12} sm={3} className="d-flex flex-column jutify-content-between align-items-center">
                            <Card box="true">
                                <h5>LOREM IPSUM DOLOR SIT AMET</h5>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
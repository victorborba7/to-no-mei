import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Button, HeaderStyle, Title } from "@/styles/GlobalStyle";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa"
import { styled } from "@/stitches.config";
import LogoAzul from "@/assets/logo_azul_verde.png"
import Mulher from "@/assets/mulher_login.jpeg"
import { useNavigate } from "react-router-dom";

const Input = styled(Form.Control, {
    borderRadius: "1rem !important",
    padding: "10px 20px !important",
    backgroundColor: "#f1f0f2 !important",
    color: "#0e002e !important",
    border: "1px solid #0e002e !important",
    '&:focus': {
        boxShadow: "none !important",
    },
});

const Logo = styled("img", {
    width: "100%"
})

export default function Login() {
    const navigate = useNavigate();
    return (
        <div>
            <HeaderStyle className="justify-content-end py-3">
                <Col xs={8} md={4}>
                    <Row className="justify-content-end">
                        <Col xs={6} className="d-flex justify-content-center align-items-center">
                            <FaFacebookF color="white" size="25px" className="mx-3" />
                            <FaInstagram color="white" size="25px" />
                            <FaLinkedinIn color="white" size="25px" className="mx-3" />
                        </Col>
                    </Row>
                </Col>
            </HeaderStyle>
            <Row className="justify-content-center mt-5">
                <Col xs={11}>
                    <Row className="justify-content-around align-items-center">
                        <Col xs={12} lg={3} className="d-flex flex-column justify-content-around">
                            <Row>
                                <Col xs={12}>
                                    <Logo src={LogoAzul} />
                                </Col>
                            </Row>
                            <Row className="justify-content-center justify-content-lg-start">
                                <Col xs={12} className="text-center text-lg-start">
                                    <Title>Faça seu Login</Title>
                                </Col>
                                <Col xs={12} className="mx-3">
                                    <Form className="mt-5">
                                        <Row>
                                            <Form.Group>
                                                <Input type="email" placeholder="email" />
                                            </Form.Group>
                                        </Row>
                                        <Row>
                                            <Form.Group>
                                                <Input type="password" className="mt-2" placeholder="senha" />
                                            </Form.Group>
                                        </Row>
                                        <Row className="justify-content-center mt-3">
                                            <Col xs={12} className="d-flex justify-content-center text-center">
                                                <Form.Group>
                                                    <Form.Check required label={<p>Li e aceito os <a href='www.google.com'>termos de serviço</a></p>} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6}>
                                                <Button backgroundColor="darkBlue" color="white" css={{ width: "100%" }} type="button" onClick={() => navigate("/home")}>Entrar</Button>
                                            </Col>
                                            <Col xs={6}>
                                                <Button backgroundColor="darkBlue" color="white" css={{ width: "100%" }} type="button">Cadastrar</Button>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-center mt-3">
                                            <Col xs={12} className="text-center">
                                                <p>Esqueceu seu <a href='www.google.com'>nome de usuário ou senha?</a></p>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={7} style={{
                            position: "relative"
                        }}>
                            <div style={{
                                position: "absolute",
                                display: "block",
                                width: "60%",
                                height: "600px",
                                backgroundColor: "#0e002e",
                                borderRadius: "50%",
                                zIndex: "-1",
                                top: 65
                            }}></div>
                            <img src={Mulher} style={{
                                display: "block",
                                borderRadius: "50%",
                                width: "80%",
                                height: "700px",
                                margin: "0 auto"
                            }} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
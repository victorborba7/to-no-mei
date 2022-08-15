import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button, HeaderStyle, Title, Text } from "@/styles/GlobalStyle";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa"
import { styled } from "@/stitches.config";
import LogoAzul from "@/assets/logo_azul_verde.png"
import Mulher from "@/assets/mulher_login.webp"
import { useNavigate } from "react-router-dom";
import * as Dialog from '@radix-ui/react-dialog';

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

const Overlay = styled(Dialog.Overlay, {
    background: 'rgba(0 0 0 / 0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'grid',
    placeItems: 'center',
    overflowY: 'auto',
  });
  
  const Content = styled(Dialog.Content, {
    minWidth: 300,
    background: 'white',
    padding: 30,
    borderRadius: 4,
  });

export default function Login() {
    return (
        <Container fluid>
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
                                    <Title>Esqueci minha senha</Title>
                                    <Text>Para recuperar sua senha, informe seu endereço de email ou CPF/CNPJ que nós enviaremos um link para alteração da senha</Text>
                                </Col>
                                <Col xs={12}>
                                    <Form className="mt-2">
                                        <Row>
                                            <Form.Group>
                                                <Input type="text" placeholder="email ou CPF/CNPJ" />
                                            </Form.Group>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col xs={6}>
                                                <Dialog.Root>
                                                    <Dialog.Trigger asChild>
                                                        <Button bgColor="darkBlue" color="white" type="button">Enviar</Button>
                                                    </Dialog.Trigger>
                                                    <Dialog.Portal>
                                                        <Overlay>
                                                            <Content className="text-center p-5">
                                                                <Title>Tudo pronto!</Title>
                                                                <Text font="15">Enviaremos um link de redefinição de senha para o email cadastrado.</Text>
                                                            </Content>
                                                        </Overlay>
                                                    </Dialog.Portal>
                                                </Dialog.Root>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={7} style={{
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
                                width: "100%",
                                maxWidth: "700px",
                                margin: "0 auto"
                            }} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
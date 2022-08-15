import React, { useState, useCallback, CSSProperties, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button, HeaderStyle, Title, Text } from "@/styles/GlobalStyle";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa"
import { styled } from "@/stitches.config";
import LogoAzul from "@/assets/logo_azul_verde.png"
import { useNavigate } from "react-router-dom";
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'

const Input = styled(Form.Control, {
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
});


export default function Login() {
    const navigate = useNavigate();  
    const [index, set] = useState(0)
    const nextStep = useCallback(() => set(state => state + 1), [])
    const transRef = useSpringRef()
    const transitions = useTransition(index, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-50%,0)' },
    })
    useEffect(() => {
        transRef.start()
    }, [index])

    const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
        ({ style }) => <Col xs={12}>
            <animated.div style={{ ...style }}>
                <Form className="mt-2">
                    <Row className="flex-column justify-content-between align-items-center">
                        <Col xs={10} className="mb-3">
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Input type="email" placeholder="exemplo@tonomei.com.br" />
                            </Form.Group>
                        </Col>
                        <Col xs={10} className="mb-3">
                            <Form.Group>
                                <Form.Label>Senha</Form.Label>
                                <Input type="password" placeholder="********" />
                            </Form.Group>
                        </Col>
                        <Col xs={10} className="mb-3">
                            <Form.Group>
                                <Form.Label>Confirme sua senha</Form.Label>
                                <Input type="password" placeholder="********" />
                            </Form.Group>
                        </Col>
                        <Col xs={10} className="mb-3">
                            <Form.Group>
                                <Form.Check required label={<p>Li e aceito os <a href='www.google.com'>termos de serviço</a></p>} />
                            </Form.Group>
                        </Col>
                        <Col xs={10}>
                            <Row>
                                <Col xs={6}>
                                    <Button bgColor="lightYellow" color="white" type="button" onClick={() => navigate("/")}>Cancelar</Button>
                                </Col>
                                <Col xs={6}>
                                    <Button bgColor="darkBlue" color="white" type="button" onClick={() => nextStep()}>Continuar</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </animated.div>
        </Col>,
        ({ style }) => <Col xs={12}>
            <animated.div style={{ ...style }}>
                <Form className="mt-2">
                    <Row className="flex-column justify-content-between align-items-center">
                        <Col xs={10} className="mb-3">
                            <Form.Group>
                                <Form.Label>CNPJ</Form.Label>
                                <Input type="text" placeholder="00.000.000/0000-00" />
                            </Form.Group>
                        </Col>
                        <Col xs={10} className="mb-3">
                            <Form.Group>
                                <Form.Label>Nome Empresaria</Form.Label>
                                <Input type="text" placeholder="To No Mei" />
                            </Form.Group>
                        </Col>
                        <Col xs={10} className="mb-3">
                            <Form.Group>
                                <Form.Label>CPF</Form.Label>
                                <Input type="text" placeholder="000.000.000-00" />
                            </Form.Group>
                        </Col>
                        <Col xs={10} className="mb-3">
                            <Form.Group>
                                <Form.Label>Nome do Empresário</Form.Label>
                                <Input type="text" placeholder="José Bonifácio Juanlissimo de Pereira" />
                            </Form.Group>
                        </Col>
                        <Col xs={10} className="mb-3">
                            <Form.Group>
                                <Form.Label>Telefone</Form.Label>
                                <Input type="text" placeholder="(00) 0000-0000" />
                            </Form.Group>
                        </Col>
                        <Col xs={10}>
                            <Row>
                                <Col xs={6}>
                                    <Button bgColor="lightYellow" color="white" type="button" onClick={() => navigate("/")}>Cancelar</Button>
                                </Col>
                                <Col xs={6}>
                                    <Button bgColor="darkBlue" color="white" type="button">Finalizar Cadastro</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </animated.div>
        </Col>,
    ]
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
                        <Col xs={12} lg={12} className="d-flex flex-column justify-content-around align-items-center">
                            <Row>
                                <Col xs={3}>
                                    <Logo src={LogoAzul} />
                                </Col>
                            </Row>
                            <Row className="flex-column justify-content-between">
                                <Col xs={12} className="text-center text-lg-start">
                                    <Title font="30">Cadastro de usuário</Title>
                                    <Text>Selecione seu email e crie sua senha.</Text>
                                </Col>
                                {transitions((style, i) => {
                                    const Page = pages[i]
                                    return <Page style={style} />
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
import React from "react";
import { Header } from "@/components/Header"
import { Menu } from "@/components/Menu"
import { Footer } from "@/components/Footer"
import { Col, Container, Row, Table, Form } from "react-bootstrap";
import { styled } from "@/stitches.config";
import { Title, Subtitle, Text, Button } from "@/styles/GlobalStyle";
import * as Tabs from '@radix-ui/react-tabs';

const MeiSection = styled(Row, {
    paddingTop: 75,
    backgroundColor: "#F8F9FA",
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

const DASTable = styled(Table, {
    border: "2px solid black !important",
    borderRadius: "50px !important"
});

const DASThead = styled("thead", {
    borderBottom: "2px solid black !important",
    backgroundColor: "#F8F9FA"
});

const DASTbody = styled("tbody", {
});

const DASTd = styled("td", {
    border: "1px solid #F8F9FA"
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
                    <Text>Rafael Andrade do Nascimento 000.000.999-90</Text>
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
            <Row className="justify-content-center mt-5">
                <Col xs={8}>
                    <Row className="flex-column justify-content-between align-items-center text-start">
                        <Col xs={12}>
                            <Title font="30">Gerador de DAS</Title>
                            <Text font="15">Rafael Andrade do Nascimento 000.000.999-90</Text>
                        </Col>
                        <Col xs={12}>
                            <Row>
                                <Col xs={6}></Col>
                                <Col xs={6}></Col>
                            </Row>
                        </Col>
                        <Col xs={12}>
                            <DASTable className="text-center">
                                <DASThead>
                                    <tr>
                                        <th></th>
                                        <th>Mês</th>
                                        <th>INSS</th>
                                        <th>Situação</th>
                                        <th>Juros</th>
                                        <th>Total</th>
                                        <th>Vencimento</th>
                                    </tr>
                                </DASThead>
                                <DASTbody>
                                    <tr>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Janeiro</DASTd>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Pago</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                    </tr>
                                    <tr>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Fevereiro</DASTd>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Pago</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                    </tr>
                                    <tr>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Março</DASTd>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Pago</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                    </tr>
                                    <tr>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Abril</DASTd>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Pago</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                    </tr>
                                    <tr>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Maio</DASTd>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Pago</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                    </tr>
                                    <tr>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Junho</DASTd>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Pago</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                    </tr>
                                    <tr>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Julho</DASTd>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Pago</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                    </tr>
                                    <tr>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Agosto</DASTd>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Pago</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                    </tr>
                                    <tr>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Setembro</DASTd>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Pago</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                    </tr>
                                    <tr>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Outubro</DASTd>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Pago</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                    </tr>
                                    <tr>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Novembro</DASTd>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Pago</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                    </tr>
                                    <tr>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Dezembro</DASTd>
                                        <DASTd><Form.Check /></DASTd>
                                        <DASTd>Pago</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                        <DASTd>-</DASTd>
                                    </tr>
                                </DASTbody>
                            </DASTable>
                        </Col>
                        <Col xs={3}>
                            <Button backgroundColor="mintGreen" color="white" css={{ width: "100%" }}>Gerar PDF</Button>
                        </Col>
                    </Row>
                </Col>
            </Row >
            <Footer />
        </Container >
    )
}
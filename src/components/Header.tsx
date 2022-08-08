import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { HeaderStyle } from "@/styles/GlobalStyle";
import LogoBranco from "@/assets/logo_branco.png"
import { styled } from "@/stitches.config";
import { MdPersonOutline } from "react-icons/md";
import { CgHome } from "react-icons/cg";
import { GiExitDoor } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

// type TweetProps = {
//     text: string;
// }

const Input = styled(Form.Control, {
    borderRadius: "1rem !important",
    padding: "15px 20px !important",
    backgroundColor: "#f1f0f2 !important",
    color: "#0e002e !important",
    border: "1px solid #0e002e !important",
    '&:focus': {
        boxShadow: "none !important",
    },
});

const Logo = styled("img", {
    width: "50%"
});

const LinkStyle = styled(Link, {
    color: "#FFFFFF",
    textDecoration: "none",
    '&:hover': {
        color: "#FFFFFF",
    }
});

const IconSubtitle = styled("p", {
    margin: 0
});

export function Header() {
    return (
        <HeaderStyle className="justify-content-between align-items-center py-2 px-2">
            <Col xs={3}>
                <Logo src={LogoBranco} />
            </Col>
            <Col xs={4}>
                <Input type="text" />
            </Col>
            <Col xs={3}>
                <Row className="justify-content-between">
                    <Col xs={3} className="text-center">
                        <LinkStyle to="/Home">
                            <CgHome color="white" size="30px" />
                            <IconSubtitle>Home</IconSubtitle>
                        </LinkStyle>
                    </Col>
                    <Col xs={3} className="text-center">
                        <LinkStyle to="/Home">
                            <IoSettingsOutline color="white" size="30px" />
                            <IconSubtitle>Configurações</IconSubtitle>
                        </LinkStyle>
                    </Col>
                    <Col xs={3} className="text-center">
                        <LinkStyle to="/Home">
                            <MdPersonOutline color="white" size="30px" />
                            <IconSubtitle>Minha Conta</IconSubtitle>
                        </LinkStyle>
                    </Col>
                    <Col xs={3} className="text-center">
                        <LinkStyle to="/">
                            <GiExitDoor color="white" size="30px" />
                            <IconSubtitle>Saída</IconSubtitle>
                        </LinkStyle>
                    </Col>
                </Row>
            </Col>
        </HeaderStyle>
    );
}
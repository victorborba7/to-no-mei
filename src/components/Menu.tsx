import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { styled } from "@/stitches.config";
import { Row, Col } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom";
import { CgHome } from "react-icons/cg";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsArchive, BsQuestionLg, BsChatSquareDots } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi"



const SliderHodler = styled(Row, {
    backgroundColor: "#F8F9FA",
});

const LinkStyle = styled(Link, {
    padding: 5,
    color: "#00a1a0",
    textDecoration: "none",
    borderRadius: "5px 5px 0 0",
    '&:hover': {
        color: "#FFFFFF !important",
        backgroundColor: "#0e002e"
    }
})

const IconSubtitle = styled("p", {
    margin: 0
})


export function Menu() {
    let customSlider: any = React.createRef<Slider>();

    const gotoNext = () => {
        customSlider.current.slickNext()
    }

    const gotoPrev = () => {
        customSlider.current.slickPrev()
    }
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1
    };

    return (
        <SliderHodler className="justify-content-center align-items-center pt-3 px-5">
            <Col xs={1}>
                <IoIosArrowBack color="#000000" size="30px" cursor={"pointer"} onClick={() => gotoPrev()} />
            </Col>
            <Col xs={10}>
                <Slider ref={customSlider} {...settings}>
                    <LinkStyle to="/mei">
                        <div className="text-center">
                            <CgHome color="#00a1a0" size="30px" />
                            <IconSubtitle>MEI</IconSubtitle>
                        </div>
                    </LinkStyle>
                    <LinkStyle to="/home">
                        <div className="text-center">
                            <AiOutlineFileAdd color="#00a1a0" size="30px" />
                            <IconSubtitle>Cadastros</IconSubtitle>
                        </div>
                    </LinkStyle>
                    <LinkStyle to="/home">
                        <div className="text-center">
                            <BsArchive color="#00a1a0" size="30px" />
                            <IconSubtitle>Estoque</IconSubtitle>
                        </div>
                    </LinkStyle>
                    <LinkStyle to="/home">
                        <div className="text-center">
                            <FaRegMoneyBillAlt color="#00a1a0" size="30px" />
                            <IconSubtitle>Gastos</IconSubtitle>
                        </div>
                    </LinkStyle>
                    <LinkStyle to="/home">
                        <div className="text-center">
                            <FaRegMoneyBillAlt color="#00a1a0" size="30px" />
                            <IconSubtitle>Vendas</IconSubtitle>
                        </div>
                    </LinkStyle>
                    <LinkStyle to="/home">
                        <div className="text-center">
                            <HiOutlineDocumentReport color="#00a1a0" size="30px" />
                            <IconSubtitle>Relatórios</IconSubtitle>
                        </div>
                    </LinkStyle>
                    <LinkStyle to="/home">
                        <div className="text-center">
                            <BsQuestionLg color="#00a1a0" size="30px" />
                            <IconSubtitle>Dúvidas</IconSubtitle>
                        </div>
                    </LinkStyle>
                    <LinkStyle to="/home">
                        <div className="text-center">
                            <BsChatSquareDots color="#00a1a0" size="30px" />
                            <IconSubtitle>Fale Conosco</IconSubtitle>
                        </div>
                    </LinkStyle>
                </Slider>
            </Col>
            <Col xs={1}>
                <IoIosArrowForward color="#000000" size="30px" cursor={"pointer"} onClick={() => gotoNext()} />
            </Col>
        </SliderHodler>
    );
}
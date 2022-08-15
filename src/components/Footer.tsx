import React from "react";
import { Text } from "@/styles/GlobalStyle";
import { Container } from "react-bootstrap";

export function Footer() {
    return (
        <div className="mt-5">
            <Text>Não achou o que procurava?</Text>
            <Text>Fale conosco pelo chat ou <a href="www.google.com">clique aqui</a></Text>
        </div>
    )
}
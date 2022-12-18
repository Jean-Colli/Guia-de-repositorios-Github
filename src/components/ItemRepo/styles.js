import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3{
        font-size: 32px;
        color: #FAFAFA;
    }

    p{
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
        
    }

    a.remover {
        color: #FF0000;
        margin-top: 20px;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`

export const Buttons = styled.div`
    display: inline;

    button.repositorio{
        background-color: #1E90FF;
        border-radius: 30px;
        padding: 10px;
        margin-right: 25px;
        border: 0;
        cursor: pointer;

        a {
            text-decoration: none;
            font-size: 15px;
            color: #473C8B;
            font-weight: bold
        }
    }

    button.remover{
        background-color: #EE0000;
        border-radius: 30px;
        padding: 10px;
        border: 0;
        cursor: pointer;
        font-size: 15px;
        color: #473C8B;
        font-weight: bold

        
    }
`

export const Repositorio = styled.a`
    background-color: #1E90FF;
    border-radius: 30px;
    padding: 10px;
    margin-right: 25px;
    border: 0;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    color: #473C8B;
    font-weight: bold;
`
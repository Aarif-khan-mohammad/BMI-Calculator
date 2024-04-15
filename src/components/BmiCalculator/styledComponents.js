import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#1E0342;
    width: 100%;
    height: 100vh;
    gap:2rem;
`

export const Heading = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-family:"Roboto";
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const BmiSheet = styled.img`
    width:50%;

    @media(max-width:786px){
        width:55%;
    }
`

export const BmiContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 55%;
    background-color:#35374B;
    padding: 1rem;
    border-radius:1rem;

    @media(max-width:786px){
        width:58%;
        height: 50%;
    }
`
export const BmiContainerSub = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:110%;
    height: 75%;
    gap:2rem;

    @media screen and (max-width: 768px) {
        width:100%;
        height: 75%;
    }
    
`

export const HeightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:40%;
    height: 90%;
    border-radius:0.5rem;
    background-color:#1E0342;
    @media(max-width: 768px) {
        flex-direction: column;
        width:58%;
        height: 90%;
    }

`

export const MiniHeading = styled.h4`
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    font-family:"Roboto;

    @media(max-width: 768px) {
        font-size: 0.8rem;
    }
`


export const MeasureHeadingSub = styled.span`
    font-weight: bold;
    font-family:"Roboto;
`




export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap:1rem;
    @media(max-width: 768px) {
        gap:1rem;
    }
`
export const Buttons = styled.button`
    width: 100%;
    height: 55%;
    border-radius:50%;
    background-color: #35374B;
    color:white;
    border: 2px solid white;
    margin-bottom:1rem;
    pointer:cursor;
    
    @media(max-width : 768px){
        width: 48%;
        height: 50%;
    }
`

export const TotalBmis = styled.h2`
    color: #fff !important;
    font-size: 2rem;
    font-weight: bold;
    font-family:"Roboto;
    @media(max-width : 768px){
        font-size:1rem;
        color:#fff;
    }
`

export const MetersHeading = styled.h1`
    color:#fff;
    font-size:2rem;

    @media(max-width : 768px){
        font-size:1rem;
        color:#fff;
    }
`

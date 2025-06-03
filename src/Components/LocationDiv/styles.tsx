import styled from "styled-components"

export const Icon = styled.img`
    height: 50px;
    width: 50px;
    padding: 10px;
`

export const Logo = styled.img`
    height: 80px;
    width: 80px;
`

export const Div = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f7f7f7;
    min-width: 49%;
    border-radius: 8px;
    border: solid #f7f7f7 1px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    
    &:hover {
        border: solid #FF5926 1px;
        box-shadow: 0px 6px 12px rgba(255, 89, 38, 0.2);
    }
`

export const Title = styled.p`
    color: #000000;
`
export const Description = styled.p`
    font-size: 14px;
    color: #474747;
`

export const Text = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    padding: 0px 20px;
    gap: 5px;
`
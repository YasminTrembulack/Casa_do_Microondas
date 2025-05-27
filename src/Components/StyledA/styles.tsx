
import styled from 'styled-components';

export const ALink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 20px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        display: block;
        transition: all 0.3s ease;
        bottom: 0; 
        left: 0; 
        background-color: #ffd9ae; 
    }

    &:hover::after {
        width: 100%; 
    }
`;
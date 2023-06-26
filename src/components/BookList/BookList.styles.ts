
import styled, { keyframes } from 'styled-components';


export const ArrowContainer = styled.div`
  width: 434px;
  height: 330px; // Aumentamos el alto para dar espacio a la flecha.
  position: absolute;
  right: 10px;
  top: 70px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #E3E3E3;
  }
`;

export const BooksListContainer = styled.div`
    width: 434px;
    height: 320px;
    top:8px;
    overflow: auto;
    position: absolute;
    background-color: #E3E3E3;
    right: 10px;
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #bfbfbf;
    width: 50px;
    height: 50px;
    animation: ${spin} 2s linear infinite;
    position: absolute;
    top: 38%;
    left: 43%;
    transform: translate(-50%, -50%);
`;

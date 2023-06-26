import styled from "styled-components";

export const BookCardContainer = styled.div`
  &::after{
    clear:both;
    content: '';
    display: block;
  }
`;

export const BookImage = styled.img`
    object-fit: cover;
    float: left;
    width: 72px;
    height: 118px;
    margin-right: 10px;
    margin-left: 20px;
`;

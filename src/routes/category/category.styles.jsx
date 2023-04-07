import styled from "styled-components";
import { Link } from "react-router-dom";
export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const ReturnLink = styled(Link)`
  font-size: 20px;
  cursor: pointer;

  img {
    width: 50px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

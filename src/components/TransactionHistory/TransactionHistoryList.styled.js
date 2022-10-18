import styled from 'styled-components';

export const TableData = styled.td`
  padding: 5px 10px;
  border: 1px solid #eee;
  text-align: center;
`;

export const TableDataZebraColor = styled.tr`
  :nth-child(2n + 1) {
    background-color: #f2e2f9;
  }

  :nth-child(2n) {
    background-color: #fff;
  }
`;

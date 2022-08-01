import styled from '@emotion/styled'

export const TransactionTable = styled.table`
 font-size: 10px;
  width: 100%;`

export const TransactionHead = styled.thead`
   background-color:#bc9e75`;


   export const TransactionInfo = styled.td`
  text-align: center;
   border: 1px solid grey;
`;

export const TransactionRow = styled.tr`
  &:nth-of-type(2n) {
    background-color: #afeeee;
  }`;
import styled from '@emotion/styled'


export const SectionTitle = styled.h2`
 font-size: 24px;
        padding:  20px;
        margin-bottom:10px;
        text-align: center;
        `

export const SectionList = styled.ul`
        display: flex;
align-items: center;
    justify-content: space-between;
    border: 1px solid #ececec;`


export const SectionCard = styled.li`
width:100%;
padding:4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
width: calc(100% / 5);
    border: 1px solid black;
    background-color: ${() => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}};`


export const StatisticsNameInfo = styled.span`
      margin-bottom: 8px;
      font-size: 20px; `






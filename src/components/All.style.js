import styled from "styled-components";
export const DivComponent = styled.div`
  width: 600px;
  height : 400px ;
  background-color : salmon;
  display:grid;
  justify-content : center;
  margin : 200px auto;

`
export const ButtonComponent = styled.button`
    background : palevioletred;
    border-radius : 3px ;
    border : 2px solid gray;
    color: white;
    font-size : 20px;
    margin : 10px;
    padding : 10px 20px;

`
export const InputComponet = styled.input`
    font-size: 18px;
    padding: 10px 20px;
    margin: 20px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    ::placeholder {
      color: palevioletred;
    }
`
export const ParaComponent = styled.p`

font-size : 24px;
color: papayawhip;
text-align : center;

`
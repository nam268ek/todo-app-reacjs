import styled from "styled-components";
import { Input } from "reactstrap";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Box = styled.div`
  display: flex;
  column-gap: 10px;
  flex-direction: row;
`;
export const Header = styled.div`
  width: 600px;
  padding: 14px 0;
`;
export const Body = styled.div`
  width: 600px;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 10px;
  margin-bottom: 10px;
`;
export const Layout = styled.div`
  width: 600px;
`;
export const Div = styled.div`
  ${(props) => props.width && `width: ${props.width}%`};
  ${(props) =>
    props.flex &&
    `
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  `};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  column-gap: 10px;
`;
export const CInput = styled(Input)`
  ${(props) => (props.done ? "text-decoration: line-through;" : "")}
`;

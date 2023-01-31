import styled from "styled-components";
import { memo } from "react";

// model
interface IProps {
  onDecrease: () => void;
}

// styled
const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
`;

const Button = styled.button`
  background-color: #2563eb;
  border: none;
  padding: 20px 40px;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;

function Body(props: IProps): JSX.Element {
  return (
    <Main>
      <Button onClick={props.onDecrease}>count down</Button>
    </Main>
  );
}

export default memo(Body);

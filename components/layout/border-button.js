import styled from "styled-components";

const Btn = styled.span`
  margin-top: 0.8rem;
  background-image: linear-gradient(135deg, #3c50c1 0%, #22b6b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 2px solid;
  border-image: linear-gradient(135deg, #3c50c1 0%, #22b6b3 100%);
  border-image-slice: 1;
  font-weight: bold;
  line-height: 1;
  display: flex;
  jusify-content: center;
  padding: 0.8rem;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
  &:hover {
    -webkit-text-fill-color: #a9bed2;
    text-decoration: none;
    &::after {
      width: 100%;
    }
  }
`;

const P = styled.p`
  margin: 0 auto;
  font-size: inherit;
`;

const BorderButton = ({ children }) => {
  return (
    <Btn>
      <P>{children}</P>
    </Btn>
  );
};
export default BorderButton;

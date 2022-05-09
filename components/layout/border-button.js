import styled from "styled-components";
import widths from "../../styling/device-sizes";

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
  padding: 0.6rem;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
  &:hover {
    -webkit-text-fill-color: #a9bed2;
    text-decoration: none;
    &::after {
      width: 100%;
    }
  }
  @media (min-width: ${widths.tab}) {
    margin: 1rem;
  }
`;

const ButtonText = styled.p`
  margin: 0 auto;
  font-size: 16px;
  @media (min-width: ${widths.laptop}) {
    font-size: 18px;
  }
  @media (min-width: ${widths.desktop}) {
    font-size: 1.25rem;
  }
`;

const BorderButton = ({ children }) => {
  return (
    <Btn>
      <ButtonText>{children}</ButtonText>
    </Btn>
  );
};
export default BorderButton;

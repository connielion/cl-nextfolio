import styled from "styled-components";

const Btn = styled.span`
  margin-top: 0.8rem;
  background-image: linear-gradient(135deg, #3c50c1 0%, #22b6b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 2px solid;
  border-image: linear-gradient(135deg, #3c50c1 0%, #22b6b3 100%);
  border-image-slice: 1;
  padding: 0.8rem 1.25rem;
  display: inline-block;
  position: relative;
  font-weight: bold;
  line-height: 1;
  display: flex;
  jusify-content: center;
  text-align: center;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
  &:hover {
    -webkit-text-fill-color: #a9bed2;
    text-decoration: none;
    &::after {
      width: 100%;
    }
  }
`;

const BorderButton = ({ children }) => {
  return <Btn>{children}</Btn>;
};
export default BorderButton;

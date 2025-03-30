import { colors } from "@/assets/monks/colors";
import styled from "styled-components";

const Footer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: ${colors.dark};
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: .625rem;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
const SocialNetWork = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin: 0.25rem;
`;
export { Footer, SocialNetWork };

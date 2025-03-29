import styled from "styled-components";
import img from "@/assets/signature.svg";
const SignatureContainer = styled.img`
  position: relative;
  bottom: 0; /* Alinha na parte inferior */
  left: 30%; /* Move a div para o centro do contêiner */
  transform: translateX(-50%); /* Corrige a centralização exata */
  color: white;
  padding: 1.25rem;
  text-align: center;
`;
const Signature = () => <SignatureContainer src={img} />;

export { Signature };

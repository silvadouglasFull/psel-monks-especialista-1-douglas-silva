import img from "@/assets/manComputer.svg";
import {
  ManComputerContainer,
  ManDiv,
} from "@/components/img/manComputer/styles";
const ManComputer = () => {
  return (
    <ManDiv>
      <ManComputerContainer src={img} />
    </ManDiv>
  );
};
export { ManComputer };

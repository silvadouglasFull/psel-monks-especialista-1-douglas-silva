import {
  FormImageContainer,
  ManDiv,
} from "@/components/img/formImage/styles";
import { formImage } from "@/config/flavor";
const FormImage = () => {
  return (
    <ManDiv>
      <FormImageContainer src={formImage} />
    </ManDiv>
  );
};
export default FormImage

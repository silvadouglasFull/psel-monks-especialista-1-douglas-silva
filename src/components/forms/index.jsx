import { TextInput } from "@/components/forms/input";
import { FormContainer } from "@/components/forms/styles";
import { Group } from "@/components/forms/group";
import { Label } from "@/components/forms/label";
const Form = (props) => {
  return <FormContainer {...props}>{props.children}</FormContainer>;
};
Form.TextInput = TextInput;
Form.Group = Group;
Form.Label = Label;
export default Form;

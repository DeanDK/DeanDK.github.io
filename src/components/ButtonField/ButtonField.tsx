import React from "react";
import { Button } from "semantic-ui-react";

type ButtonProps = {
  handleSubmit: () => void;
};

const ButtonField = ({ handleSubmit }: ButtonProps) => (
  <Button attached="bottom" onClick={handleSubmit}>
    Submit URL
  </Button>
);

export default ButtonField;

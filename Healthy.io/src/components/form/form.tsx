import { useState } from "react";
import PrimaryInput from "../inputs/PrimaryInput";
import { Button } from "@chakra-ui/react";
import "./form.css";
import useIdentityMutation from "../../hooks/useIdentityMutation";

export default function Form() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const { mutate } = useIdentityMutation();

  const submit = () => {
    mutate({
      email,
      firstName,
      secondName,
    });
  };
  return (
    <form>
      <div className="Title">
        <h2>Inscreva-se</h2>
      </div>
      <div className="nameContainer">
        <PrimaryInput
          placeholder="Levid"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          name={firstName}
          label="Digite seu nome"
        />
        <PrimaryInput
          placeholder="Lima"
          value={secondName}
          onChange={(event) => setSecondName(event.target.value)}
          name={secondName}
          label="Digite seu sobrenome"
        />
      </div>
      <PrimaryInput
        placeholder="levidlima@e-mail.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        name={email}
        label="Digite seu e-mail"
      />
      <Button colorScheme="teal" variant="outline" onClick={submit}>
        Enviar
      </Button>
    </form>
  );
}

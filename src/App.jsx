import { useState } from "react";
import axios from "axios";
import {
  FormControl,
  Text,
  Button,
  Stack,
  Input,
} from "@chakra-ui/react";
import CompanyCard from "./components/CompanyCard";
import { camelizeKeys } from 'humps';


function App() {
  const [cnpj, setCNPJ] = useState("");
  const [companyInfo, setCompanyInfo] = useState();

  const onClick = async () => {
    const url = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`;
    try {
      const response = await axios.get(url);
      const convertRes = camelizeKeys(response.data);
      console.log(convertRes);
      setCompanyInfo(convertRes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Text m={12} fontSize="4xl">
        Busque CNPJ
      </Text>
      <Stack
        display="flex"
        flexDirection={"row"}
        alignItems="center"
        m={12}
        spacing={4}
      >
        <FormControl>
          <Input
            onChange={(e) => setCNPJ(e.target.value)}
            type="number"
            placeholder="Busque pelo CNPJ desejado"
          />
        </FormControl>
        <Button onClick={onClick} colorScheme="teal" size="lg">
          Buscar
        </Button>
      </Stack>

      {companyInfo && <CompanyCard companyInfo={companyInfo}/>}
    </>
  );
}

export default App;

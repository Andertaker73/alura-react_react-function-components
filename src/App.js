import { Container, Typography } from "@mui/material"
import { Component } from "react"
import "./App.css"
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro"
import "@fontsource/roboto"

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    )
  }
}

function aoEnviarForm(dados) {
  // aqui posso fazer o que desejar com as informações obtidas
  // mas para esse curso estamos apenas exibindo no console do navegador
  console.log(dados)
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

export default App

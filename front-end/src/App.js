import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Center,
  Input,
  Button,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import logo from './hack-grrrl-logo.jpeg';

import { useQuery, gql } from '@apollo/client';

const TASKS = gql`
  query tasks {
    tasks {
      title
      state
    }
  }
`;

function App() {
  const [textInput, setTextInput] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const { loading, error, data } = useQuery(TASKS);

  console.log(loading, error, data?.tasks);

  const digitouTeclado = e => {
    setTextInput(e.target.value);
  };

  const clicarBotao = () => {
    setTarefas([...tarefas, textInput]);
  };

  const cliqueiTarefa = () => {
    alert('cliquei tarefa');
  };

  return (
    <ChakraProvider theme={theme}>
      <Center h="500px" display="flex" flexDir="column">
        <Box maxW="md">
          <VStack>
            <Box boxSize="sm">
              <Image src={logo} boxSize="xs" objectFit="cover" />
            </Box>
            <Text>Hack Grrrl Workshop</Text>
            <Input
              value={textInput}
              onChange={digitouTeclado}
              placeholder="Escreva sua Task"
            ></Input>
            <Button onClick={clicarBotao}>Adicionar Task</Button>
          </VStack>
        </Box>
        <Box mt="5">
          {data?.tasks.map(tarefa => (
            <Center
              onClick={cliqueiTarefa}
              w="sm"
              borderWidth="1px"
              borderRadius="lg"
              p="3"
              m="2"
            >
              <HStack>
                <Badge p="1" colorScheme="green" textAlign="center">
                  TO-DO
                </Badge>
                <Text fontWeight="bold" textAlign="center" p="">
                  {tarefa.title}
                </Text>
              </HStack>
            </Center>
          ))}
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;

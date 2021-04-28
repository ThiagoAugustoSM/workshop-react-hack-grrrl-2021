import { useEffect, useState } from 'react';
import { 
  Input, 
  Button, 
  Stack,
  Box,
  Center,
  Image,
  Text,
  Badge,
  HStack
} from "@chakra-ui/react"
import logo from "./assets/hack-grrrl-logo.jpeg";

import { useQuery, gql } from '@apollo/client';

const TASKS = gql`
  query tasks {
    tasks {
      title
    }
  }
`;

function App() {
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState([]);

  const { loading, error, data } = useQuery(TASKS);

  useEffect(() => {
    if(data){
      setTaskList(data.tasks)
    }
  }, [data]);

  if (loading) console.log("Carregando dados GraphQL...");
  if (error) console.log(`Error GraphQL: ${error}`);
  
  const digitarTexto = (e) => {
    setInputText(e.target.value)
  }

  const clickBotao = () => {
    setTaskList([...taskList, {title: inputText}])
  }

  const deletarTask = (taskItem) => {
    let newTaskList = taskList.filter(task => task.title !== taskItem.title)
    console.log(taskItem, newTaskList)
    setTaskList(newTaskList)
  }

  return (
    <div>
      <Center h="500px" color="white" m="5" display="flex" flexDir="column">
        <Box maxW="md" borderWidth="1px" borderRadius="lg" p={4}>
          <Stack spacing={4}>
            <Box boxSize="xs">
              <Image src={logo} boxSize="xs" objectFit="cover" alt="Logo Hackgrrrl" />
            </Box>
            <Text fontWeight="bold" textAlign="center">
              Tasks Hack Grrrl
            </Text>
            <Input
              placeholder="Digite aqui a sua atividade"
              value={inputText}
              onChange={digitarTexto}
            />
            <Button 
              colorScheme="blue" 
              onClick={clickBotao}
            >
              Adicionar Atividade
            </Button>
          </Stack>
        </Box>

        <Box mt="5">
          {taskList.map((taskItem => 
            <Center w="sm" borderWidth="1px" borderRadius="lg" p="3" m="2"
              onClick={() => deletarTask(taskItem)}
            >
              <HStack>
                <Badge p="1" colorScheme="green" textAlign="center">
                  TO-DO
                </Badge>
                <Text fontWeight="bold" textAlign="center" p="">
                  {taskItem.title} 
                </Text>
              </HStack>
            </Center>
          ))}
        </Box>
      </Center>
    </div>
  );
}

export default App;

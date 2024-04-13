import { Box, Button, Input, Card, Image, HStack, VStack, Heading } from "@chakra-ui/react";
import React from 'react';
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <Box 
        backgroundImage={
          "url(https://images.freecreatives.com/wp-content/uploads/2016/02/Wrapped-Old-Paper-Background-For-Free.jpg)"
        } 
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        w="100%"
        h={"700"}
        justifyContent="center"
        alignItems="center"
      >
        <HStack 
        bgGradient="linear(to-r, rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.7))"
        p={"10px"} 
        borderRadius={"10px"}
        boxShadow={'5xl'}
        >
          <Image 
            borderRadius={"15px"}
            src="https://i.pinimg.com/564x/4a/a7/72/4aa77231e8d9f541d9a2cc4fb955e132.jpg" 
            maxW="500px" 
            maxH="500px" 
            objectFit="contain"
          />
          <Card 
          bg="rgba(139, 69, 19, 0.5)" 
          p={5}
          flexGrow="1"
          minWidth={"400px"}
          >
            <Heading color={'white'}>Iniciar sesión</Heading>
            <VStack spacing={8} mb={8}>
              <Input placeholder="Usuario" variant='flushed'></Input> 
              <Input placeholder="Contraseña" variant='flushed'></Input>
              <Button 
              bg="#8B0000" 
              color="#ffffff" 
              onClick={() => navigate("/")}>
                Iniciar sesión
              </Button>
            </VStack>
            <Button 
            variant="link"
            onClick={() => navigate("/signup")}
            color={'white'} 
            >
              ¿No tienes una cuenta?
            </Button>
          </Card>
        </HStack>
      </Box>
    </>
  );
}

export default SignIn;

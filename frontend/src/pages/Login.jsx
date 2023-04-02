import React from 'react'
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    Image
  } from '@chakra-ui/react';
import Signup from '../component/Signup';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [Lemail,setLemail] = useState("")
    const [Lpassword,setLpassword] = useState("");
    const nav = useNavigate()


    const handleLogin = async () => {
         const payload = {email : Lemail,password : Lpassword};
        let res= axios.post("http://localhost:8080/login",payload)
        .then((res)=>localStorage.setItem("cointab-token", JSON.stringify({token : res.data.token, user: res.data.user})))
        .then((res)=>alert("login sucessfully")).then((res)=>nav('/home'))
        .catch((e)=>alert(e.response.data.message))
    }

  return (
    <Container
    maxW="lg"
    py={{ base: '12', md: '24' }}
    px={{ base: '0', sm: '8' }}
   
  >
    <Signup/>
    <Stack spacing="8">
      <Stack spacing="6">
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Box margin="auto">
           
          </Box>
          <Heading size={{ base: 'xs', md: 'sm' }}>
            Log in to your account
          </Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Don't have an account?</Text>
            <Box color={'blue.400'} fontSize="xl">
              {/* <NavLink colorScheme="blue" to="/signup">
                Sign up
              </NavLink> */}
            </Box>
          </HStack>
        </Stack>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg-surface' }}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email" placeholder="Enter your email" onChange={(e) => setLemail(e.target.value)}
                
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Password</FormLabel>
              <Input
               type="password" placeholder="Enter your password" onChange={(e) => setLpassword(e.target.value)}
              />
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button
              variant="primary"
              onClick={handleLogin}
              bgColor="blue.400"
              color={'white'}
            >
              Log In
            </Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                {/* or continue with <Link to="/signup">Sign In</Link> */}
              </Text>
              <Divider />
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
)
}

export default Login

// .then((res)=>
// localStorage.setItem("cointab-token", JSON.stringify({token : res.token, user: res.user})))
// .then((res)=>alert("login sucessfully")).then((res)=>nav('/home')).
// catch((e)=>alert(e.response.data.message))
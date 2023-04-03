import React, { useState } from 'react'
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
import axios from "axios"
const Signup = () => {
    const [Remail,setRemail] = useState("")
    const [Rpassword,setRpassword] = useState("")

    const handleRegister=async()=>{
      if(Remail=="" || Rpassword=="") {
        alert("Please fill the all fields")
        return;
    }
        const payload = {email : Remail,password : Rpassword}
        let res= axios.post("https://cointabassignment.onrender.com/signup",payload)
        .then((res)=>alert("Register SucessFully")).
        catch((e)=>alert("something went wrong"))

    }

  return (
    <Container
    maxW="lg"
    py={{ base: '12', md: '24' }}
    px={{ base: '0', sm: '8' }}
   
  >
    <Stack spacing="8">
      <Stack spacing="6">
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Box margin="auto">
           
          </Box>
          <Heading size={{ base: 'xs', md: 'sm' }}>
            Register in to your account
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
                type="email" placeholder="Enter your email" onChange={(e) => setRemail(e.target.value)}
                
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Password</FormLabel>
              <Input
                type="password" placeholder="Enter your password" onChange={(e) => setRpassword(e.target.value)}
                
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
              
              bgColor="blue.400"
              color={'black'}
              onClick={handleRegister}
            >
             Signup
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

export default Signup
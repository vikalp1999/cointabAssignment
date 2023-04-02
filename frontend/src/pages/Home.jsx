import React from 'react'
import { Box ,Button,Text,Center,AbsoluteCenter} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const {user}=JSON.parse(localStorage.getItem("cointab-token"))
    let Email= user.email;
    
    const nav = useNavigate()

   
    const handlelogout = () => {
        localStorage.removeItem("cointab-token");
        nav("/")
    }
  return (
   <Box textAlign="center" mt="20%" >
    <Text fontSize='4xl'>Email:{Email}</Text>
    <Button onClick={handlelogout}>Logout</Button>
    </Box>
  )
}

export default Home
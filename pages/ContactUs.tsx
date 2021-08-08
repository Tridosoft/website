import React from 'react'
import {
    Stack,
    Flex,
    Button,
    Box,
    Text,
    VStack,
    useBreakpointValue,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Textarea,
    Link,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function ContactUs() {
    let [value, setValue] = React.useState("")

    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
  
    return (

     <> 

<Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
       
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 12 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Contact Us</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>

        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
       
       

        <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={10}>
         
            <Stack spacing={4}>
            
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="contactnumber">
                <FormLabel>Contact Number</FormLabel>
                <Input type="Number" />
              </FormControl>
              <FormControl id="contactnumber">
                <FormLabel>Contact Number</FormLabel>
                            <Textarea
                                    value={value}
                                    onChange={handleInputChange}
                            
                                    placeholder="Here is a sample placeholder"
                                    size="sm"
                />              </FormControl>
              <Stack spacing={10}>
                
                <Button
                  bg={'orange.400'}
                  color={'white'}
                  _hover={{
                    bg: 'orange.500',
                  }}>
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        

       </Stack>
      </VStack>
    </Flex>



      </>
    );
  }
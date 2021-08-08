import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    Link,
    IconProps,
  } from '@chakra-ui/react';
  
  export default function AboutCompany() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            We at {' '}
            <Text as={'span'} color={'orange.400'}>
              Tridosoft IT Solutions
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
          We deliver practical IT services and solutions that optimize the value technology can bring to business.Our approach delivers solutions that are
           based on industry best practices but customized to meet the unique needs of each client.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <a href="/AboutUs">
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
              Know More ...
            </Button>
            </a>
          </Stack>
          
        </Stack>
      </Container>
    );
  }
  

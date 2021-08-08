import { Center, Heading ,SimpleGrid , Box ,Stack, Flex, Text} from '@chakra-ui/layout'

import {

    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';

import Image from 'next/image';
import { ReactElement } from 'react';

import smartphone from '../OurServices/assests/smartphone.png'
import webservice from '../OurServices/assests/worldwide.png'
import seo from '../OurServices/assests/gear.png'



interface ServiceProps {
    title: string;
    text: string;
    icon: ReactElement;
  }
  

export const data = [
    {
        id:1, title : 'App Development' ,serviceItems :"Java  , Swift", Description : "App devlopement using react native , ios , fluter etc" ,imgSource : smartphone , hrefLink : "/home"
    },
    {
        id:2, title : 'Web Development' ,serviceItems :"React Js ,Angular js" ,Description : "Web devlopement using react native etc" ,imgSource : webservice ,hrefLink : "/home"
    },
    {
        id:3, title : 'Digital Marketing' ,serviceItems :"SemRush , Google Analytics",Description : "Keyboard Analysis , Ranking ",imgSource : seo ,hrefLink : "/"
    }
]



  const Service = ({ title, text, icon }: ServiceProps) => {
    return (
      <Stack>
          <Center>{icon}</Center>
          <Center><Heading size="lg" fontWeight={400}>{title}</Heading></Center>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
  };
  


const ServicesSection = () => {
    return (
        <div>
            <Center>
                <Heading as="h2" size="xl">Our Services</Heading>
            </Center>

            <Box p={20}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                 {data.map((s=> 
                 <div key={s.id}
                 > 
                     <Box
                        maxW={'330px'}
                        w={'full'}
                        bg='white'
                        boxShadow={'2xl'}
                        rounded={'md'}
                        overflow={'hidden'}>
                        <Stack
                         key ={s.id}
                        textAlign={'center'}
                        p={6}
                        color='gray.800'
                        align={'center'}>
                            <Text
                                py={4}
                                fontSize={'sm'}
                                fontWeight={500}
                                bg='brand.100'
                                p={2}
                                px={3}
                                color={'white'}
                                rounded={'full'}>
                                {s.title}
                            </Text>
                            <Stack
                             direction={'row'} 
                             align={'center'} 
                             justify={'center'}>
                                 <Box  m={4}>
                                 <Image height="100" width="100" alt={s.title} src={s.imgSource} />
                                 </Box>
                            </Stack>
                            </Stack>

                            <Box 
                             bg='gray.50' px={6} py={10}>
                            <List spacing={3}>
                                <ListItem>
                                <ListIcon as={CheckIcon} color="brand.100" />
                                  {s.title}
                                </ListItem>
                            
                                <ListItem>
                                <ListIcon as={CheckIcon} color="brand.100" />
                                    {s.serviceItems}
                                </ListItem>
                                <ListItem>
                                <ListIcon as={CheckIcon} color="brand.100" />
                                   24x7 Support
                                </ListItem>
                            </List>
                           <Link href={s.hrefLink}>
                            <Button
                                mt={10}
                                w={'full'}
                                bg={'brand.100'}
                                color={'white'}
                                rounded={'xl'}
                                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                                _hover={{
                                bg: 'brand.100',
                                }}
                                _focus={{
                                bg: 'brand.100',
                                }}>
                                  View More
                            </Button>
                            </Link>
                            </Box>
                        </Box>
                </div>
                                    ))}

                  </SimpleGrid>
                                </Box>
        </div>
    )
}

export default ServicesSection

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('orange.200', 'orange.200')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('orange.200', 'orange.100'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function TestmonialsSection() {
  return (
    <Box bg={useColorModeValue('white.100', 'white.200')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
              With effective collaboration employees lives become easier 
              the decision-making process is streamlined and problem-solving becomes simpler.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://au.res.keymedia.com/files/image/andrew%20brooker(1).jpg'
              }
              name={'Jane Cooper'}
              title={''}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
              Creating a product that is easy to understand 
              and that people can learn to use quickly with minimal instruction. 
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://www.indiantelevision.com/sites/default/files/images/mam-images/2014/03/19/Bhaskar%20Ghosh%20.jpg'
              }
              name={'Sunil Kaushal'}
              title={''}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
              Being helpful is an easy way to show customers you care about them. Offering your customers a solution to the
               problem they face is why they’ve come to you in the first place. 
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://eu-fr.confirmation.com/media/1118/audit-client.png?width=425&height=425'
              }
              name={'Abdul Shekh'}
              title={''}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
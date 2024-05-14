import { Container, Text, VStack, Box, Heading, Button, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box bg="blue.500" color="white" p={6} textAlign="center">
          <Heading as="h1" size="2xl">
            Your Marketing Agency
          </Heading>
          <Text fontSize="lg">We help you grow your business</Text>
        </Box>

        {/* About Section */}
        <Box p={6} textAlign="center">
          <Heading as="h2" size="xl">
            About Us
          </Heading>
          <Text mt={4}>We are a full-service marketing agency dedicated to helping businesses of all sizes achieve their goals. Our team of experts specializes in digital marketing, social media management, content creation, and more.</Text>
        </Box>

        {/* Services Section */}
        <Box p={6} textAlign="center">
          <Heading as="h2" size="xl">
            Our Services
          </Heading>
          <VStack spacing={4} mt={4}>
            <Box>
              <Heading as="h3" size="lg">
                Digital Marketing
              </Heading>
              <Text>Boost your online presence with our digital marketing strategies.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Social Media Management
              </Heading>
              <Text>Engage with your audience on social media platforms.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg">
                Content Creation
              </Heading>
              <Text>Create compelling content that resonates with your audience.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Team Section */}
        <Box p={6} textAlign="center">
          <Heading as="h2" size="xl">
            Meet Our Team
          </Heading>
          <HStack spacing={8} mt={4} justify="center">
            <VStack>
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNTcyNTI0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member 1" />
              <Text>John Doe</Text>
              <Text>CEO</Text>
            </VStack>
            <VStack>
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNTcyNTI0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member 2" />
              <Text>Jane Smith</Text>
              <Text>Marketing Director</Text>
            </VStack>
            <VStack>
              <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNTcyNTI0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member 3" />
              <Text>Emily Johnson</Text>
              <Text>Content Creator</Text>
            </VStack>
          </HStack>
        </Box>

        {/* Contact Section */}
        <Box p={6} textAlign="center">
          <Heading as="h2" size="xl">
            Contact Us
          </Heading>
          <Text mt={4}>Get in touch with us to start your marketing journey.</Text>
          <Button colorScheme="blue" mt={4}>
            Contact Us
          </Button>
        </Box>

        {/* Footer Section */}
        <Box bg="gray.800" color="white" p={6} textAlign="center">
          <HStack spacing={4} justify="center">
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" isRound />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" isRound />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" isRound />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" isRound />
          </HStack>
          <Text mt={4}>© 2023 Your Marketing Agency. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

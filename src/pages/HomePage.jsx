import { Container, VStack, Text, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container maxW={"2xl"} py={12}>
      <VStack spacing={8}>
        <Text
          bgGradient={"to-r"}
          gradientFrom={"#7928CA"}
          gradientTo={"#FF0080"}
          bgClip={"text"}
          textTransform={"uppercase"}
          textAlign={"center"}
          fontSize={30}
          fontWeight={"bold"}
        >
          Welcome to the Product Store!
        </Text>

        <Grid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w={"full"}
        ></Grid>

        <Text
          fontSize={"xl"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"gray.500"}
          my={2}
        >
          No products found{" "}
          <Link to={"/create"}>
            <Text
              as={"span"}
              color={"pink.400"}
              textDecoration={"underline"}
              _hover={{ color: "pink.300" }}
            >
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;

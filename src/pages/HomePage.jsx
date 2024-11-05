import { Container, VStack, Text, Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <Container maxW={"5xl"} py={12}>
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
          gridTemplateColumns={{
            lg: "repeat(3, minmax(0, 1fr))",
            md: "repeat(2, minmax(0, 1fr))",
            base: "repeat(1, minmax(0, 1fr))",
          }}
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Grid>

        {products.length === 0 && (
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
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;

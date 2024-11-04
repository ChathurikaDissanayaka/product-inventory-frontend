import { Container, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ColorModeButton } from "../components/ui/color-mode";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient={"to-r"}
          gradientFrom={"#7928CA"}
          gradientTo={"#FF0080"}
          bgClip={"text"}
          textTransform={"uppercase"}
          textAlign={"center"}
          fontSize={{
            base: "22",
            sm: "28",
          }}
          fontWeight={"bold"}
        >
          <Link to={"/"}>Prodcut Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button size="sm" variant="subtle">
              <BsPlusSquare fontSize={20} />
            </Button>
          </Link>
          <ColorModeButton variant="subtle" />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "./store/product";
import { Toaster, toaster } from "./components/ui/toaster";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success } = await createProduct(newProduct);
    if(!success){
      toaster.create({
        description: "Error saving product",
        type: "error",
      });
    }else{
      toaster.create({
        description: "Product saved successfully",
        type: "success",
      });
    }
    
    setNewProduct({name: "", quantity: "", price:"", image:""})
  };

  return (
    <Container maxW={"2xl"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          p={6}
          borderWidth="1px"
          borderColor="border.disabled"
          color="fg.disabled"
          borderRadius="md"
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Quantity"
              name="quantity"
              type="number"
              value={newProduct.quantity}
              onChange={(e) =>
                setNewProduct({ ...newProduct, quantity: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image Url"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button
              colorPalette={"purple"}
              w={"full"}
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
      <Toaster />
    </Container>
  );
};

export default CreatePage;

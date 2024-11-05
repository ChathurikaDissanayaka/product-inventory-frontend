import { Box, Heading, HStack, VStack, Input, Button, Image, Text } from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useProductStore } from "../store/product";
import { Toaster, toaster } from "../components/ui/toaster";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();
  const handleDeleteProduct = async (pid) => {
    const { success } = await deleteProduct(pid);
    if (!success) {
      toaster.create({
        description: "Error deleting product",
        type: "error",
      });
    } else {
      toaster.create({
        description: "Product deleted successfully",
        type: "success",
      });
    }
  };
  return (
    <Box
      borderWidth="1px"
      borderColor="border.disabled"
      color="fg.disabled"
      rounded={"lg"}
      overflow={"hidden"}
      m={3}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} mb={4}>
          ${product.price}
        </Text>
        <HStack>
          <DialogRoot size="lg" placement={"center"} role={"alertdialog"}>
            <DialogTrigger asChild>
              <Button size="sm" color={"purple.400"} variant="outline">
                <AiOutlineEdit />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Product Details</DialogTitle>
              </DialogHeader>
              <DialogBody>
                {/*  */}
                <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              // value={updatedProduct.name}
              // onChange={(e) =>
              //   setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              // }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              // value={updatedProduct.price}
              // onChange={(e) =>
              //   setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              // }
            />
            <Input
              placeholder="Image Url"
              name="image"
              // value={updatedProduct.image}
              // onChange={(e) =>
              //   setUpdatedProduct({ ...updatedProduct, image: e.target.value })
              // }
            />
          </VStack>
                {/*  */}
              </DialogBody>
              <DialogFooter>
                <DialogActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <Button colorPalette={"purple"}>Update</Button>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
          <Button
            size="sm"
            color={"pink.400"}
            variant="outline"
            onClick={() => handleDeleteProduct(product._id)}
          >
            <MdOutlineDelete />
          </Button>
          <Toaster />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;

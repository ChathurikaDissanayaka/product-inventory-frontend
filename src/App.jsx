import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import  CreatePage  from "./CreatePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box minH={"100vh"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
      
    </ChakraProvider>
  );
}

export default App;

import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import { ColorModeProvider} from "./components/ui/color-mode";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
          <Box minH={"100vh"}>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CreatePage />} />
            </Routes>
          </Box>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;

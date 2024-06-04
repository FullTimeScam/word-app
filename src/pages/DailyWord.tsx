import { Accordion, Button, Flex } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import WordCard from "../components/WordCard";
import { FiArrowLeft } from "react-icons/fi";

const DailyWord: FC = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  // const wordData = state.wordData ?? null;

  useEffect(() => {
    if (!state) {
      navigate("/");
    }

    console.log(state);
  }, []);

  if (!state) return <div>Loading...</div>;

  return (
    <Flex
      textColor={"white"}
      position="relative"
      flexDir="column"
      maxW={768}
      mx="auto"
      minH="100vh"
      backgroundColor={"blue"}
    >
      <Button
        m={4}
        position="absolute"
        variant="ghost"
        colorScheme="transparent"
        onClick={() => navigate("/")}
      >
        <FiArrowLeft color="white" />
      </Button>
      <Flex
        textColor={"white"}
        fontSize={24}
        fontWeight="bold"
        textAlign="center"
        mt={8}
        justifyContent="center"
      >
        Day {state.wordData.day}
        {state.wordData.title}
      </Flex>
      <Accordion mt={8} allowMultiple>
        {state.wordData.sentences.map((v: ISentences, i: number) => (
          <WordCard key={i} sentence={v} />
        ))}
      </Accordion>
    </Flex>
  );
};

export default DailyWord;

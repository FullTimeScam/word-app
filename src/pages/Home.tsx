import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import sampleData from "../assets/sampleData.json";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <Flex
      flexDir="column"
      maxW={768}
      mx="auto"
      minH="100vh"
      backgroundColor={"blue"}
    >
      <Text
        fontSize={48}
        fontWeight="bold"
        textAlign="center"
        mt={8}
        textColor={"white"}
      >
        <div style={{ fontSize: "20px" }}>혁명의 도구, 글쓰기의 보물!</div>
        <div style={{ fontSize: "20px" }}>
          자주성과 창조성을 심어주는 위대한
        </div>
        워드-프로그램!
      </Text>
      <Flex flexDir="column" mt={8} gap={4} px={4} textColor={"white"}>
        {sampleData.map((v: IWords) => (
          <Button
            key={v.day}
            variant="outline"
            textColor={"white"}
            colorScheme="green"
            justifyContent="start"
            isTruncated={true}
            onClick={() =>
              navigate(`/daily-word/${v.day}`, {
                state: {
                  wordData: v,
                },
              })
            }
          >
            <Text fontWeight="bold">Day {v.day}</Text> - {v.title}
          </Button>
        ))}
      </Flex>
      <Flex flexDir="column" mt={16} gap={4} px={4}>
        {sampleData.map((v: IWords) => (
          <Button
            key={v.day}
            textColor={"white"}
            variant="outline"
            colorScheme="green"
            justifyContent="start"
            isTruncated={true}
            onClick={() =>
              navigate(`/another-daily-word/${v.day}`, {
                state: {
                  wordData: v,
                },
              })
            }
          >
            <Text textColor={"white"} fontWeight="bold">
              Day {v.day}
            </Text>{" "}
            - {v.title}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;

import React from "react"
import { Box, Card, CardBody, Circle, Container, Divider, Grid, Heading, HStack, Stat, StatGroup, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react"
import Chart from "../Components/Chart"

export default function App() {
    
    return(
            <Container maxW="100%" w="100%" minH={{base: "100vh", lg:"100vh"}} display="flex" justifyContent="center" py="3rem" px={{base:"1rem", lg: "0rem"}} bg="hsl(27, 66%, 92%)">
               <Grid alignContent="center" gap="20px" w={{base:"100%", lg:"40%"}} templateRows={{base: "1fr 5fr", lg:"1fr 4fr"}} m="auto 0"> 
                    <Box bg="hsl(10, 79%, 65%)" color="hsl(33, 100%, 98%)" p={{base: "1rem", lg:"1rem 2rem "}} display="flex" justify="center" align="center" borderRadius="0.5rem">
                        <Stat pt="0.5rem" textAlign="left">
                            <StatLabel>My balance</StatLabel>   
                            <StatNumber fontSize="2xl" fontWeight="700">$921.48</StatNumber>
                        </Stat>
                        <HStack position="relative">
                            <Circle size={{base:"50px", lg:"40px"}} border="2px" borderStyle="solid" borderColor=" hsl(33, 100%, 98%)" bg="rgba(0,0,0,0)" position="absolute" right="1.5rem"></Circle>
                            <Circle size={{base:"50px", lg:"40px"}}  bg="hsl(25, 47%, 15%)"></Circle>
                        </HStack>
                    </Box>
                    <Card h={{base: "80%", lg:"100%"}} bg="hsl(33, 100%, 98%)" borderRadius="0.5rem">
                        <CardBody p={{base: "2rem 1rem", lg:"2rem"}} textAlign="left">
                            <Heading fontSize={{base:"2xl", lg:"4xl"}} fontWeight="700" pl="0.8rem">Spending - Last 7 days</Heading>
                            <Chart/>
                            <Divider orientation="horizontal" w="95%" border borderStyle="solid" borderColor="hsl(28, 10%, 53%)" m="1rem"/>
                            <StatGroup mt="1rem" p="0.8rem" color="hsl(212, 10%, 50%)">
                                <Stat display="grid" alignSelf="end">
                                    <StatLabel>Total this month</StatLabel>
                                    <StatNumber fontSize={{base:"3xl", lg:"4xl"}} fontWeight="700" color="hsl(25, 47%, 15%)">$478.33</StatNumber>
                                </Stat>
                                <Stat textAlign="right" display="grid" alignSelf="end" mt="0">
                                    <StatHelpText fontWeight="500" color="hsl(25, 47%, 15%)">+2.4%</StatHelpText>
                                    <StatLabel>from last month</StatLabel>
                                </Stat>
                            </StatGroup>
                        </CardBody>
                    </Card>
                </Grid>
            </Container>
    )
}
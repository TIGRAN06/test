import { Accordion, Text, Container, Title, Badge } from '@mantine/core';
import { FiCoffee, FiCloudSnow, FiAnchor } from "react-icons/fi";

const SectionFive = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-five">
            <Container>
                <div style={{ marginBottom: 30 }}>
                    <div style={{ textAlign: 'center' }}><Badge variant="filled" color= "blue">FAQs</Badge></div>
                    <Text color="black">
                        <Title align="center" order={1} style={{ marginTop: 10 }}>Woah, Frequently asked questions here</Title>
                    </Text>
                </div>

                <Accordion  radius={20} variant="contained">
                    <Accordion.Item value="item1">
                        <Accordion.Control  style={{ textAlign: 'center' }} icon={<FiCoffee size={20} color={"#fab005"} />}>
                            Is Dennis Farina famous?
                        </Accordion.Control>
                        <Accordion.Panel style={{ textAlign: 'center' }}  >Yes, of course.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item2">
                        <Accordion.Control style={{ textAlign: 'center' }} icon={<FiCloudSnow size={20} color={"#fab005"} />}>
                            Are pineapples good?
                        </Accordion.Control>
                        <Accordion.Panel style={{ textAlign: 'center' }} >Unfortunately no.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item3">
                        <Accordion.Control style={{ textAlign: 'center' }} icon={<FiAnchor size={20} color={"#fab005"} />}>
                            Do you like yellow?
                        </Accordion.Control>
                        <Accordion.Panel style={{ textAlign: 'center' }} >Oh yes!</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );

};

export default SectionFive;
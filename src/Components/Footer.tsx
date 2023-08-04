import { useMantineTheme, Container, Grid, Image, UnstyledButton, Anchor, Code } from '@mantine/core';
import {
    Text,
    Button,
    Group,
  } from '@mantine/core';


const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: '#21327A'}}>

            <Container>
                
                <Grid border-radius={20} justify="space-around">

                    <Grid.Col xs={12} sm={8} md={8} lg={8}>
                        
                        <Text size="xl" weight={700} color="white" mb="10px">Simple Mantine template</Text>

                        <Text color="white" mb="5px">
                            You can do anything you want with this template, from portfolios to other stuff.
                        </Text>

                        <Text color="white" mb="20px">
                            You can find the illustrations I used on <Anchor href="https://icons8.com/">www.icons8.com</Anchor>
                        </Text>

                        <Button radius={20} background-color= {theme.colors.red[6]}variant="white" color="black" onClick={() => redirectToLink('https://mantine.dev/')}>Check out Mantine</Button>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Code  color="blue" style={{ display: 'flex', flexDirection: 'column', borderRadius:20 , gap: 6, padding: 15 }}>
                            Une entreprise respectable depuis 1993
                            <Anchor href="https://github.com">
                                <UnstyledButton>
                                    <Group>
                                    <Image width='32%' height='32%' src={require('../Images/logo.png')} />
                                        <div>
                                            <Text>Robert et fils</Text>
                                            <Text size="xs" color="dimmed">contacts@robertetfils.fr</Text>
                                        </div>
                                    </Group>
                                </UnstyledButton>
                            </Anchor>
                        </Code>
                    </Grid.Col>
                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};
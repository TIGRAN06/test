import { useMantineTheme, Container, Text, Title, Grid, Card, Image, Badge, Button, Group, SimpleGrid, Stack } from '@mantine/core';



const getChild = (height: number) =>   <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} height={height}radius= "md" alt={'sample2'} />
;
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export function Subgrid() {
  const theme = useMantineTheme();
  return (
    <Container my="md">
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
        {getChild(BASE_HEIGHT)}
        <Stack>
          {getChild(getSubHeight(2, theme.spacing.md))}
          {getChild(getSubHeight(2, theme.spacing.md))}
        </Stack>
        <Stack>
          {getChild(getSubHeight(3, theme.spacing.md))}
          {getChild(getSubHeight(3, theme.spacing.md))}
          {getChild(getSubHeight(3, theme.spacing.md))}
        </Stack>
        {getChild(BASE_HEIGHT)}
      </SimpleGrid>
    </Container>
  );
}

const SectionFour = () => {
    const theme = useMantineTheme();

    
    return (
        <section id="section-four">
            <Container>
                <Text color="black" align="center">
                    <Title order={1} mb="30px">These cards are really nice</Title>
                </Text>

                <Grid>
                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Card  radius="md" shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section>
                                <Image src={require('../Images/lime-welcome.png')} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>History of Dennis Farina</Text>
                                <Badge color= "blue" variant="light">
                                    Cool badge
                                </Badge>
                            </Group>

                            <Text size="sm">
                                Discover the career of Dennis Farina and his roles in movies!
                            </Text>

                            <Button variant="light" color= "blue" fullWidth mt="14px">
                                Find out
                            </Button>
                        </Card>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Card  radius="md" shadow="sm" p="lg" style={{ height: '100%' }}>
                            <Card.Section>
                                <Image src={require('../Images/lime-canoeing.png')} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Career of Dennis Farina</Text>
                                <Badge color= "blue" variant="light">
                                    Cool badge 2
                                </Badge>
                            </Group>

                            <Text size="sm">
                                Dennis Farina had a really great career with many opportunities!
                            </Text>

                            <Button variant="light" color= "blue" fullWidth mt="14px">
                                Find out
                            </Button>
                        </Card>
                    </Grid.Col>

                    <Grid.Col  xs={12} sm={4} md={4} lg={4}>
                        <Card  radius="md" shadow="sm" p="lg" style={{ height: '100%' }}>
                            <Card.Section>
                                <Image src={require('../Images/lime-message-sent.png')} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Major roles of Dennis Farina</Text>
                                <Badge color= "blue" variant="light">
                                    Cool badge 3
                                </Badge>
                            </Group>

                            <Text size="sm">
                                Discover the major roles of Dennis Farina and something else!
                            </Text>

                            <Button variant="light" color= "blue" fullWidth mt="14px">
                                Find out
                            </Button>
                        </Card>
                    </Grid.Col>
                </Grid>

            </Container>
            <Subgrid></Subgrid>
        </section>
    );
};

export default SectionFour;
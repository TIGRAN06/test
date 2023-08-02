import { useMantineTheme, Container, Text, Title, Grid, Card, Image, Badge, Button, Group, SimpleGrid, Stack } from '@mantine/core';


import { Accordion,Textarea, TextInput, ActionIcon, createStyles } from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { FiCoffee, FiCloudSnow, FiAnchor } from "react-icons/fi";

  
const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: 200,
      boxSizing: 'border-box',
      backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
        theme.colors[theme.primaryColor][7]
      } 100%)`,
      borderRadius: theme.radius.md,
      padding: `calc(${theme.spacing.xl} * 2)`,
  
      [theme.fn.smallerThan('sm')]: {
        padding: `calc(${theme.spacing.xl} * 1.5)`,
      },
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: theme.white,
      lineHeight: 1,
    },
  
    description: {
      color: theme.colors[theme.primaryColor][0],
  
      [theme.fn.smallerThan('sm')]: {
      },
    },
  
    form: {
      backgroundColor: theme.white,
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
    },
  
    social: {
      color: theme.white,
  
      '&:hover': {
        color: theme.colors[theme.primaryColor][1],
      },
    },
  
    input: {
      backgroundColor: theme.white,
      borderColor: theme.colors.gray[4],
      color: theme.black,
  
      '&::placeholder': {
        color: theme.colors.gray[5],
      },
    },
  
    inputLabel: {
      color: theme.black,
    },
  
    control: {
      backgroundColor: theme.colors[theme.primaryColor][6],
    },
  }));
  
  const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
  
  export function ContactUs() {
    const { classes } = useStyles();
  
    const icons = social.map((Icon, index) => (
      <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
        <Icon size="1.4rem" stroke={1.5} />
      </ActionIcon>
    ));
  
    return (
      <div className={classes.wrapper}>
        <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'sm', cols: 2 }]}>
          <div>
            <Title align="center"className={classes.title}>Contact us</Title>
            <Text  align="center" className={classes.description} mt="sm" mb={20}>
              Leave your email and we will get back to you within 24 hours
              <Group align="center"     >{icons}</Group>
            </Text>
  
           
  

          </div>
          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
  
            <Group position="right" mt="md">
              <Button className={classes.control}>Send message</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    );
  }

  
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
                <Text style={{ marginBottom: 20 }}color="black" align="center">
                    <Title order={1} mb="30px">These cards are really nice</Title>
                </Text>

                <Grid style={{ marginBottom: 20 }}>
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
                <ContactUs></ContactUs>
            </Container>
            <Subgrid></Subgrid>

        </section>
    );
};

export default SectionFour;
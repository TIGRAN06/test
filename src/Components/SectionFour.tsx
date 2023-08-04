import { useMantineTheme, Container, Text, Title, Grid, Card, Image, Badge, Button, Group, SimpleGrid, Stack } from '@mantine/core';


import {Textarea, TextInput, ActionIcon, createStyles } from '@mantine/core';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ImageCheckboxes } from './ImageCheckboxes';

  

import { ThemeIcon, Box } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';

type ContactIconVariant = 'white' | 'gradient';

interface ContactIconStyles {
  variant: ContactIconVariant;
}
let paddingVar = 2;

const width = window.innerWidth;
if (width <= 576) {
  paddingVar = 1;
} else if (width <= 768) {
  paddingVar = 1;
}


const useStyles2 = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    alignItems: 'center',
    backgroundImage:
      variant === 'gradient'
        ? `linear-gradient(135deg, "blue" 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : 'none',
    backgroundColor: 'transparent',
  },

  title: {
    color: variant === 'gradient' ? theme.colors.white : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === 'gradient' ? theme.white : theme.black,
  },
}));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = 'gradient',
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles2({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>

      <div>

        <Text align="center" size="xs" className={classes.title}>
        <ThemeIcon align-items="center"size={40} radius="md" className={classes.icon}>
          <Icon size="1.5rem" />
        </ThemeIcon>
        </Text>
        <Text align="center" size="xs" className={classes.title}>
          {title}
        </Text>
        <Text align="center" className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  { title: 'Email', description: 'hello@mantine.dev', icon: IconAt },
  { title: 'Phone', description: '+49 (800) 335 35 35', icon: IconPhone },
  { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin },
  { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
];

export function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon align-items="center" key={index} variant={variant} {...item} />);
  return <Text align-items='center' mt={100}>{items}</Text>;
}

export function ContactIcons() {
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box align-items="center"
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundColor: theme.white,
        })}
      >
        <ContactIconsList />
      </Box>

      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][6]} 0%, ${
            theme.colors[theme.primaryColor][4]
          } 100%)`,
        })}
      >
        <ContactIconsList variant="white" />
      </Box>
    </SimpleGrid>
  );
}


const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 200,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, #21327A 0%, #21327A 80%)`,
    borderRadius: theme.radius.md,
  
    [theme.fn.smallerThan('sm')]: {
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
    test: {
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
      width:'100%',
      justify: 'center',
    },
    descr: {
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
      alignItems: 'center',
      justifyContent: 'center',
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
      backgroundColor: theme.colors.red[6],
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
      <SimpleGrid cols={paddingVar} spacing={0} breakpoints={[{ cols: paddingVar }]}>
        <div className={classes.test}>
          <Title align="center" mt={40} className={classes.title}>
            Contactez nous !
          </Title>
          <Text align="center"  className={classes.description}>
          Pour toute demande de renseignements, de devis ou de rendez-vous, nous vous invitons à nous contacter.
            
          </Text>
          <ContactIconsList />
          <Group  mt={200} className={classes.descr}>{icons}</Group>
        </div>

        <div className={classes.form}>
            <ImageCheckboxes></ImageCheckboxes>
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
              <Button color="red" align-items="center" className={classes.control}>Send message</Button>
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

                <Grid style={{borderRadius:100, marginBottom: 20 }}>
                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Card  radius="md" shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section>
                                <Image src={require('../Images/lime-welcome.png')} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Construction</Text>
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
                                <Text weight={500}>Rénovation</Text>
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
                                <Text weight={500}>Design 3D</Text>
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
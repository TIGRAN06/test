import { Text, Container, Button } from '@mantine/core';
import { Link } from 'react-scroll';

import { createStyles, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    overflow: 'hidden',
    backgroundColor: '#11284b',
    backgroundSize: '100% 100%',
    width: '100%',
    borderRadius: '20px',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center', 
    marginBottom:40,

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      paddingRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    fontSize: '48px',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: '34px',
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: '22px',
    borderRadius: '20px',

    [theme.fn.smallerThan('md')]: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: '22px',
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container mt={40} size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title align="center" className={classes.title}>
              {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'White', to: 'cyan' }}
              >
                Robert et Fils
              </Text>{' '}
              rénovation
            </Title>

            <Text align="center" px={40} className={classes.description} mt={30}>
              Forte de ses 30 années d'expérience, notre entreprise de rénovation et construction est un acteur de
              confiance sur le marché. Nous proposons une large gamme de services pour répondre aux besoins
              variés de nos clients. Notre équipe d'experts qualifiés excelle dans la rénovation complète
              d’appartements, maisons individuelles et bâtiments sur la Côte d’Azur et Monaco. Nous offrons
              également des services de construction clé en main, depuis la conception jusqu'à la réalisation,
              garantissant un processus fluide et efficace. En outre, nous nous engageons à fournir des solutions
              durables et respectueuses de l'environnement, en utilisant des matériaux de qualité supérieure.
              Notre engagement envers l'excellence et notre passion pour l'innovation font de nous le choix idéal
              pour tous vos projets de construction et de rénovation.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'cyan', to: 'white' }}
              size="xl"
              className={classes.control}
              mt={80}
            >
              <Text color="black">Get started</Text>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

const About = () => {
  return (
    <section id="about">
      <HeroImageRight></HeroImageRight>

      <Container fluid>
        <div>
          <div className="buttons">
            <Link to="section-one" smooth duration={500}></Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

import { Text, Container, Button ,Image} from '@mantine/core';
import { Link } from 'react-scroll';

import { createStyles, Title } from '@mantine/core';
import { useEffect, useState } from 'react';

export function HeroImageRight() {

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }

  useEffect(() => {
      const updateDimension = () => {
          setScreenSize(getCurrentDimension())
      }
      window.addEventListener('resize', updateDimension);
  
  
      return(() => {
          window.removeEventListener('resize', updateDimension);
      })
  }, [screenSize])

let paddingVar = 20;

const width = screenSize.width;
if (width <= 576) {
  paddingVar = 0;
} else if (width <= 768) {
  paddingVar = 0;
}

const useStyles = createStyles((theme) => ({
  root: {
    padding: 20,

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
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,


    fontSize: '48px',
    paddingTop: paddingVar,
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

    },
  },

  control: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: '22px',
    borderRadius: '20px',
    padding: 20,
    [theme.fn.smallerThan('md')]: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: '22px',
    },
  },
}));

  const { classes } = useStyles();
  let strSize = '35%';
  if (width <= 576) {
    strSize = '50%';
  } else if (width <= 768) {
    strSize = '30%';
  }

  
  return (
    <div className={classes.root}>
      
      <Image width={strSize} height={strSize} src={require('../Images/logo2.PNG')} />
      <Container >
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title align="left" className={classes.title}>

              {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'cyan', to: '#21327A' }}
              >
                Robert et Fils
              </Text>{' '}
              rénovation 
            </Title>

            <Text align="left" className={classes.description} mt={paddingVar}>
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
              mt={20}
              variant="gradient"

              gradient={{ from: '#21327A', to: 'cyan' }}
              size="xl"
              className={classes.control}
            >
              <Text color="white">Get started
              </Text>
              

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
    </section>
  );
};

export default About;

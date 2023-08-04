import { Text,Container, Title} from '@mantine/core';
import '../Styles/SectionOne.scss';

import { createStyles, SimpleGrid  } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },
  reactPlayer:{
    boxShadow: theme.shadows.sm
  },

  overlay: {
    boxShadow: theme.shadows.sm,
    position: 'absolute',
    height: '8rem',
    width: '12rem',
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.colors.red[6] }).background,
    borderRadius:20,
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: "#21327A"
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size='6rem' className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}


const mockdata = [
  {
    icon: IconTruck,
    title: 'Conseils et accompagnement personnalises',
    description:
      'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
  },
  {
    icon: IconCertificate,
    title: 'Projet et modélisation 3D offerts',
    description:
      'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
  },
  {
    icon: IconCoin,
    title: 'Devis gratuits',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
  },
];

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
const SectionOne = () => {

    return (
        <section id="section-one">
            <Container >
            <FeaturesAsymmetrical></FeaturesAsymmetrical>
                <Text  color="black" align="center" mb="15px">
                    <Title order={1}>Nos example de projets !</Title>
                </Text>

                <Text color="black" align="center" mb="25px">
                    Demenager tout en restant chez vous 👌
                </Text>
                <div>
        <div className='player-wrapper'>
        <video 
            className='react-player'
            controls={false}
            autoPlay muted loop playsInline
            width='100%'
            height='100%'
          >
          <source src='https://v3.cdnpk.net/videvo_files/video/premium/partners0001/large_watermarked/BB_b2928690-ed6a-44db-a809-232cd6bea417_FPpreview.mp4'></source></video>
        </div>
      </div>
                



            </Container>
                                        

        </section>
    );
};

export default SectionOne;
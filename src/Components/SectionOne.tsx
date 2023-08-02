import { Carousel } from '@mantine/carousel';
import { Text,Image, Container, useMantineTheme, Title, Skeleton, Grid, SimpleGrid, Stack} from '@mantine/core';
import '../Styles/SectionOne.scss';

import { useMediaQuery } from '@mantine/hooks';
import ReactPlayer from 'react-player';





const SectionOne = () => {

    return (
        <section id="section-one">

            <Container >
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
            width='100%'
            height='100%'
            preload="auto" autoPlay muted loop playsInline
          >
          <source src='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'></source></video>
        </div>
      </div>
                



            </Container>
                                        

        </section>
    );
};

export default SectionOne;
import { Carousel } from '@mantine/carousel';
import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';
import ReactPlayer from 'react-player';

const SectionTwo = () => {
    //const theme = useMantineTheme();
    const carouselContent = {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column' as 'column',
        borderRadius: 15,
    };
    return (
        <section id="section-two">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>You can put whatever you want here</Title>
                                Dennis Farina was one of Hollywood's busiest actors and a familiar face to moviegoers and television viewers alike.
                                In 1998's "Saving Private Ryan," directed by Steven Spielberg, Farina played "Col. Anderson," a pivotal role in the film.
                            </Text>
                        </div>
                        <Button color= "blue">Check it out</Button>
                    </Grid.Col>
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image src={require('../Images/lime-surfing.png')} alt={'sample1'} style={{ width: '100%' }} />
                    </Grid.Col>
                </Grid>

                <Carousel
                    withIndicators
                    height={"100%"}
                    slideSize="33.333333%"
                    slideGap="md"
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 15 },
                    ]}
                    loop
                    align="start"
                    pr="10px"
                    pl="10px"
                >

                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title align="center" order={2}>Mont-Boron</Title>
                            <Text align="center" >Something here too.</Text>
                            <div>
        <div className='player-wrapper'>
          <ReactPlayer
            url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
        </div>
      </div></div>
                        
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title align="center" order={2}>Mont-Boron</Title>
                            <Text align="center" >Something here too.</Text>
                            <div>
        <div className='player-wrapper'>
          <ReactPlayer
            url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
        </div>
      </div></div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title align="center" order={2}>Mont-Boron</Title>
                            <Text align="center" >Something here too.</Text>
                            <div>
        <div className='player-wrapper'>
          <ReactPlayer
            url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
        </div>
      </div> </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title align="center" order={2}>Mont-Boron</Title>
                            <Text align="center" >Something here too.</Text>
                            <div>
        <div className='player-wrapper'>
          <ReactPlayer
            url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
        </div>
      </div> </div>
                    </Carousel.Slide>
                </Carousel>
            </Container>
        </section>
    )
};

export default SectionTwo;
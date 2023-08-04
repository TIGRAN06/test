import { Carousel } from '@mantine/carousel';
import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';
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
            <Container box-sizing='border-box'>
                <Grid justify="space-around">
                    <Grid.Col style={{ display: 'flex', justifyContent: 'flex-end' }} xs={6} sm={8} md={8} lg={8}>
                        <div >
                            <Text align="center"color="black">
                            <Title align="center"order={1}>You can put whatever you want here</Title>{ 
                                `Dennis Farina was one of Hollywood's busiest actors and a familiar face to moviegoers and television viewers alike.
                                In 1998's "Saving Private Ryan," directed by Steven Spielberg, Farina played "Col. Anderson," a pivotal role in the film.
                                `}
                            </Text>
                            <div style={{  marginTop: 20, textAlign: 'center' }}><Button  radius={20}color= "cyan">Voir plus</Button></div>
                        </div>
                        
                    </Grid.Col>
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image radius={20} src={require('../Images/lime-surfing.png')} alt={'sample1'} style={{ width: '100%' }} />
                    </Grid.Col>
                </Grid>

                <Carousel
                    withIndicators
                    height={"100%"}
                    slideSize="33.333333%"
                    slideGap="md"
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 2 },
                    ]}
                    loop
                    align="start"
                    pr="10px"
                    pl="0px"
                >

                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title align="center" order={2}>Mont-Boron</Title>
                            <Text align="center" >Something here too.</Text>
                            <div>
        <div className='player-wrapper'>
          <video
            className='react-player'
            controls={false}
            width='100%'
            height='100%'
            autoPlay muted loop playsInline
          >
          <source src='https://v3.cdnpk.net/videvo_files/video/premium/partners0001/large_watermarked/BB_b2928690-ed6a-44db-a809-232cd6bea417_FPpreview.mp4'></source></video>
        </div>
      </div></div>
                        
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title align="center" order={2}>Mont-Boron</Title>
                            <Text align="center" >Something here too.</Text>
                            <div>
        <div className='player-wrapper'>
        <video
            className='react-player'
            controls={false}
            width='100%'
            height='100%'
            autoPlay muted loop playsInline
          >
          <source src='https://v3.cdnpk.net/videvo_files/video/premium/partners0001/large_watermarked/BB_b2928690-ed6a-44db-a809-232cd6bea417_FPpreview.mp4'></source></video>
        </div>
      </div></div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title align="center" order={2}>Mont-Boron</Title>
                            <Text align="center" >Something here too.</Text>
                            <div>
        <div className='player-wrapper'>
        <video
            className='react-player'
            controls={false}
            width='100%'
            height='100%'
            autoPlay muted loop playsInline
          >
          <source src='https://v3.cdnpk.net/videvo_files/video/premium/partners0001/large_watermarked/BB_b2928690-ed6a-44db-a809-232cd6bea417_FPpreview.mp4'></source></video>
        </div>
      </div> </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title align="center" order={2}>Mont-Boron</Title>
                            <Text align="center" >Something here too.</Text>
                            <div>
        <div className='player-wrapper'>
        <video
            className='react-player'
            controls={false}
            width='100%'
            height='100%'
            autoPlay muted loop playsInline
          >
          <source src='https://v3.cdnpk.net/videvo_files/video/premium/partners0001/large_watermarked/BB_b2928690-ed6a-44db-a809-232cd6bea417_FPpreview.mp4'></source></video>
        </div>
      </div> </div>
                    </Carousel.Slide>
                </Carousel>
            </Container>
        </section>
    )
};

export default SectionTwo;
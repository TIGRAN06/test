import { Carousel } from '@mantine/carousel';
import { Grid, Text, Container, Title, Image, Button } from '@mantine/core';

const SectionThree = () => {
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
        <section id="section-three">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image radius="md" src={require('../Images/lime-bicycle-riding.png')} alt={'sample2'} style={{ width: '100%' }} />
                    </Grid.Col>
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                            <Text align="center"color="black">
                                <Title align="center" order={1}>Put something here too</Title>
                                Dennis Farina is unique among thespians in that he was one of the few to achieve success as a "late-bloomer." 
                                He did not start acting until he was 37 years old, after stints in the military and 18 years on the Chicago Police Department.
                            </Text>
                        </div>
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
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} radius= "md" alt={'sample2'} />
                        </div>
                        
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title align="center" order={2}>Mont-Boron</Title>
                            <Text align="center" >Something here too.</Text>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} radius= "md" alt={'sample2'} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title align="center" order={2}>Mont-Boron</Title>
                            <Text align="center" >Something here too.</Text>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} radius= "md" alt={'sample2'} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title align="center" order={2}>Mont-Boron</Title>
                            <Text align="center" >Something here too.</Text>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} radius= "md" alt={'sample2'} />
                        </div>
                    </Carousel.Slide>
                </Carousel>
            </Container>
        </section>
    );

};

export default SectionThree;
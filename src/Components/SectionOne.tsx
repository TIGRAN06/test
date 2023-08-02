import { Carousel } from '@mantine/carousel';
import { Text,Image, Container, useMantineTheme, Title, Skeleton, Grid, SimpleGrid, Stack} from '@mantine/core';
import '../Styles/SectionOne.scss';

import { useMediaQuery } from '@mantine/hooks';





const SectionOne = () => {

    const carouselContent = {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column' as 'column',
        borderRadius: 15,
    };

    return (
        <section id="section-one">

            <Container>
                <Text color="black" align="center" mb="15px">
                    <Title order={1}>Nos example de projets !</Title>
                </Text>

                <Text color="black" align="center" mb="25px">
                    Demenager tout en restant chez vous 👌
                </Text>
                
                <Carousel
                    withIndicators
                    height={300}
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
                        <Title order={2}>Mont-Boron</Title>
                            <Text>Something here too.</Text>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} radius= "md" alt={'sample2'} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title order={2}>Mont-Boron</Title>
                            <Text>Something here too.</Text>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} radius= "md" alt={'sample2'} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title order={2}>Mont-Boron</Title>
                            <Text>Something here too.</Text>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} radius= "md" alt={'sample2'} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title order={2}>Mont-Boron</Title>
                            <Text>Something here too.</Text>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} radius= "md" alt={'sample2'} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title order={2}>Mont-Boron</Title>
                            <Text>Something here too.</Text>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} radius= "md" alt={'sample2'} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title order={2}>Mont-Boron</Title>
                            <Text>Something here too.</Text>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} radius= "md" alt={'sample2'} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title order={2}>Mont-Boron</Title>
                            <Text>Something here too.</Text>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} radius= "md" alt={'sample2'} />
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                        <Title order={2}>Mont-Boron</Title>
                            <Text>Something here too.</Text>
                            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"} radius= "md" alt={'sample2'} />
                        </div>
                    </Carousel.Slide>
                </Carousel>
            </Container>
        </section>
    );
};

export default SectionOne;
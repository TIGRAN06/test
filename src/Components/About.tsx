import { Text, Container, Anchor, MediaQuery, Button } from '@mantine/core';
import { MdOutlineArrowDownward } from "react-icons/md";
import { Link } from 'react-scroll';

const About = () => {
    //const theme = useMantineTheme();

    return (
        <section id="about">
            <Container fluid>

                <div className="about-content">

                    <div >
                        <Text transform="uppercase" weight={500} color="blue">
                            Une entreprise familial de père en fils
                        </Text>
                    </div>

                    <div>
                        <Text>
                            <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.8rem !important' }}>
                                <h1 className="title">Notre expertise selon vos goûts</h1>
                            </MediaQuery>
                        </Text>
                    </div>

                    <div style={{ marginBottom: 25 }}>
                        <Text size="xl" color="black">
                            
"Robert et fils" est une entreprise expérimentée dans la construction et renovation de maison, appartement et villa à Nice et dans ses alentours (Monaco, Cagnes-sur-Mer, Villeneuve-Loubet, Antibes, Vence…). Nos artisans sont également qualifiés pour tous travaux de rénovation intérieure alors n’hésitez pas à nous demander un devis gratuit ! <Anchor href="https://mantine.dev/" color="blue" >Contactez nous 😊</Anchor>.
                        </Text>
                    </div>

                    <div className="buttons">
                        <Link to="section-one" smooth duration={500}>
                            <Button color=" blue" rightIcon={<MdOutlineArrowDownward size={16} />} radius="lg" size="md">Tell me more</Button>
                        </Link>

                        <Button variant="default" radius="lg" size="md">Other stuff</Button>
                    </div>

                </div>

            </Container>

        </section>
    );
};

export default About;
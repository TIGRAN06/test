import { Text,Container, Title} from '@mantine/core';
import '../Styles/SectionOne.scss';


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
            controls={true}
            preload='auto'
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
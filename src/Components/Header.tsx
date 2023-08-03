import { Button, Badge, Image, Drawer, Code, Title, Anchor, Text, createStyles } from '@mantine/core';
import { UnstyledButton, Group, Avatar } from '@mantine/core';
import React from 'react';
import { Link } from 'react-scroll';


const useStyles = createStyles((theme) => ({
    root: {
      overflow: 'hidden',
      width: '100%',
      borderRadius: '20px',
      padding:20,
      paddingTop: `calc(${theme.spacing.xl} * 3)`,
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    }}));  

const Header = () => {
  const [opened, setOpened] = React.useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  const { classes } = useStyles();

  // Extract the components' rendering logic into separate functions for better code organization
  const renderDesktopContent = () => {

    return (

      <div className="content-desktop">
        
        <div>
          
        </div>
        <div className="navbar">
          <div className="navbar-item">
            <Link to="section-one" smooth duration={500}>
            <Text color="white">Accueil</Text>
            </Link>
          </div>
          <div className="navbar-item">
            <Link  to="section-four" smooth duration={500}>
            <Badge
            size="lg"
            color="blue"
            radius={10}>Nos réalisations</Badge>
            
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="section-five" smooth duration={500}>
              <Text color="white">FAQs</Text>
            </Link>
          </div>

          <Button color=" blue" onClick={() => redirectToLink('https://mantine.dev/')}>
            Contactez nous!
          </Button>
        
        </div>
      </div>
    );
  };

  const renderMobileContent = () => {
    return (
        
      <div className="content-mobile">
        <div className={classes.root}>
                <div>
          <Badge
            onClick={() => setOpened((o) => !o)}
            title={title}
            size="lg"
            color="blue"
            radius={10}
          >
            Menu
          </Badge>
        </div>
        </div>

        <Drawer
          transition="rotate-right"
          transitionDuration={250}
          transitionTimingFunction="ease"
          overlayOpacity={0.55}
          position="right"
          closeButtonLabel="Close drawer"
          title="Menu"
          padding={40}
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <div className="menu">
            <div className="menu-items">
              <div className="menu-item">
                <Link to="section-one" smooth duration={500} onClick={() => setOpened(false)}>
                  <Title order={2}>Accueil</Title>
                </Link>
              </div>
              <div className="menu-item">
                <Link to="section-four" smooth duration={500} onClick={() => setOpened(false)}>
                  <Title order={2}>Nos réalisations</Title>
                </Link>
              </div>
              <div className="menu-item">
                <Link to="section-five" smooth duration={500} onClick={() => setOpened(false)}>
                  <Title order={2}>FAQs</Title>
                </Link>
              </div>
            </div>

            <div className="menu-items">
            </div>

            <Code className="contact-code">
              <Anchor href="https://github.com">
                <UnstyledButton>
                  <Group>
                  <Image width='100%' height='100%' src={require('../Images/logo.png')} />
                    <div>
                      <Text>Robert et fils</Text>
                      <Text size="xs" color="dimmed">
                      <Anchor href="mailto:example@mail.com">contacts@robertetfils.fr</Anchor>
                      </Text>
                    </div>
                  </Group>
                </UnstyledButton>
              </Anchor>
            </Code>
          </div>
        </Drawer>
      </div>

    );
  };

  return (
    <header>
      {renderDesktopContent()}
      {renderMobileContent()}
    </header>
  );
};

export default Header;

const redirectToLink = (link: string): void => {
  window.open(link, '_blank');
};

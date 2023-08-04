import {
  UnstyledButton,
  Checkbox,
  Text,
  Image,
  SimpleGrid,
  createStyles,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Added alignment for the whole button
    width: '100%',
    transition: 'background-color 150ms ease, border-color 150ms ease',
    border: `${'0.2rem'} solid ${checked ? theme.colors.blue[1]  : theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.blue[1]}`,
    borderRadius: 20,
    padding: theme.spacing.xs,
    backgroundColor: checked ? theme.colors.green[1] : theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white},
    body: {
      borderRadius: 20,
      display: 'flex', // Added display flex
      flexDirection: 'column', // Added column direction
      alignItems: 'center', // Center alignment for text elements
      justify: 'center', // Center alignment for text elements
    },
  }));


interface ImageCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  title: string;
  description: string;
  image: string;
}


export function ImageCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  className,
  image,
  ...others
}: ImageCheckboxProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof ImageCheckboxProps>) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const { classes, cx } = useStyles({ checked: value });

  return (
    <UnstyledButton
      {...others}
      onClick={() => handleChange(!value)}
      className={cx(classes.button, className)}
    >

      <div className={classes.body}>

        <Text weight={500} size="sm" sx={{ lineHeight: 1 }}>
          {title}
        </Text>
            </div>
    </UnstyledButton>
  );
}

const im= '"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"'
const mockdata = [
  { description: 'Sun and sea', title: 'Plomberie', image: im},
  { description: 'Sightseeing', title: 'Electricité', image: im },
  { description: 'Mountains', title: 'Renovation', image: im },
  { description: 'Mountains', title: 'Autres..', image: im }
];

export function ImageCheckboxes() {
  const items = mockdata.map((item) => <ImageCheckbox {...item} key={item.title} />);
  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'sm', cols: 1 },
      ]}
    >
      {items}
    </SimpleGrid>
  );
}

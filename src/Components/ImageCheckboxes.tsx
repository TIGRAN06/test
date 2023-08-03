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
    border: `${'1rem'} solid ${
      checked
        ? theme.fn.variant({ variant: 'outline', color: theme.primaryColor }).border
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: checked
      ? theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[8]
      : theme.white,
  },

  body: {
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
      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: 'pointer' } }}
      />
            </div>
    </UnstyledButton>
  );
}

const im= '"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Doubs_Source_du_Lison_03.jpg/800px-Doubs_Source_du_Lison_03.jpg"'
const mockdata = [
  { description: 'Sun and sea', title: 'Renovation', image: im},
  { description: 'Sightseeing', title: 'Design', image: im },
  { description: 'Mountains', title: 'Construction', image: im }
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

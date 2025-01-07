interface HeadingProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = ({ text, level }: HeadingProps) => {
  const HeadingTag = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
  }[level] as keyof JSX.IntrinsicElements;

  return <HeadingTag>{text}</HeadingTag>;
};

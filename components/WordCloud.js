import { TagCloud } from 'react-tagcloud';

const data = [
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'NodeJS', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML', count: 14 },
  { value: 'CSS', count: 20 },
  { value: 'SASS', count: 12 },
  { value: 'CSS-in-JS', count: 29 },
  { value: 'Webpack', count: 22 },
  { value: 'NEXT.js', count: 24 },
  { value: 'Babel', count: 7 },
  { value: 'Jest', count: 15 },
  { value: 'React Testing Library', count: 15 },
  { value: 'React Native', count: 27 },
  { value: 'TypeScript', count: 15 },
  { value: 'NPM', count: 11 },
  { value: 'Firebase', count: 17 },
  { value: 'GatsbyJS', count: 12 },
  { value: 'Figma', count: 21 },
  { value: 'git', count: 26 },
  { value: 'Redux', count: 9 },
  { value: 'tailwindcss', count: 9 },
  { value: 'material ui', count: 13 },
  { value: 'Vite', count: 25 },
];

const options = {
  luminosity: 'dark',
  hue: '#28A9E0',
};

const WordCloud = () => (
  <TagCloud
    style={{
      textAlign: 'center',
      margin: '60px 0',
      maxWidth: 600,
      padding: 18,
    }}
    minSize={18}
    maxSize={48}
    colorOptions={options}
    tags={data}
  />
);

export default WordCloud;

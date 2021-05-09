import dynamic from 'next/dynamic';

const WordCloud = dynamic(() => import('./WordCloud'), { ssr: false });

const Tech = () => (
  <srction id="tech" className="flex flex-col items-center my-16">
    <h2 className="text-4xl">Tech</h2>
    <p className="w-11/12 md:w-3/5 mt-5 text-center text-lg">
      Here is my tech stack. Languages, frameworks and tools that i love and
      that i use daily on my job and on personal projects 💻
    </p>
    <WordCloud />
  </srction>
);

export default Tech;

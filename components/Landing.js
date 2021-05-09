import React from 'react';
import Image from 'next/image';

const Landing = () => (
  <section id="home" className="min-h-screen  my-10 flex flex-col items-center">
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/images/my-memoji.svg"
        alt="My memoji"
        layout="fixed"
        width={160}
        height={160}
        quality={100}
      />
      <h3 className="mt-4 md:text-2xl text-xl">Hi, i am Raša 🤟🏽</h3>
    </div>
    <h1 className="w-11/12 md:w-8/12 md:mt-32 mt-16 md:text-4xl text-3xl text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
    </h1>
    <h2 className="w-11/12 md:w-8/12 md:mt-40 mt-20 md:text-3xl text-2xl text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus urna,
      elit ultrices mi sed adipiscing pellentesque enim. Facilisi sit varius hac
      eget. Odio mauris non non vulputate. Duis molestie diam lacus, viverra.
      Lacus a ac id sit blandit sit et nisi. Egestas felis blandit odio at.
    </h2>
  </section>
);

export default Landing;

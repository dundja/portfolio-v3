import Image from 'next/image';

const Landing = () => (
  <section
    id="about"
    className="min-h-screen  my-10 flex flex-col items-center"
  >
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
    <h1 className="w-11/12 md:w-8/12 md:mt-32 mt-16 leading-snug md:text-6xl text-4xl text-center">
      Building <span className="curved_underline">software</span>,{' '}
      <span className="curved_underline">applications</span> and{' '}
      <span className="curved_underline">experience</span> that will change the
      world.
    </h1>
    <h2 className="w-11/12 md:w-8/12 md:mt-40 mt-20 md:text-3xl text-2xl text-center">
      Fullstack web developer. Tech lover and enthusiast. Love to break, debug
      and fix stuff. Every day is opportunity to improve. Learn at least one new
      thing each day. Organisation is key. Team player forever. Any kind of
      sport.
    </h2>
  </section>
);

export default Landing;

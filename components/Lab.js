import ProjectCard from './molecules/ProjectCard';

const Lab = () => (
  <srction id="lab" className="flex flex-col items-center my-16">
    <h2 className="text-4xl">Lab</h2>
    <p className="w-11/12 md:w-3/5 mt-5 text-center text-lg">
      Some of my personal projects that i created in free time 🧪
    </p>

    <div className="w-full mt-20 grid md:gap-16 gap-8 md:grid-cols-2 grid-cols-1">
      <div className="flex justify-center items-center md:p-0 px-2">
        <ProjectCard
          title="Translized"
          text="Production ready software localization and translation management platform."
          link="https://translized.com"
          imageSrc="/images/translized-ss.png"
        />
      </div>
      <div className="flex justify-center items-center md:p-0 px-2">
        <ProjectCard
          title="BalkanTip"
          text="Mathematical result predictions, value bets, in-depth football statistics, livescores and much more. App only works in local at the moment due to Firebase plan change :)"
          link="https://balkantip.firebaseapp.com"
          imageSrc="/images/balkantip-ss.png"
        />
      </div>
      <div className="flex justify-center items-center md:p-0 px-2">
        <ProjectCard
          title="Verbum Memo"
          text="Language learning app where you can learn and practice new words. App has also creative practice mods with statistic feature."
          link="https://verbum-memo.netlify.app"
          imageSrc="/images/verbumMemo-ss.png"
        />
      </div>
      <div className="flex justify-center items-center md:p-0 px-2">
        <ProjectCard
          title="My movies"
          text="Movie library application. Search and find your favorite movies, tv shows and actors."
          link="https://dundja-movies.herokuapp.com"
          imageSrc="/images/dundjaMovies-ss.png"
          githubUrl="https://github.com/dundja/dundja-movies-app"
        />
      </div>
      <div className="flex justify-center items-center md:p-0 px-2">
        <ProjectCard
          title="Restaurant order app"
          text="Ordering application for restaurants. Visit /adminLogin (admin@email.com | test123) to see simple admin POV when user make order."
          link="https://order-firebase.netlify.app"
          imageSrc="/images/orderApp-ss.png"
          githubUrl="https://github.com/dundja/order-app-firebase"
        />
      </div>
      <div className="flex justify-center items-center md:p-0 px-2">
        <ProjectCard
          title="Coffee shop"
          text="Coffee e-shop application with Snipcart integration."
          link="https://coffeeshop-gatsby.netlify.app"
          imageSrc="/images/coffeeShop-ss.png"
          githubUrl="https://github.com/dundja/coffee-shop-gatsby"
        />
      </div>
    </div>
  </srction>
);

export default Lab;

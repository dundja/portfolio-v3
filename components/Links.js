const Links = () => (
  <srction id="links" className="flex flex-col items-center my-16">
    <h2 className="text-4xl">Links</h2>
    <p className="w-11/12 md:w-3/5 mt-5 text-center text-lg">
      Just couple of links and socials where you can reach me 🔗
    </p>

    <div className="my-14">
      <a
        href="/Radivoje Dundjerovic - resume.pdf"
        download
        className="relative text-black hover:text-blue text-4xl"
      >
        resume
        <img
          className="w-9 absolute -top-5 -right-10"
          src="/images/download.svg"
          alt="download my resume"
        />
      </a>
    </div>

    <div className="mb-14">
      <a
        href="mailto:dundja3@gmail.com"
        className="relative text-black hover:text-blue text-4xl"
      >
        email
        <img
          className="w-9 absolute -top-5 -right-10"
          src="/images/send.svg"
          alt="send me email"
        />
      </a>
    </div>

    <div className="mb-14">
      <a
        href="https://github.com/dundja"
        className="relative text-black hover:text-blue text-4xl"
      >
        github
        <img
          className="w-9 absolute -top-5 -right-10"
          src="/images/link.svg"
          alt="link to my github"
        />
      </a>
    </div>

    <div className="mb-14">
      <a
        href="https://www.linkedin.com/in/radivoje-dundjerovic-5b6448151"
        className="relative text-black hover:text-blue text-4xl"
      >
        linkedin
        <img
          className="w-9 absolute -top-5 -right-10"
          src="/images/link.svg"
          alt="link to my linkedin"
        />
      </a>
    </div>

    <div className="mb-14">
      <a
        href="https://www.instagram.com/dradivoje"
        className="relative text-black hover:text-blue text-4xl"
      >
        instagram
        <img
          className="w-9 absolute -top-5 -right-10"
          src="/images/link.svg"
          alt="link to my instagram"
        />
      </a>
    </div>
  </srction>
);

export default Links;

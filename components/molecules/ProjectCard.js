import PropTypes from 'prop-types';
import Image from 'next/image';

const ProjectCard = ({ title, text, imageSrc, link, githubUrl }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg h-500 flex flex-col justify-between">
    <div>
      <Image
        className="w-full"
        width={384}
        height={260}
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{text}</p>
      </div>
    </div>
    <div className="px-6 pt-4 pb-2">
      <a href={link} target="_blank" rel="noopener" className="mr-4">
        <Image
          className="w-full"
          width={24}
          height={24}
          src="/images/link.svg"
          alt="link"
        />
      </a>
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener" className="mr-4">
          <Image
            className="w-full"
            width={24}
            height={24}
            src="/images/github.svg"
            alt="github link"
          />
        </a>
      )}
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
};

ProjectCard.defaultProps = {
  githubUrl: '',
};

export default ProjectCard;

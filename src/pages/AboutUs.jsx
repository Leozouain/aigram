import logolg from "../assets/aigramLogo1.png";
import news from "../assets/news.png";
import mission1 from "../assets/mission1.png";
import gallery from "../assets/gallery.png";
import team from "../assets/team.png";
import { HashLink as Link } from "react-router-hash-link";

export default function AboutUs() {
  return (
    <div
      id="abouttop"
      className="w-screen text-[var(--text-color)] 
    flex flex-col justify-center items-center "
    >
      <div
        className="bg-[var(--secondary-color)]  md:mx-9 my-4 
        rounded-lg w-[90vw] p-2 md:p-20 relative"
      >
        <div className="flex relative  md:flex-row flex-col items-center justify-center my-14">
          <h1 className="font-bold absolute -top-10 ">About</h1>
          <img src={logolg} alt="" />
        </div>

        <div className="md:grid-cols-2 md:grid gap-10 leading-relaxed tracking-wide">
          <div className="flex flex-col gap-6 
">
            <p>
              Welcome to AiGram! We are a team of passionate individuals who
              share a love for art and technology (Leo (Me): As an enthusiastic
              bootcamp student, Leo brings a touch of magic to coding. His
              dedication and skills are vital in making our projects come to
              life. Dricka: my wife, has been an invaluable contributor
              to the team. With her expertise in design, she provided invaluable
              feedback, suggesting ideas such as changing colors, rearranging
              elements, and altering the order, enhancing the overall look and
              feel of the website. Bruno: A close friend and a valuable team
              member, Bruno offers a unique perspective. His ability to see
              things from a different angle has been instrumental in finding
              solutions to technical challenges that were otherwise hard for me
              to spot. Teamwork truly works like magic!). Our journey began
              during the Nucamp Bootcamp, where I honed my development skills
              to bring to life a unique and exciting project with a help of my wife and a close friends.
            </p>
            <div className="h-48 flex md:flex-row  flex-col md:justify-start justify-between">
              <h3 className="font-bold text-2xl self-end">Our Mission</h3>
              <img className="h-full w-fit" src={mission1} alt="" />
            </div>
            <p>
              At AiGram, our mission is to bridge the gap between art and
              artificial intelligence. We firmly believe that AI has the
              potential to expand creative horizons and enable the creation of
              truly unique and inspiring artworks. Our goal is to create an
              online space where artists, AI enthusiasts, and curious minds can
              come together to appreciate, explore, and learn about art
              generated by artificial intelligence.
            </p>
            <div className="h-48 flex md:flex-row  md:justify-start  flex-col justify-between  mb-4">
              <img className=" h-full w-fit" src={news} alt="" />
              <h3 className="font-bold text-2xl self-end">
                News and Resources
              </h3>
            </div>
            <p>
              At the core of our website, you will find a dedicated section for
              news and resources about AI in art creation. We provide up-to-date
              information on the latest trends, emerging technologies, and
              inspirational stories of artists who are pushing the boundaries of
              creativity with the help of AI. Our aim is to create an
              educational and informative environment that inspires everyone to
              delve into the world of AI-generated art.
            </p>
            <h3 className="font-bold text-2xl">Creation Tools</h3>
            <p>
              We believe in democratizing art creation with AI, making
              innovation in the field accessible to all. On our platform, you
              will discover a thoughtfully curated selection of AI creation
              tools designed for artists of all skill levels. We want to make
              the creation process both accessible and exciting, empowering
              everyone to explore their creative potential with the assistance
              of artificial intelligence.
            </p>
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="md:h-48 flex md:flex-row  flex-col ">
              <img className="h-full w-fit" src={gallery} alt="" />
              <h3 className="font-bold text-2xl self-end py">
                The AiGram Art Gallery
              </h3>
            </div>
            <p>
              One of the highlights of AiGram is our incredible AiArt gallery.
              Here, you will find a diverse collection of stunning and
              captivating artworks, all generated by artificial intelligence.
              Our gallery functions like a social network for art, where you can
              explore, like, and share your favorite creations with other AI
              enthusiasts. More than just appreciating the art, we also provide
              the prompts or instructions used to create each piece, allowing
              you to understand the magic behind AI's creative process.
            </p>
            <h3 className="font-bold text-2xl">Community and Collaboration</h3>
            <p>
              We value the importance of community and collaboration. At AiGram,
              we encourage artists to connect, share ideas, and collaborate on
              creative projects that explore the possibilities of AI in art.
              Together, we can drive the development of new techniques and
              applications for AI, unlocking a world of unprecedented artistic
              opportunities.
            </p>
            <p>
              Join us on this exciting journey to explore the fascinating
              universe of art generated by artificial intelligence. Whether
              you're an artist, developer, technology enthusiast, or simply an
              art lover, AiGram is your destination to discover, learn, and draw
              inspiration at the intersection of creativity and artificial
              intelligence.
            </p>
            <p>Let's shape the future of art together!</p>
            <p>The AiGram Team</p>
            <div className=" flex justify-center">
              <img className="h-full" src={team} alt="" />
            </div>
          </div>
        </div>
        <Link
          className=" absolute top-3 left-3
        hover:animate-bounce   w-fit z-20 p-2 rounded-md
          text-[var(--text-color)]
          bg-[var(--third-color)]"
          smooth
          to="/#maintop"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(255, 255, 255)"
            strokeWidth="10"
            stroke="black"
            height="2em"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
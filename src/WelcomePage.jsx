import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-openDyslexic text-6xl mb-8 ">
        <p className="mb-3 inline-block">Joining</p> <p className="inline">Shapes</p>
      </h1>
      <button>
        <Link to="/game" className="font-openDyslexic text-3xl">
          Start
        </Link>
      </button>
    </div>
  );
}

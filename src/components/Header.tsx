import hero from "../assets/banner.png";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative flex flex-col h-[80vh] items-center justify-center sm:justify-between">
          {/* Chevron gauche */}
          <div className="absolute inset-y-0 left-4 sm:left-8 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-white w-8 h-8 sm:w-10 sm:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          {/* Chevron droit */}
          <div className="absolute inset-y-0 right-4 sm:right-8 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-white w-8 h-8 sm:w-10 sm:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>

          {/* Texte et bouton */}
          <div className="text-center sm:text-left sm:absolute sm:top-1/4 lg:top-1/3 left-4 lg:left-40 text-white">
            <h2 className="text-xl sm:text-lg  py-2 sm:py-5 xl:text-6xl">
              T-Shirt / Top
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold py-4 sm:py-6">
              Summer <br className="hidden sm:block" /> Value Pack
            </h1>
            <h2 className="text-sm sm:text-lg font-bold py-4 lg:py-8">
              cool / colorful / comfy
            </h2>
            <Button className="mt-4 sm:mt-6 px-8 py-3 sm:py-4 lg:px-12 lg:py-6 bg-white text-gray-950">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Indicateurs de pagination */}
        <div className="flex justify-center mt-10 sm:mt-20">
          <span className="bg-white w-10 h-1 rounded-l-md cursor-pointer sm:w-14 sm:h-2"></span>
          <span className="bg-white w-10 h-1 rounded-r-md cursor-pointer opacity-50 sm:w-14 sm:h-2"></span>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import Button1 from "../components/Button1";
function PageNotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-purple-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#2d163f] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-[#814e6e]">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/">
            <Button1 data="Go Back to Home" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PageNotFound;

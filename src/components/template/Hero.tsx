import { Button } from "../ui/button";
import { WavyBackground } from "../ui/wavy-background";

interface HeroProps {}
export default function Hero(props: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <WavyBackground>
        <div className="bg-trasnsparent">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Understand User Flow.
                <strong className="font-extrabold text-red-700 sm:block">
                  {" "}
                  Increase Conversion.{" "}
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {/* <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a> */}

                <Button
                  className="w-full sm:w-auto px-12 font-medium"
                  size={"lg"}
                  variant={"default"}
                >
                  Começar
                </Button>
                <Button
                  className="w-full sm:w-auto px-12 bg-transparent font-medium shadow-lg"
                  size={"lg"}
                  variant={"secondary"}
                >
                  Sobre Mais
                </Button>

                {/* <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a> */}
              </div>
            </div>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
}

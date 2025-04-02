import Functionalities from "@/components/containers/Functionalities";
import Hero from "@/components/pures/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="w-full flex flex-col">
        <nav className="w-full">
          <div className="w-11/12 mx-auto flex justify-between items-center py-2">
            <h2 className="text-2xl">Deep Work</h2>
            <div className="flex items-center gap-2">
              <Button>Tengo una cuenta</Button>
              <Button variant="link">Soy nuevo</Button>
            </div>
          </div>
        </nav>
        <Hero />
        <Functionalities />
      </header>
    </div>
  );
}

import Functionalities from "@/components/containers/Functionalities";
import Hero from "@/components/containers/Hero";
import HowWork from "@/components/containers/HowWork";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="w-full border-b">
        <div className="w-11/12 mx-auto py-4">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Dumbbell className="h-8 w-8" />
              <h1 className="text-2xl font-bold"><Link href="/">DeepWork</Link></h1>
            </div>
            <nav className="hidden md:flex gap-4 lg:gap-6">
              <Link href="/features" className="font-medium hover:text-gray-600">Funcionalidades</Link>
              <Link href="/pricing" className="font-medium hover:text-gray-600">Precios</Link>
              <Link href="/about" className="font-medium hover:text-gray-600">Nosotros</Link>
            </nav>
            <div className="flex gap-2">
              <Button asChild>
                <Link href="/login">Tengo cuenta</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/signup">Soy nuevo</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Hero />
        <section className="py-10">
          <div className="w-11/12 mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Funcionalidades potentes para gimnasios y clientes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra plataforma ofrece todo lo necesario para gestionar tu gimnasio de forma eficiente y brindar una experiencia excepcional a tus clientes.
            </p>
          </div>
        </section>
        <Functionalities />
        <HowWork />
      </main>
      <footer className="w-full bg-gray-900 text-white py-12">
        <div className="w-11/12 mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="h-6 w-6" /><h2 className="text-xl font-bold cursor-default">DeepWork</h2>
              </div>
              <p className="text-gray-400 mb-4">
                La solución definitiva para gestionar tu gimnasio y fidelizar a tus clientes.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

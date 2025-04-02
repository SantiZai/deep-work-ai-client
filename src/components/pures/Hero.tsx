import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white">
            <div className="w-11/12 mx-auto py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            La solución completa para tu gimnasio
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Optimice las operaciones de su gimnasio, interactúe con sus clientes y haga crecer su negocio con nuestra plataforma todo en uno.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Button size="lg" asChild>
                                <Link href="/signup">Iniciar gratis</Link>
                            </Button>
                            <Button size="lg" variant="link" asChild>
                                <Link href="/demo">Quiero una demo</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-xl">
                        <Image
                            src="/placeholder.svg?height=400&width=500"
                            alt="Gym Management Dashboard"
                            className="rounded-lg"
                            height={300}
                            width={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
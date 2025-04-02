import Link from "next/link"
import { Button } from "../ui/button"

const HowWork = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Como funciona DeepWork</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nuestra plataforma está diseñada para ser intuitiva tanto para propietarios de gimnasios como para clientes, lo que facilita la gestión de su actividad física.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl font-bold text-gray-600">1</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Registro del gimnasio</h3>
                        <p className="text-gray-600">
                            Los gimnasios se registran en la plataforma, crean su perfil y configuran sus planes de membresía y límites de aforo.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl font-bold text-gray-600">2</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Incorporación de clientes</h3>
                        <p className="text-gray-600">
                            Los clientes se registran, seleccionan su gimnasio y completan su perfil con sus objetivos y preferencias de fitness.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl font-bold text-gray-600">3</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Experiencia fluida</h3>
                        <p className="text-gray-600">
                            Los clientes reservan sesiones, siguen los entrenamientos asignados y monitorizan su progreso mientras los gimnasios gestionan sus operaciones de forma eficiente.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Button size="lg" asChild>
                        <Link href="/signup">Empieza ahora</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HowWork
import { JSX } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Users, Dumbbell, Calendar, BarChart, ChartSpline, UserCircle } from "lucide-react"

const Functionalities = () => {
    const functionalities = [
        {
            title: "Gestión de usuarios",
            subtitle: "Gestione fácilmente las inscripciones al gimnasio y las membresías de sus clientes",
            description: "Optimice el proceso de registro, controle el estado de las membresías y automatice los recordatorios de pago para garantizar un flujo de pagos eficiente.",
            icon: <Users className="h-6 w-6" />
        },
        {
            title: "Asignación de entrenamiento",
            subtitle: "Crea y asigna rutinas de entrenamiento personalizadas",
            description: "Los instructores pueden crear planes de entrenamiento personalizados para cada cliente según sus objetivos de fitness, nivel de experiencia y preferencias.",
            icon: <Dumbbell className="h-6 w-6" />
        },
        {
            title: "Sistema de reservas inteligente",
            subtitle: "Gestiona la capacidad del gimnasio y las reservas de clases",
            description: "Maximiza la asistencia permitiendo a tus clientes reservar franjas horarias, garantizando que tu gimnasio nunca supere su capacidad.",
            icon: <Calendar />
        },
        {
            title: "Seguimiento del progreso",
            subtitle: "Monitorea el progreso de tus clientes",
            description: "Realiza un seguimiento del progreso de tus clientes a lo largo del tiempo, incluyendo métricas como peso, altura y rendimiento en ejercicios específicos.",
            icon: <ChartSpline className="h-6 w-6" />
        },
        {
            title: "Informes y análisis",
            subtitle: "Genera informes detallados sobre el rendimiento del gimnasio",
            description: "Obtén información valiosa sobre la asistencia, las tendencias de las clases y el rendimiento financiero del gimnasio.",
            icon: <BarChart className="h-6 w-6" />
        },
        {
            title: "Panel de autogestión",
            subtitle: "Control total sobre rutinas y progreso",
            description: "Permite a tus usuarios gestionar sus rutinas y progreso, personalizando sus entrenamientos según sus preferencias y metas.",
            icon: <UserCircle className="h-6 w-6" />
        }
    ]

    return (
        <section className="w-full py-2">
            <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-4">
                {
                    functionalities.map((functionality: { title: string, subtitle: string, description: string, icon: JSX.Element }) => {
                        return (
                            <Card key={functionality.title}>
                                <CardHeader>
                                    <div className="bg-slate-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        {functionality.icon}
                                    </div>
                                    <CardTitle>{functionality.title}</CardTitle>
                                    <CardDescription>
                                        {functionality.subtitle}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        {functionality.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Functionalities
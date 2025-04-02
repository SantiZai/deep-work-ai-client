const Functionalities = () => {
    const functionalities = [
        {
            title: "Entrenamientos",
            subtitle: "Registra y sigue tus entrenamientos",
            description: "Crea rutinas personalizadas para tus objetivos.",
            icon: "🏋🏽‍♂️"
        },
        {
            title: "Calendario",
            subtitle: "Programa tus sesiones de gimnasio",
            description: "Organiza tu horario y nunca pierdas una sesión de entrenamiento.",
            icon: "📅"
        },
        {
            title: "Estadísticas",
            subtitle: "Analiza tu rendimiento",
            description: "Visualiza tu progreso con gráficos y estadísticas.",
            icon: "📊"
        },
        {
            title: "Perfil",
            subtitle: "Gestiona tu información",
            description: "Personaliza tus entrenamientos con tus datos.",
            icon: "📈"
        },
    ]

    return (
        <section className="w-full py-2">
            <div className="w-11/12 mx-auto grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-1 gap-4">
            {
                functionalities.map((functionality: { title: string, subtitle: string, description: string, icon: string }) => {
                    return (
                        <div key={functionality.title} className="w-full mx-auto rounded-lg p-4 border border-slate-200">
                            <div className="flex gap-1">
                                <span className="text-lg">{functionality.icon}</span>
                                <h3 className="text-lg font-semibold">
                                    {functionality.title}
                                </h3>
                            </div>
                            <span className="text-sm text-slate-600">{functionality.subtitle}</span>
                            <p className="text-slate-700 my-4">{functionality.description}</p>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}

export default Functionalities
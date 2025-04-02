"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Dumbbell, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleGymLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call for authentication
        setTimeout(() => {
            setIsLoading(false)
            // Redirect to gym dashboard after successful login
            router.push("/dashboard/gym")
        }, 1500)
    }

    const handleClientLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call for authentication
        setTimeout(() => {
            setIsLoading(false)
            // Redirect to client dashboard after successful login
            router.push("/dashboard/client")
        }, 1500)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md">
                <div className="flex justify-center mb-8">
                    <Link href="/" className="flex items-center gap-2">
                        <Dumbbell className="h-8 w-8 text-gray-600" />
                        <h1 className="text-2xl font-bold">DeepWork</h1>
                    </Link>
                </div>

                <Tabs defaultValue="gym" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="gym" className="cursor-pointer">Gym Login</TabsTrigger>
                        <TabsTrigger value="client" className="cursor-pointer">User Login</TabsTrigger>
                    </TabsList>

                    <TabsContent value="gym">
                        <Card>
                            <CardHeader>
                                <CardTitle>Gimnasio</CardTitle>
                                <CardDescription>Ingrese sus credenciales de administrador para acceder a su dashboard</CardDescription>
                            </CardHeader>
                            <form onSubmit={handleGymLogin}>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="gym-email">Email</Label>
                                        <Input id="gym-email" type="email" placeholder="your@email.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="gym-password">Contraseña</Label>
                                        <div className="relative">
                                            <Input id="gym-password" type={showPassword ? "text" : "password"} placeholder="********" required />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400 hover:text-gray-600"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="gym-remember"
                                                className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                                            />
                                            <Label htmlFor="gym-remember" className="text-sm font-normal">
                                                Recordarme
                                            </Label>
                                        </div>
                                        <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-800">
                                            Contraseña olvidada?
                                        </Link>
                                    </div>
                                </CardContent>
                                <CardFooter className="mt-2">
                                    <Button type="submit" className="w-full bg-gray-600 hover:bg-gray-700" disabled={isLoading}>
                                        {isLoading ? "Logging in..." : "Log In"}
                                    </Button>
                                </CardFooter>
                            </form>
                        </Card>
                        <div className="mt-4 text-center text-sm text-gray-600">
                            No tienes una cuenta?{" "}
                            <Link href="/signup" className="text-gray-600 hover:text-gray-800 font-medium">
                                Registrarse
                            </Link>
                        </div>
                    </TabsContent>

                    <TabsContent value="client">
                        <Card>
                            <CardHeader>
                                <CardTitle>Usuario</CardTitle>
                                <CardDescription>Ingrese sus datos para acceder a su cuenta y empezar a entrenar</CardDescription>
                            </CardHeader>
                            <form onSubmit={handleClientLogin}>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="client-email">Email</Label>
                                        <Input id="client-email" type="email" placeholder="your@email.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="client-password">Contraseña</Label>
                                        <div className="relative">
                                            <Input id="client-password" type={showPassword ? "text" : "password"} placeholder="********" required />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400 hover:text-gray-600"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="client-remember"
                                                className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                                            />
                                            <Label htmlFor="client-remember" className="text-sm font-normal">
                                                Recordarme
                                            </Label>
                                        </div>
                                        <Link href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-800">
                                            Contraseña olvidada?
                                        </Link>
                                    </div>
                                </CardContent>
                                <CardFooter className="mt-2">
                                    <Button type="submit" className="w-full bg-gray-600 hover:bg-gray-700" disabled={isLoading}>
                                        {isLoading ? "Logging in..." : "Log In"}
                                    </Button>
                                </CardFooter>
                            </form>
                        </Card>
                        <div className="mt-4 text-center text-sm text-gray-600">
                            No tienes una cuenta?{" "}
                            <Link href="/signup" className="text-gray-600 hover:text-gray-800 font-medium">
                                Registrarse
                            </Link>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}


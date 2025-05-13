"use client"

import { useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon, PanelLeftClose } from "lucide-react"
import { Label } from "@/components/ui/label"



export function Menu() {

    const [open, setOpen] = useState(true);

    return (
        <>

            <div>
                <PanelLeftClose />
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Abrir menu</span>
                    </Button>
                </SheetTrigger>

                <SheetContent side="left" className="w-[300px]">
                    <div className="space-y-8 py-6">
                        {/* Logo */}
                        <div className="px-4">
                            <h1 className="text-2xl font-bold">Logo</h1>
                            <h2 className="text-lg">FX</h2>
                        </div>

                        {/* Menu */}
                        <nav className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="px-4 text-sm font-semibold">Filia I A</h3>
                                <p className="px-4 text-sm text-muted-foreground">Menu</p>
                            </div>

                            <div className="space-y-2 px-4">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="dashboard" />
                                    <Label htmlFor="dashboard">Dashboard</Label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox id="usuarios" />
                                    <Label htmlFor="usuarios">Usuários</Label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox id="documentos" defaultChecked />
                                    <Label htmlFor="documentos">Documentos</Label>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="px-4 text-sm font-semibold">Configurações</h3>
                                <div className="flex items-center space-x-2 px-4">
                                    <Checkbox id="geral" defaultChecked />
                                    <Label htmlFor="geral">Geral</Label>
                                </div>
                            </div>
                        </nav>

                        {/* Ajuda */}
                        <div className="px-4">
                            <h3 className="text-sm font-semibold">Precisa de ajuda?</h3>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}
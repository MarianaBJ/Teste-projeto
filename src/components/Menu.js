"use client"

import { useState } from "react"
import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
    Activity,
    User,
    FileCheck,
    Settings,
    PanelLeftClose,
    ChevronsUpDown,
    Headphones
} from "lucide-react"


export function Menu() {

    const [open, setOpen] = useState(false);

    return (
        <>

            <Button onClick={() => setOpen(true)} variant="ghost" size="icon" className="rounded-full cursor-pointer">
                <PanelLeftClose />
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>


                <SheetContent side="left" className="[&>button:first-of-type]:hidden w-64 min-h-screen border-r bg-gray-100 flex flex-col">
                    <div className="bg-gray-100 border-b bg-gray-50">
                        <div className="w-24 mb-6 bg-black text-white font-bold text-center py-2 rounded-lg m-6">
                            Logo
                        </div>
                    </div>


                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-8">
                            <button className="flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 text-[#102822] font-semibold">
                                FA
                            </button>
                            <div className="font-medium text-sm">Filial A</div>
                            <ChevronsUpDown className="w-4 h-4 text-muted-foreground" />
                        </div>


                        <nav className="flex flex-col gap-6 text-sm text-muted-foreground">
                            <div>
                                <p className="mb-3 text-xs tracking-wide text-muted-foreground">
                                    Menu
                                </p>
                                <ul className="flex flex-col gap-2">
                                    <li className="flex items-center gap-3 px-3 py-2 rounded-2xl hover:bg-muted cursor-pointer">
                                        <Activity className="w-5 h-5" />
                                        <span>Dashboard</span>
                                    </li>
                                    <li className="flex items-center gap-3 px-3 py-2 rounded-2xl text-white cursor-pointer" style={{ backgroundColor: "#102822" }}>
                                        <User className="w-5 h-5" />
                                        <span>Usuários</span>
                                    </li>
                                    <li className="flex items-center gap-3 px-3 py-2 rounded-2xl hover:bg-muted cursor-pointer">
                                        <FileCheck className="w-5 h-5" />
                                        <span>Documentos</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="mb-3 text-xs tracking-wide text-muted-foreground">
                                    Configurações
                                </p>
                                <ul className="flex flex-col gap-2">
                                    <li className="flex items-center gap-3 px-3 py-2 rounded-2xl hover:bg-muted cursor-pointer">
                                        <Settings className="w-5 h-5" />
                                        <span>Geral</span>
                                    </li>
                                </ul>
                            </div>

                        </nav>

                    </div>
                    <div className="flex items-center justify-center fixed bottom-4 m-6  w-[208px] h-[30px] gap-2 bg-white rounded-lg">

                        <p className="text-md">Precisa de ajuda?</p>
                        <Headphones className="w-[16px] h-[16px]" />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}
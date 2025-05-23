"use client"

import { useState } from "react"
import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { X, Plus } from "lucide-react"


export function UserModal() {

    const [open, setOpen] = useState(false);

    const { register, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            whatsapp: true,
            cpf: "",
            rg: "",
            status: true
        }
    });


    const onSubmit = (data) => {

        //Aviso de sucesso ao criar usuário
        toast.custom((item => (
            <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-md shadow-md border max-w-sm w-full">
                <span className="text-sm text-black">Usuário adicionado com sucesso!</span>
                <Button
                    className="rounded-full"
                    variant="outline"
                    size="sm"
                    onClick={() => toast.dismiss(t.id)}
                >
                    Fechar
                </Button>
            </div>
        )))

        setOpen(false)
    }


    return (
        <>
            <Button onClick={() => setOpen(true)} className="cursor-pointer rounded-2xl"><Plus /> Adicionar</Button>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent
                    side="right"
                    className="w-[40vw] max-w-[90vw] min-w-[34vw] !max-w-[90vw] z-50 shadow-lg flex flex-col [&>button:first-of-type]:hidden"
                >
                    <div className="h-full p-6 overflow-y-auto">
                        <div className="flex items-center justify-between mb-8 w-full">
                            <h1 className="font-serif text-2xl">Adicionar usuário</h1>


                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full border border-gray-300"
                                onClick={() => setOpen(false)}
                            >
                                <X className="h-4 w-4" />
                            </Button>

                        </div>

                        <form
                            className="flex flex-col justify-between flex-grow gap-4"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div>
                                <Label className="mb-2">Nome completo</Label>
                                <Input {...register("name")} placeholder="Digite o nome" className="text-sm" />
                            </div>

                            <div>
                                <Label className="mb-2">E-mail</Label>
                                <Input {...register("email")} placeholder="Digite o e-mail" className="text-sm" />
                            </div>

                            <div>
                                <Label className="mb-2">Telefone</Label>
                                <Input {...register("phone")} placeholder="Informe o telefone" className="text-sm" />
                                <div className="flex items-center space-x-2 mt-2">
                                    <Checkbox
                                        id="whatsapp"
                                        checked={watch("whatsapp")}
                                        onCheckedChange={(checked) => setValue("whatsapp", !!checked)}
                                    />
                                    <Label htmlFor="whatsapp">WhatsApp</Label>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <Label className="mb-2">CPF</Label>
                                    <Input {...register("cpf")} placeholder="Informe o CPF" className="text-sm" />
                                </div>
                                <div className="flex-1">
                                    <Label className="mb-2">RG</Label>
                                    <Input {...register("rg")} placeholder="Informe o RG" className="text-sm" />
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between p-2 border rounded-md bg-gray-100 w-full">
                                <div>
                                    <Label className="mb-2">Status</Label>
                                    <span className="text-sm font-extralight">
                                        Defina se o usuário estará ativo ao ser adicionado.
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        checked={watch("status")}
                                        onCheckedChange={(checked) => setValue("status", !!checked)}
                                    />
                                    <span>{watch("status") ? "Ativo" : "Inativo"}</span>
                                </div>
                            </div>

                            <div className="flex justify-end mt-4 gap-4">

                                <Button type="button" variant="outline" className="w-24 rounded-2xl">Cancelar</Button>

                                <Button type="submit" className="w-24 rounded-2xl">Adicionar</Button>
                            </div>
                        </form>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}
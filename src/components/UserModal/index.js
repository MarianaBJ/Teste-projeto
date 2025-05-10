"use client"

import { useState } from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { useForm } from "react-hook-form"

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

        toast.success("Usuário adicionado com sucesso!", {
            description: `Cadastro de ${data.name} realizado.`,
        })

        setOpen(false)
    }


    return (
        <>
            <Button onClick={() => setOpen(true)}>Adicionar usuário</Button>

            <Drawer open={open} onOpenChange={setOpen} direction="right">
                <DrawerContent className="w-full max-w-md ml-auto p-6">
                    <DrawerHeader>
                        <DrawerTitle className="text-xl">Adicionar usuário</DrawerTitle>
                    </DrawerHeader>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Label>Nome completo</Label>
                            <Input {...register("name")} placeholder="Digite o nome" />
                        </div>

                        <div>
                            <Label>E-mail</Label>
                            <Input {...register("email")} placeholder="Digite o e-mail" />
                        </div>

                        <div>
                            <Label>Telefone</Label>
                            <Input {...register("phone")} placeholder="Informe o telefone" />
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
                                <Label>CPF</Label>
                                <Input {...register("cpf")} placeholder="Informe o CPF" />
                            </div>
                            <div className="flex-1">
                                <Label>RG</Label>
                                <Input {...register("rg")} placeholder="Informe o RG" />
                            </div>
                        </div>

                        <div>
                            <Label>Status</Label>
                            <div className="flex items-center justify-between p-2 border rounded-md">
                                <span>Defina se o usuário estará ativo ao ser adicionado.</span>
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        checked={watch("status")}
                                        onCheckedChange={(checked) => setValue("status", !!checked)}
                                    />
                                    <span>{watch("status") ? "Ativo" : "Inativo"}</span>
                                </div>
                            </div>
                        </div>

                        <DrawerFooter className="mt-6 flex justify-between">
                            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
                            <Button type="submit">Adicionar</Button>
                        </DrawerFooter>
                    </form>
                </DrawerContent>
            </Drawer>
        </>
    )
}
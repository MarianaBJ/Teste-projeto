"use client"

import { useState } from "react";
import Image from "next/image";
import { UserModal } from "@/components/UserModal"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Search } from "lucide-react"
import { Menu } from "@/components/Menu";
import { Pagination } from "@/components/Pagination";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"



const users = [
  {
    name: "José Ricardo Gomes",
    age: 51,
    gender: "Homem",
    date: "22/03/2025 - 10:21am",
    status: "active",
    tags: ["Santzás"]
  },
  {
    name: "Helena Soares",
    age: 46,
    gender: "Mulher",
    date: "22/03/2025 - 10:21am",
    status: "active",
    tags: ["Santzás"]
  },
  {
    name: "Debora Santana",
    age: 24,
    gender: "Mulher",
    date: "22/03/2025 - 10:21am",
    status: "inactive",
    tags: ["Santzás"]
  },
  // ... outros usuários
]

const stats = {
  totalUsers: 294,
  sessionTime: "31m 20s",
  active: 203,
  inactive: 127
}


export default function Home() {
  // const [open, setOpen] = useState(false);

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const isOpen = sidebar.classList.contains('-translate-x-full');
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden', isOpen);
  }

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">



        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.totalUsers}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Tempo de sessão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.sessionTime}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-500">{stats.active}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Inativos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-500">{stats.inactive}</p>
            </CardContent>
          </Card>
        </div>

        {/* Barra de busca */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar..."
            className="pl-10"
          />
        </div>

        {/* Lista de usuários */}
        <div className="space-y-4">
          {users.map((user, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user.age} anos, {user.gender}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {user.date}
                    </p>
                    <div className="mt-2 flex gap-2">
                      {user.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                      <Badge variant="secondary">Usuário pedido</Badge>
                    </div>
                  </div>
                  <Badge variant={user.status === "active" ? "default" : "secondary"}>
                    {user.status === "active" ? "Ativo" : "Inativo"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        <div>
          <Pagination currentItem={5} totalItems={10} itemsPerPage={5} />
        </div>

      </div>
    </div>


  );
}

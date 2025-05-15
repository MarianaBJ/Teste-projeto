"use client"

import { UserModal } from "@/components/UserModal"
import { Input } from "@/components/ui/input"
import { Search, EllipsisVertical, Bell, HelpCircle, Tag, Clock3, Calendar, User, ListFilter } from "lucide-react"
import { Menu } from "@/components/Menu";
import { Pagination } from "@/components/Pagination";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const stats =
{
  totalUsers: 294,
  sessionTime: "31m 20s",
  active: 203,
  inactive: 127
}


const users = [
  {
    initials: "JG",
    name: "José Ricardo Gomes",
    age: 51,
    gender: "Homem",
    date: "22/03/2025 - 10:21am",
    duration: "38m22s",
    role: "Usuário padrão",
    status: "Ativo",
  },
  {
    initials: "HS",
    name: "Helena Soares",
    age: 46,
    gender: "Mulher",
    date: "22/03/2025 - 10:21am",
    duration: "38m22s",
    role: "Usuário padrão",
    status: "Inativo",
  },
  {
    initials: "DS",
    name: "Débora Santana",
    age: 24,
    gender: "Mulher",
    date: "22/03/2025 - 10:21am",
    duration: "38m22s",
    role: "Usuário padrão",
    status: "Inativo",
  },
  {
    initials: "DS",
    name: "Dulce Soares",
    age: 46,
    gender: "Mulher",
    date: "22/03/2025 - 10:21am",
    duration: "38m22s",
    role: "Usuário padrão",
    status: "Inativo",
  },
  {
    initials: "CD",
    name: "Carlos Daniel",
    age: 51,
    gender: "Homem",
    date: "22/03/2025 - 10:21am",
    duration: "22m22s",
    role: "Usuário padrão",
    status: "Ativo",
  },
  {
    initials: "EA",
    name: "Edivaldo Araújo",
    age: 51,
    gender: "Homem",
    date: "22/03/2025 - 10:21am",
    duration: "57m22s",
    role: "Usuário padrão",
    status: "Ativo",
  },
]



export default function Home() {



  return (
    <div className="min-h-screen">

      <header className="bg-white flex items-center justify-between px-6 py-4 border-b bg-gray-50">
        <div className="text-xl font-bold">

          <Menu />

        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full border border-gray-300 cursor-pointer">
            <HelpCircle className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full border border-gray-300 cursor-pointer">
            <Bell className="w-5 h-5" />
          </Button>
          <Avatar>
            <AvatarImage src={"/a5b55e6a18f38cfb04ab63d0b0afa39f2a1ebbf9.png"} />
          </Avatar>
        </div>
      </header>


      <div className="flex flex-col gap-8 p-12">

        <div className="flex justify-between">
          <h1 className="font-serif text-[32px]">Usuários</h1>
          <UserModal />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-md bg-gray-100 w-full">
            <p className="text-sm text-muted-foreground">Usuários</p>
            <p className="noto-serif text-[32px]">{stats.totalUsers}</p>
          </div>

          <div className="p-4 rounded-md bg-gray-100 w-full">
            <p className="text-sm text-muted-foreground">Tempo de sessão</p>
            <p className="noto-serif text-[32px]">{stats.sessionTime}</p>
          </div>

          <div className="p-4 rounded-md bg-gray-100 w-full">
            <p className="text-sm text-muted-foreground">Ativos</p>
            <p className="noto-serif text-[32px]">{stats.active}</p>
          </div>

          <div className="p-4 rounded-md bg-gray-100 w-full">
            <p className="text-sm text-muted-foreground">Inativos</p>
            <p className="noto-serif text-[32px]">{stats.inactive}</p>
          </div>
        </div>


        <div className="flex gap-2">
          <div className="relative w-[94%]">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar..."
              className="pl-10"
            />
          </div>

          <Button variant="ghost" size="icon" className="rounded-full border border-gray-300 cursor-pointer">
            <ListFilter className="w-5 h-5" />
          </Button>
        </div>


        <div className="space-y-4">
          {users.map((user, index) => (
            <Card key={index}>
              <CardContent>
                <div className="flex justify-between items-center">

                  <section className="flex items-center gap-4 w-[70%]">
                    <Avatar className="w-14 h-14 font-medium">
                      <AvatarFallback>{user.initials}</AvatarFallback>
                    </Avatar>

                    <div className="w-[70%]">
                      <div className="flex items-center gap-4">
                        <h3 className="font-medium">{user.name}</h3>
                        <p className="flex items-center gap-1 text-sm text-muted-foreground">
                          <User className="w-[12px] h-[12px]" />
                          {user.age} anos, {user.gender}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-[12px] h-[12px]" />
                          {user.date}
                        </p>
                        <p className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock3 className="w-[12px] h-[12px]" />
                          {user.duration}
                        </p>
                        <p className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Tag className="w-[12px] h-[12px]" />
                          {user.role}
                        </p>
                      </div>
                    </div>
                  </section>

                  <div className="flex items-center gap-4">
                    <Badge className={user.status !== "Ativo" && 'text-[#71717A]'} variant={user.status === "Ativo" ? "secondary" : "outlined"}>
                      {user.status}
                    </Badge>
                    <EllipsisVertical className="w-[16px] h-[16px]" />
                  </div>
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

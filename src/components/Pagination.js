"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function Pagination({ currentItem, totalItems, itemsPerPage }) {

    const currentPage = Math.floor(currentItem / itemsPerPage) + 1


    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 py-4">
            {/* Contador de itens */}
            <div className="text-sm text-muted-foreground">
                {currentItem} de {totalItems} itens
            </div>

            {/* Navegação */}
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { }}
                    disabled={currentItem <= 1}
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Anterior
                </Button>

                <div className="px-4 py-1 bg-muted rounded-md text-sm">
                    {currentPage}
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { }}
                    disabled={currentItem + itemsPerPage > totalItems}
                >
                    Próxima
                    <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
            </div>

            {/* Itens por página */}
            <div className="flex items-center gap-2">
                <p className="text-sm">Itens por página</p>
                <Select
                    value={`${itemsPerPage}`}
                    onValueChange={(value) => { }}
                >
                    <SelectTrigger className="h-8 w-[70px]">
                        <SelectValue placeholder={itemsPerPage} />
                    </SelectTrigger>
                    <SelectContent>
                        {[10, 20, 30, 40, 50].map((size) => (
                            <SelectItem key={size} value={`${size}`}>
                                {size}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
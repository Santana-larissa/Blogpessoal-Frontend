import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface UserContextProps {
    nome: string
    trocarNome: (nome: string) => void
}

interface UserProviderProps {
    children: ReactNode
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps)

export function UserProvider({children}: UserProviderProps) {
    const [nome, setNome] = useState('');

    function trocarNome(nome: string) {
        setNome(nome)
    }

return (
        <UserContext.Provider value={{ nome, trocarNome }}>
            {children}
        </UserContext.Provider>
    )
}
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";

export const PerfilContext = createContext();

const PerfilContextProvider = (props) =>{

    const [perfils, setPerfils] = useState([
        {
            id: uuidv4(),
            name: 'Santos Futebol Clube',
            email: 'santos@email.com',
            adress: "Rua Princesa Isabel, s/n, Vila Belmiro, em Santos, SP, CEP 11075-500"

        }
    ])

    //sending the updated data to local storage
    useEffect(() => {
        setPerfils(JSON.parse(localStorage.getItem('perfils')))
    }, [])

    //sending the data to local storage
    useEffect(()=>{
        localStorage.setItem('perfils', JSON.stringify(perfils))
    })

    const addPerfil = ( name, email, adress) => {
        setPerfils([ ...perfils, {id: uuidv4(),  name, email, adress}])
    }

    const updatePerfil = (id, updatedPerfil) =>{
        setPerfils(perfils.map((perfil) => perfil.id === id ? updatedPerfil : perfil ))
    }

    const deletePerfil = (id) =>{
        setPerfils(perfils.filter(perfil => perfil.id !== id))
    }

    return(
        <PerfilContext.Provider value={{perfils, addPerfil, deletePerfil, updatePerfil}}>
            {props.children}
        </PerfilContext.Provider>
    )
}

export default PerfilContextProvider;
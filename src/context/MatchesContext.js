import {createContext, useEffect, useState} from "react";
import api from "../services/service";

export const MatchContext = createContext();

const MatchContextProvider = (props) => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const storedPlayers = await api.get('/v1/matches');
            console.log(storedPlayers.data.matches);

            if (storedPlayers) {
                setMatches(storedPlayers.data.matches);
            }
        }

        fetchData();
    }, []);

    const addMatch = (newMatch) => {
        setMatches([...matches, newMatch]);
    }

    const editMatch = async (_id, updatedMatch) => {
        try {
            const response = await api.patch(`/v1/matches/${_id}`, updatedMatch);
            setMatches(matches.map((match) => (match.id === _id ? response.data : match)));

            alert(` Partida em ${updatedMatch.local} foi atualizado!!`);
            window.location.reload();
        } catch (error) {
            console.error("Erro ao editar jogador:", error);
        }
    };


    const deleteMatch = async (_id) => {
        try {
            await api.delete(`/v1/matches/${_id}`);
            setMatches(matches.filter(match => match.id !== _id));

            alert(`Partida deletada com sucesso!!`);
            window.location.reload();
        } catch (error) {
            console.error("Erro ao excluir partida:", error);

            // Verifique se a resposta do servidor está disponível
            if (error.response) {
                console.error("Resposta do servidor:", error.response.data);
            }
        }
    }




    return (
        <MatchContext.Provider
            value={{matches, addMatch, editMatch, deleteMatch}}
        >
            {props.children}

        </MatchContext.Provider>
    )
}

export default  MatchContextProvider;
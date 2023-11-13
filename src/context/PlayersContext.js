import {createContext, useEffect, useState} from "react";
import api from "../services/service";
import player from "../components/players/Player";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const storedPlayers = await api.get('/v1/players');
            console.log(storedPlayers.data.players);

            if (storedPlayers) {
                setPlayers(storedPlayers.data.players);
            }
        }

        fetchData();
    }, []);

    const addPlayer = (newPlayer) => {
        setPlayers([...players, newPlayer]);
    }

    const editPlayer = async (_id, updatedPlayer) => {
        try {
            const response = await api.patch(`/v1/players/${_id}`, updatedPlayer);
            setPlayers(players.map((player) => (player.id === _id ? response.data : player)));

            alert(`${updatedPlayer.name} foi atualizado!!`);
            window.location.reload();
        } catch (error) {
            console.error("Erro ao editar jogador:", error);
        }
    };


    const deletePlayer = async (_id) => {
        try {
            await api.delete(`/v1/players/${_id}`);
            setPlayers(players.filter(player => player.id !== _id));

            alert(`${player.name} deletado com sucesso!!`);
            window.location.reload();
        } catch (error) {
            console.error("Erro ao excluir jogador:", error);

            // Verifique se a resposta do servidor está disponível
            if (error.response) {
                console.error("Resposta do servidor:", error.response.data);
            }
        }
    }




    return (
        <PlayerContext.Provider
            value={{players, addPlayer, editPlayer, deletePlayer}}
        >
            {props.children}

        </PlayerContext.Provider>
    )
}

export default  PlayerContextProvider;
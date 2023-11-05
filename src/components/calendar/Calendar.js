import { useRef, useState } from "react";
import { formatDate } from '@fullcalendar/core';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box, IconButton, List,
    ListItem, ListItemText,
    Typography, useTheme
} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { tokens } from "../../theme";
import { useEffect } from "react";
import NotesList from "./NotesList"
import { nanoid } from 'nanoid';

const Calendar = () =>{

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const[currentEvents, setCurrentEvents] = useState([])

    const calendarRef = useRef(null)

    const handleDateClick = (selected) =>{
        const title = prompt("Please enter a new title for your event")
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();


        if(title){
            calendarApi.addEvent({
                id: nanoid(), //`${selected.dateStr} - ${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    }

    //Notes part--------------------------------------
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text:"My note",
            date: "10/08/2022",
        },

    ]);

    const addNote=(text)=>{
        const date = new Date()
        const newNote= {
            id:nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes=[...notes, newNote]
        setNotes(newNotes)
    }

    const deleteNote = (id) =>{
        const newNotes = notes.filter((note)=>note.id != id)
        setNotes(newNotes)
    }

    useEffect(()=>{
        const savedNotes = JSON.parse(localStorage.getItem('react-notes2-data'))
        if(savedNotes){
            setNotes(savedNotes)
        }
    },[])

    //Saving the notes to local Storage
    useEffect(()=>{
        localStorage.setItem(
            'react-notes2-data',
            JSON.stringify(notes)
        )
    },[notes])

    const handleEventClick = (event) => {
        if (
            window.confirm(`Are you sure you want to delete the event '${event.title}'`)
        ) {
            // Remove the event from the currentEvents array
            const updatedEvents = currentEvents.filter((evt) => evt.id !== event.id);
            setCurrentEvents(updatedEvents);

            // Update local storage
            localStorage.setItem("currentEvents", JSON.stringify(updatedEvents));

            // Refresh the FullCalendar events by setting the state
            const calendarApi = calendarRef.current?.getApi(); // Use optional chaining
            if (calendarApi) {
                calendarApi.removeAllEvents();
                calendarApi.addEventSource(updatedEvents);
            }}
    }

    useEffect(() => {
        const savedEvents = localStorage.getItem("currentEvents");
        if (savedEvents) {
            setCurrentEvents(JSON.parse(savedEvents));

        }
    }, []);

    useEffect(() => {
        localStorage.setItem("currentEvents", JSON.stringify(currentEvents));
    }, [currentEvents]);



    return(
        <Box  m="20px" >
            <Typography
                variant="h3"
                fontWeight="600"
                mb="20px"

                color={colors.grey[100]}
            >
                Home
            </Typography>


            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >

                {/*calendar section*/}
                <Box
                    mt="0px"
                    mb="5px"
                    gridColumn="span 8"
                    gridRow="span 4"
                    backgroundColor={colors.primary[400]}
                    sx={{
                        overflow:"auto",
                    }}
                >
                    <Box
                        mt="20px"
                        p="0 20px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                    </Box>

                    <Box p="10px">
                        <FullCalendar
                            height="75vh"
                            plugins={[
                                dayGridPlugin,
                                timeGridPlugin,
                                interactionPlugin,

                            ]}
                            headerToolbar={{
                                left: "prev,next today",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay"
                            }}
                            initialView="dayGridMonth"
                            editable={true}
                            selectable={true}
                            selectMirror={true}
                            dayMaxEvents={true}
                            select={handleDateClick}
                            eventClick={handleEventClick}
                            eventsSet={(events) => setCurrentEvents(events)}
                            initialEvents={[
                                { id: nanoid(), title: "All-day event", date: "2023-07-14" },
                                { id: nanoid(), title: "Timed event", date: "2023-07-22" },
                                { id: nanoid(), title: "Project Apresentation", date: "2023-09-13"}
                            ]}
                        />
                    </Box>
                </Box>

                {/*calendar info section(eventos)*/}
                <Box
                    height="610px"
                    mt="0px"
                    mb="5px"
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    sx={{
                        overflow:"auto",
                    }}
                >
                    <Box
                        mt="20px"
                        p="0 20px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography
                            variant="h4"
                            fontWeight="600"
                            color={colors.grey[100]}
                        >
                            Eventos
                        </Typography>

                    </Box>

                    <Box  p="10px" pl="15px" pr="15px" mt="0px">
                        <List>
                            {currentEvents.map((event) => (
                                <ListItem
                                    key={event.id}
                                    sx={{
                                        backgroundColor: colors.greenAccent[500],
                                        margin: "10px 0",
                                        borderRadius: "2px",
                                    }}
                                >
                                    <ListItemText
                                        primary={event.title}
                                        secondary={
                                            <Typography>
                                                {formatDate(event.start, {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </Typography>
                                        }

                                    />
                                    <IconButton onClick={() => handleEventClick(event)} ><CloseIcon/></IconButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}


export default Calendar;





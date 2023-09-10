import Main from "./Main"
import { useState } from "react"

function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {
    const sortedNotes = notes.sort((a, b) => b.lastModefied - a.lastModefied)

    const burger = document.querySelector('.burger')
    const navbar = <Main />
    console.log(burger, navbar)
    // burger.addEventListener('click', changenavbar)
    // function changenavbar() {
    //     if (navbar.classList.contains('navbar-active')) {
    //         navbar.classList.remove('navbar-active')
    //     }
    //     else {
    //         navbar.classList.add('navbar-active')
    //     }
    // }
    const [sidebarActive, setSidebarActive] = useState(false)
    const openSidebar = () => {
        setSidebarActive(true)
    }
    console.log(typeof onAddNote)
    const closeSidebar = () => {
        setSidebarActive(false)
    }
    const handleClickNote = (note) => {
        setActiveNote(note.id)
        closeSidebar()
    }
    
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button className="addButton" onClick={onAddNote}>ADD</button>
                <img onClick={openSidebar} className="burger" src="https://cdn-icons-png.flaticon.com/512/4159/4159685.png" />
            </div>
            <div className={`app-sidebar-notes ${sidebarActive ? 'notes-active' : ''}`}>
            {notes.length ?
                    <>
                        {sortedNotes.map((note) => (
                            <div className={`app-sidebar-note ${note.id === activeNote && 'active'}`} onClick={() => handleClickNote(note)}>
                                <div className="sidebar-note-title">
                                    <strong>{note.title}</strong>
                                    <button className="deleteButton" onClick={() => onDeleteNote(note.id)}>Delete</button>
                                </div>
                                <p>{note.body && note.body.substr(1, 100) + "..."}</p>
                                <small className="note-meta">Last modefied {new Date(note.lastModefied).toLocaleDateString("de-AT", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}</small>
                            </div>
                        ))}
                    </>
                : <div className="noNotesClass">No notess</div>
            }
            </div>
        </div>
    ) 
}

export default Sidebar;
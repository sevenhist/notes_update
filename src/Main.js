import { ReactMarkdown } from "react-markdown/lib/react-markdown"
function Main ({ activeNote, onUpdateNote }) {
    if (!activeNote) {
        return(
            <div className="no-active-note">No active Note</div>
        )
    }
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value, 
            lastModefied: Date.now()
        })
    }
    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input placeholder="Untitle Text" type="text" id="title" value={activeNote.title} onChange={(event) => onEditField("title", event.target.value)} autoFocus/>
                <textarea 
                    id="body" 
                    placeholder="Write your note here..." 
                    value={activeNote?.body} 
                    onChange={(event) => onEditField("body", event.target.value)}/>
                <div className="borderbottom"></div>
            </div>
            {/* <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
            </div> */}
        </div>
)}
export default Main;
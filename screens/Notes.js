import {useState} from "react";
import {View} from "react-native";
import Note from "../components/Note"
import CreateNote from "../components/CreateNote";
import { v4 as uuid } from "uuid";



export default function Notes() {

    const [notes, setNotes] = useState([]);
    const [text, setText] = useState("");

    const textHandler = (t) => {
        setText(t.target.value);
    };

    const saveHandler = () => {
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuid(),
                text: text,
            },
        ]);
        setText("");
    };

    const deleteHandler = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };

    return (
        <View>
            <CreateNote
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={text}/>
            <Note/>
            <Note/>
        </View>
    );
}

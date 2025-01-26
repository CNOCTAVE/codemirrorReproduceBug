import { EditorState } from "@codemirror/state"
import { basicSetup, EditorView } from "codemirror"
import { javascript } from "@codemirror/lang-javascript"

let data1 = "12\n34\n56\n";
let data2 = "56\n34\n12\n";

// new 1 of 2 EditorView()
let state1 = EditorState.create({
    doc: data1,
    extensions: [
        basicSetup
    ]
});

let view1 = new EditorView({
    state1,
    parent: document.getElementById('notEmptyFolder1')
});

// new 2 of 2 EditorView()
let state2 = EditorState.create({
    doc: data2,
    extensions: [
        basicSetup
    ]
});

let view2 = new EditorView({
    state2,
    parent: document.getElementById('notEmptyFolder2')
});

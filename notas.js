document.addEventListener("DOMContentLoaded", function () {
    loadNotes();
});

function addNote() {
    let noteText = document.getElementById("noteInput").value;
    if (noteText.trim() === "") return;
    
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById("noteInput").value = "";
    loadNotes();
}

function loadNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let notesList = document.getElementById("notesList");
    notesList.innerHTML = "";
    
    notes.forEach((note, index) => {
        let noteItem = `<li class='list-group-item d-flex justify-content-between align-items-center'>
                            ${note}
                            <button class='btn btn-danger btn-sm' onclick='deleteNote(${index})'>X</button>
                        </li>`;
        notesList.innerHTML += noteItem;
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}
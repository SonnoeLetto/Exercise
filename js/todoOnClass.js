class List {
    notes = [];
    addNote(text) {
        const note = {
            text,
            id: Date.now(),
            isComplete: false,
        };
        const find = this.notes.find((el) => el.text === text);
        if (!find) {

            this.notes.push(note);
        } else {
            alert("Уже есть");
        }
    }
    getNoteIndexById(id) {
        return this.notes.findIndex(function (el) {
            return el.id === id;
        });
    }
    removeNote(id, asker = confirm('Вы уверены?')) {
        if (asker) {
            const index = this.getNoteIndexById(id);
            this.notes.splice(index, 1);
        }
    }
    updateNoteText(id, text, asker = confirm('Вы уверены?')) {
        const find = this.notes.find((el) => el.text === text);
        if ((asker) && (!find)) {
            const index = this.getNoteIndexById(id);
            this.notes[index].text = text;
        } else {
            alert('error')
        }
    }
    toLocStorage(key) {
        let object = JSON.stringify(this.notes);
        localStorage.setItem( key, object)
    }
    fromLocStorage(key) {
        let retObj = JSON.parse(localStorage.getItem(key))
        return retObj;
    }
}



class ToDo extends List {
    setNoteAsComplete(id) {
        const index = this.getNoteIndexById(id);
        this.notes[index].isComplete = true;
    }
    statistic() {
        return this.notes.reduce((acc, x) => {
            if (x.completed) {
                acc.completed++;
            } else {
                acc.incomplete++;
            }
            return acc;
        },
            {
                total: this.notes.length,
                completed: 0,
                incomplete: 0,
            });
    }
}

const firstToDo = new ToDo('morningRules')

// console.log(list);
// console.log(firstToDo);
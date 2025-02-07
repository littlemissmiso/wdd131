const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChaptersList() || []; 

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

//Notes added for future reference when I'm hopelessly lost on another assignment. :)
button.addEventListener("click", function() {
    if (input.value.trim() !== '') { //checks that the input isn't empty
        displayList(input.value); //calls the function that outputs the submitted chapter
        chaptersArray.push(input.value); //adds the chapter to the array list
        setChapterList(); //updates the localStorage with the new array list
        input.value = ''; //clears the input
        input.focus(); //sets the focus back to the input
    }
});

function displayList(item) {
    if (input.value.trim() !== '') {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');

        li.textContent = item;
        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
    }
    else {
        input.focus();
    }
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChaptersList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter); //redefines the chaptersArray to return everything except the chapter being removed
    setChapterList();
}


/*====================== Time row gap 30 minutes ==================================== */
var timeSlots = [
    '12:00 AM', '12:30 AM',
    '1:00 AM', '1:30 AM',
    '2:00 AM', '2:30 AM',
    '3:00 AM', '3:30 AM',
    '4:00 AM', '4:30 AM',
    '5:00 AM', '5:30 AM',
    '6:00 AM', '6:30 AM',
    '7:00 AM', '7:30 AM',
    '8:00 AM', '8:30 AM',
    '9:00 AM', '9:30 AM',
    '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM',
    '10:00 PM', '10:30 PM',
    '11:00 PM', '11:30 PM',
];

for (var i = 0; i < timeSlots.length; i++) {
    var tr = document.createElement('tr');
    
    var timeCell = document.createElement('td');
    timeCell.textContent = timeSlots[i];
    tr.appendChild(timeCell);
    
    for (var j = 0; j < 7; j++) {
        var dayCell = document.createElement('td');
        dayCell.textContent = '';
        var noteLink = document.createElement('a');
        noteLink.classList.add('note-icon');
        noteLink.href = '#'; // Set the link to '#' for now
        noteLink.setAttribute('onclick', 'createNote()'); // Call the createNote function on click
        var noteIcon = document.createElement('i');
        noteIcon.classList.add('fas', 'fa-sticky-note', 'note-icon'); // Updated class name to 'fas' instead of 'fa'
        noteLink.appendChild(noteIcon);
        dayCell.appendChild(noteLink);
        tr.appendChild(dayCell);
    }
    
    document.querySelector('table').appendChild(tr);
}

/*====================== Create Note ==================================== */
function createNote() {
    var modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.style.display = 'flex'; // Display the modal
    
    var closeButton = document.getElementById('modal-close');
    closeButton.addEventListener('click', closeModal);
    
    var saveButton = document.getElementById('modal-save');
    saveButton.addEventListener('click', saveNote);
}

function closeModal() {
    var modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.style.display = 'none'; // Hide the modal
}

function saveNote() {
    var titleInput = document.getElementById('modal-title-input');
    var contentInput = document.getElementById('modal-content-input');
    
    var title = titleInput.value;
    var content = contentInput.value;
    
    // Perform the logic to save the note
    
    console.log('Note saved');
    
    // Clear the form inputs
    titleInput.value = '';
    contentInput.value = '';
    
    closeModal();
}

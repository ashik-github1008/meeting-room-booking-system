// Sample data
const rooms = [
    { id: 1, name: "Room A", bookings: [] },
    { id: 2, name: "Room B", bookings: [] },
    // Add more rooms here
];

const timeSlots = [
    "9:00-9:30",
    "9:30-10:00",
    // Add more time slots here
];

// Load data from local storage or initialize if not present
const loadData = () => {
    const savedRooms = JSON.parse(localStorage.getItem("meetingRooms"));
    if (savedRooms) {
        rooms.forEach((room, index) => {
            room.bookings = savedRooms[index].bookings;
        });
    }
};

// Populate room and time slot select options
const populateSelectOptions = () => {
    const roomSelect = document.getElementById("room-select");
    const timeSlotSelect = document.getElementById("time-slot-select");
    
    rooms.forEach(room => {
        const option = document.createElement("option");
        option.value = room.id;
        option.textContent = room.name;
        roomSelect.appendChild(option);
    });

    timeSlots.forEach(slot => {
        const option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;
        timeSlotSelect.appendChild(option);
    });
};

// Save data to local storage
const saveData = () => {
    const dataToSave = rooms.map(room => ({ ...room }));
    localStorage.setItem("meetingRooms", JSON.stringify(dataToSave));
};

// Initialize the application
loadData();
populateSelectOptions();

// Add event listeners and implement the remaining functionality
// ...

// Function to update the difficulty bar and text based on active dots
function updateDifficulty(level) {
    // Loop through all 5 dots
    for (let i = 1; i <= 5; i++) {
        const dot = document.getElementById(`dot${i}`);
        // If the dot's index is less than or equal to the level, activate the dot
        if (i <= level) {
            dot.style.backgroundColor = getDotColor(i); // Set the dot color
        } else {
            dot.style.backgroundColor = 'gray'; // Set inactive dots to gray
        }
    }
    // Update the difficulty text and color based on the level
    const difficultyText = getDifficultyText(level);
    const difficultyColor = getDotColor(level);
    document.getElementById('difficulty-text').textContent = difficultyText;
}

// Function to get the color based on the level
function getDotColor(level) {
    switch (level) {
        case 1: return 'green';      // Easy
        case 2: return 'yellow';     // Medium
        case 3: return 'orange';     // Intermediate
        case 4: return 'red';        // Hard
        case 5: return 'darkred';    // Expert
        default: return 'gray';
    }
}

// Function to get the text based on the level
function getDifficultyText(level) {
    switch (level) {
        case 1: return 'Easy';
        case 2: return 'Medium';
        case 3: return 'Intermediate';
        case 4: return 'Hard';
        case 5: return 'Expert';
        default: return 'Easy';
    }
}

// Example: Set the difficulty level to 3 (Intermediate)
updateDifficulty(3);

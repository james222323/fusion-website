// Function to reset local storage
function resetLocalStorage() {
    // Exclude specific item (sgs_profile_username) from being cleared
    const excludedItem = 'sgs_profile_username';

    // Get the current items in local storage
    const currentLocalStorage = { ...localStorage };

    // Clear all items in local storage
    localStorage.clear();

    // Restore the excluded item, if it exists
    if (currentLocalStorage.hasOwnProperty(excludedItem)) {
        localStorage.setItem(excludedItem, currentLocalStorage[excludedItem]);
    }

    // Return a message to be displayed
    return 'All data has been reset with the exeption game data.';
}

// Function to check if the prompt has been shown
function hasPromptBeenShown() {
    return localStorage.getItem('promptShown') === 'true';
}

// Function to set the prompt as shown
function setPromptAsShown() {
    localStorage.setItem('promptShown', 'true');
}

// Function to prompt the user and reset local storage
function promptAndResetLocalStorage() {
    if (!hasPromptBeenShown()) {
        const message = resetLocalStorage();
        alert(message);

        // Set the prompt as shown after displaying it
        setPromptAsShown();
    }
}

// Attach the function to the window load event with a delay
window.addEventListener('load', function () {
    // Delay the prompt by 3 seconds (3000 milliseconds)
    setTimeout(promptAndResetLocalStorage, 3000);
});

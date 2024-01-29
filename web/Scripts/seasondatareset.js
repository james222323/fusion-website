function resetLocalStorage() {

    const excludedItem = 'sgs_profile_username';

    const currentLocalStorage = { ...localStorage };

    localStorage.clear();

    if (currentLocalStorage.hasOwnProperty(excludedItem)) {
        localStorage.setItem(excludedItem, currentLocalStorage[excludedItem]);
    }

    return 'Update V7.1.0';
}

function hasPromptBeenShown() {
    return localStorage.getItem('promptShown') === 'true';
}

function setPromptAsShown() {
    localStorage.setItem('promptShown', 'true');
}

function promptAndResetLocalStorage() {
    if (!hasPromptBeenShown()) {
        const confirmation = alert('All data has been reset with the exception of game progress.');

        if (confirmation) {
            const message = resetLocalStorage();
            alert(message);
        }

        setPromptAsShown();
    }
}

window.addEventListener('load', function () {
    setTimeout(promptAndResetLocalStorage, 30);
});

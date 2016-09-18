import { loadUsers, loadProfile } from './loaders'
import {
    renderSearchResult,
    toggleSpinner,
    renderUser,
    renderUserProfile,
    toggleError
} from './views'

function handleSearchClick(e) {
    // const query = document.q
    toggleSpinner();
    const usernameInput = document.querySelector('#username');
    const username = usernameInput.value;
    loadUsers(username)
        .then((data) => {
            toggleSpinner();
            return data;
        })
        .then(data => {
            renderSearchResult(data)
            return data
        })
        .then(data => {
            for (let element of document.querySelectorAll('.js-user')) {
                element.addEventListener('click', handleUserClick);
            }
        })
        .catch((message) => {
            toggleSpinner();
            alert(message);
        });
}

function handleUserClick(e) {
    const userNode = e.target;
    const accountId = userNode.dataset.id;
    toggleSpinner();
    loadProfile(accountId)
        .then(data => renderUserProfile(data))
        .then(toggleSpinner);
}

export {
    handleSearchClick,
    handleUserClick
}
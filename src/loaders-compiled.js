'use strict';

/**
 * Created by v_asavets on 13.9.16.
 */
var API_PROXY_URL = 'http://188.166.73.133/wg-api';

var GAME = 'wot';

function loadUsers(username) {
    var url = API_PROXY_URL + '/' + GAME + '/account/list/?search=' + username;
    return makeRequest(url);
}

function loadProfile(accountId) {
    var url = API_PROXY_URL + '/' + GAME + '/account/info/?account_id=' + accountId;
    return makeRequest(url).then(function (data) {
        return data[accountId];
    });
}

function makeRequest(url) {
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (responseJson) {
        return new Promise(function (resolve, reject) {
            if (responseJson.status === 'ok') {
                resolve(responseJson.data);
            } else {
                reject(responseJson.error.message);
            }
        });
    });
}

module.exports = {
    loadUsers: loadUsers,
    loadProfile: loadProfile
};

//# sourceMappingURL=loaders-compiled.js.map
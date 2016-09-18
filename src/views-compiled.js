'use strict';

/**
 * Created by v_asavets on 13.9.16.
 */

function toggleSpinner() {
    // clean all content of passed node and then render element with `spinner` classname
    var spinner = document.querySelector('#spinner');
    spinner.classList.toggle('show');
}

function renderSearchResult(accounts) {
    // render result to the node with class name `search-results`
    // Note! it's already exist. See index.html for more info.
    // Each search result item should be rendered
    // inside node with `search-results_item` class name.
    var userList = accounts.map(renderUser).join('');
    var node = document.querySelector('#search-results');
    node.innerHTML = userList;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = document.querySelectorAll('.js-user')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var element = _step.value;

            element.addEventListener('click', handleUserClick);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function renderUser(_ref) {
    var nickname = _ref.nickname;
    var account_id = _ref.account_id;

    return '\n    <div class="search-results_item js-user" data-id="' + account_id + '">' + nickname + '</div>\n  ';
}

function renderUserProfile(_ref2) {
    var nickname = _ref2.nickname;
    var global_rating = _ref2.global_rating;
    var statistics = _ref2.statistics;
    var _statistics$all = statistics.all;
    var wins = _statistics$all.wins;
    var battles = _statistics$all.battles;

    var winsPercents = (wins / battles * 100).toFixed(2);
    var profile = '\n    <div>\n    <h1>' + nickname + '</h1>\n    <p>Rating: ' + global_rating + '</p>\n    <p>Battles: ' + battles + '</p>\n    <p>Wins Percent: ' + winsPercents + '</p>\n    </div>\n  ';
    document.querySelector('#profile').innerHTML = profile;
}

//# sourceMappingURL=views-compiled.js.map
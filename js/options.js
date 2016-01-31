// Saves options to chrome.storage
function save_options() {
    var durationPicker = document.getElementById('duration').value;
    var activateCheck = document.getElementById('activate').checked;
    var randomWebText = document.getElementById('randomSites').value;
    var blacklistWebText = document.getElementById('blacklist').value;

    chrome.storage.sync.set({
        duration: durationPicker,
        activateClicking: activateCheck,
        random: randomWebText,
        blacklist: blacklistWebText
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        duration: '4', // value 4 is every 5 min (see html)
        activateClicking: true,
        random: 'www.orf.at, www.9gag.com, www.news.at, www.wikipedia.at',
        blacklist: 'murder, terror, bomb, porn, buy, sell, voldemort, horcrux'
    }, function(items) {
        document.getElementById('duration').value = items.duration;
        document.getElementById('activate').checked = items.activateClicking;
        document.getElementById('randomSites').value = items.random;
        document.getElementById('blacklist').value = items.blacklist;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('category-button').addEventListener('click', function() {
    document.getElementById('category-window').classList.toggle('hidden');
});

window.addEventListener('click', function(event) {
    if (!event.target.closest('#category-button') && !event.target.closest('#category-window')) {
        document.getElementById('category-window').classList.add('hidden');
    }
});
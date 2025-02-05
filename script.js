const buttonsContainer = document.getElementById('itemsContainer');

buttonsContainer.addEventListener('mouseover', () => {
    buttonsContainer.style.animationPlayState = 'paused';
});

buttonsContainer.addEventListener('mouseout', () => {
    buttonsContainer.style.animationPlayState = 'running';
});

const categories = [
    { theme: "Фрукти", word: "яблуко" },
    { theme: "Тварини", word: "кіт" },
    { theme: "Кольори", word: "синій" },
    { theme: "Міста", word: "київ" },
    { theme: "Їжа", word: "піцца" }
];
const startBtn = document.getElementById('startBtn');
const gameContent = document.getElementById('gameContent');
const themeElement = document.getElementById('theme');
const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}
startBtn.addEventListener('click', function() {
    const selectedCategory = getRandomCategory();
    themeElement.textContent = selectedCategory.theme;
    gameContent.style.display = 'block';
    submitBtn.addEventListener('click', function() {
        const userAnswer = userInput.value.trim().toLowerCase();
        const correctAnswer = selectedCategory.word.toLowerCase();
        if (userAnswer === correctAnswer) {
            alert('You win! Правильне слово: ' + selectedCategory.word);
        } else {
            alert('You lose! Правильне слово: ' + selectedCategory.word);
        }
        userInput.value = '';
    });
});
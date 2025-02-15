const emojiDictionary = {
    "fogo": "🔥",
    "amor": "❤️",
    "parabéns": "🎉",
    "dinheiro": "💰",
    "carro": "🚗",
    "feliz": "😊",
    "triste": "😢",
    "computador": "💻",
    "música": "🎵",
    "pizza": "🍕",
    "coração": "💖",
    "estrela": "⭐",
    "sol": "☀️",
    "lua": "🌙",
    "café": "☕",
    "ideia": "💡",
    "livro": "📖"
};

function convertText() {
    let inputText = document.getElementById("inputText").value;

    // Substitui palavras pelo emoji correspondente
    let transformedText = inputText.split(" ").map(word => {
        return emojiDictionary[word.toLowerCase()] || word;
    }).join(" ");

    document.getElementById("outputText").value = transformedText;
}

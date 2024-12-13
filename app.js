document.addEventListener("DOMContentLoaded", () => {
    // Snowflake animation logic
    const snowflakeEmoji = "❄️";
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.textContent = snowflakeEmoji;
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
      snowflake.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(snowflake);
    }
  
    // Winner selection logic
    document.getElementById("pickWinner").addEventListener("click", () => {
      const resultElement = document.getElementById("result");
      const nameList = document.getElementById("nameList").value.trim();
  
      // Split the list into an array, filtering out empty lines
      const names = nameList.split("\n").map((name) => name.trim()).filter((name) => name);
  
      if (names.length === 0) {
        resultElement.textContent = "Please enter at least one name.";
        return;
      }
  
      // Pick a random name
      const randomIndex = Math.floor(Math.random() * names.length);
      const winner = names[randomIndex];
  
      // Start loading animation
      resultElement.textContent = ""; // Clear previous text
      resultElement.classList.add("loading");
  
      // After 2500ms, reveal the winner
      setTimeout(() => {
        resultElement.classList.remove("loading");
        resultElement.classList.add("revealed");
        resultElement.textContent = `🎄✨ The winner is: ${winner} 🎁🎉`;
      }, 2500);
    });
  });
  
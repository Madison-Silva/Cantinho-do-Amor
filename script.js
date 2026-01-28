
//contagen para iniciar o site

// Atualiza a contagem de segundos
const secondsElement = document.getElementById("seconds");
const footer = document.querySelector(".footer");
const todayElement = document.getElementById("today");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let seconds = 10; // tempo de contagem inicial
secondsElement.textContent = seconds;

const countdown = setInterval(() => {
  seconds--;
  secondsElement.textContent = seconds;

  if (seconds <= 0) {
    clearInterval(countdown);
    footer.classList.add("show"); // mostra mensagem final
    todayElement.textContent = new Date().toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  }
}, 1000);



//interfacie de contagem regressiva

const startDate = new Date(2024, 9, 28); // mês começa do 0 (9 = outubro)

function updateCounter() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById("years").textContent = String(years).padStart(2, "0");
  document.getElementById("months").textContent = String(months).padStart(2, "0");
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCounter, 1000);
updateCounter();



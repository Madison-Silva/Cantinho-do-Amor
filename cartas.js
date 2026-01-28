function alternarEscrita() {
  const area = document.getElementById("areaEscrita");
  const icone = document.getElementById("icone");

  area.classList.toggle("escondido");

  icone.innerText = area.classList.contains("escondido")
    ? "✍️ Escrever carta"
    : "❌ Fechar escrita";
}

function salvarCarta() {
  const titulo = document.getElementById("titulo").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const dataAbertura = document.getElementById("dataAbertura").value;

  if (!titulo || !mensagem) {
    alert("Preencha o título e a mensagem 💖");
    return;
  }

  const cartas = JSON.parse(localStorage.getItem("cartas")) || [];

  cartas.push({
    titulo,
    mensagem,
    dataAbertura
  });

  localStorage.setItem("cartas", JSON.stringify(cartas));

  document.getElementById("titulo").value = "";
  document.getElementById("mensagem").value = "";
  document.getElementById("dataAbertura").value = "";

  alternarEscrita();
  carregarCartas();
}

function apagarCarta(index) {
  if (!confirm("Tem certeza que deseja apagar essa carta? 💔")) return;

  const cartas = JSON.parse(localStorage.getItem("cartas")) || [];
  cartas.splice(index, 1);

  localStorage.setItem("cartas", JSON.stringify(cartas));
  carregarCartas();
}

function carregarCartas() {
  const lista = document.getElementById("lista-cartas");
  lista.innerHTML = "";

  const cartas = JSON.parse(localStorage.getItem("cartas")) || [];
  const hoje = new Date().toISOString().split("T")[0];

  cartas.forEach((carta, index) => {
    const div = document.createElement("div");
    div.className = "carta";

    let conteudo = "";
    let bloqueada = false;

    if (carta.dataAbertura && hoje < carta.dataAbertura) {
      conteudo = "🔒 Esta carta só poderá ser aberta na data escolhida.";
      bloqueada = true;
    } else {
      conteudo = carta.mensagem;
    }

    div.innerHTML = `
      <h3>${carta.titulo}</h3>
      <p class="${bloqueada ? "bloqueada" : ""}">${conteudo}</p>
      ${carta.dataAbertura ? `<div class="data-info">📅 Data: ${carta.dataAbertura}</div>` : ""}
      <button class="btn-apagar" onclick="apagarCarta(${index})">🗑️ Apagar</button>
    `;

    if (!bloqueada) {
      div.querySelector("h3").onclick = () => {
        const p = div.querySelector("p");
        p.style.display = p.style.display === "block" ? "none" : "block";
      };
    }

    lista.appendChild(div);
  });
}

carregarCartas();

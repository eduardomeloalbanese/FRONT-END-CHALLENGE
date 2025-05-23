document.getElementById('diario-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const alimentacao = document.getElementById('alimentacao').value;
  const caminhada = document.getElementById('caminhada').value;
  const sono = document.getElementById('sono').value;
  const humor = document.getElementById('humor').value;

  const registro = `
    <li>
      <strong>🍲 Alimentação:</strong> ${alimentacao}<br>
      <strong>🚶 Caminhada:</strong> ${caminhada}<br>
      <strong>😴 Sono:</strong> ${sono}<br>
      <strong>😊 Humor:</strong> ${humor}
    </li>
  `;

  document.getElementById('registros-lista').innerHTML += registro;

  // Limpa os campos
  document.getElementById('diario-form').reset();
});

  
  function registrarAtividade() {
    const texto = document.getElementById("atividade").value.trim();
    const mensagem = document.getElementById("mensagemMotivacional");
  
    if (texto.length === 0) {
      mensagem.textContent = "Por favor, escreva algo!";
      return;
    }
  
    mensagem.textContent = "Parabéns por cuidar da sua saúde hoje! 👏";
    document.getElementById("atividade").value = "";
  }
  
  function ganharMedalha() {
    const msg = document.getElementById("medalhaMensagem");
    msg.innerHTML = "🏆 Você se cuidou essa semana. Estamos orgulhosos de você!";
  }
  
  function lerTexto(id) {
    const texto = document.getElementById(id).innerText;
    const sintetizador = window.speechSynthesis;
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR';
    sintetizador.speak(fala);
  }
  
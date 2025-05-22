document.getElementById("contatoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const endereco = document.getElementById("endereco").value;
  const redes = document.getElementById("redes").value;
  const infoAdicional = document.getElementById("infoAdicional").value;

  const mensagem = `
    Obrigado, ${nome}! Seus dados foram enviados com sucesso.<br>
    📞 Telefone: ${telefone}<br>
    📧 Email: ${email}<br>
    🏠 Endereço: ${endereco}<br>
    🌐 Redes Sociais: ${redes}<br>
    📝 Informações: ${infoAdicional}
  `;

  document.getElementById("mensagem").innerHTML = mensagem;
  document.getElementById("contatoForm").reset();
});


/* ===========================================================
   AEB — Agência Espacial Brasileira | script.js
   Funcionalidades: menu do celular, botão voltar ao topo
   e validação do formulário de contato.
   =========================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* -----------------------------------------------------------
     1. BOTÃO "VOLTAR AO TOPO"
  ----------------------------------------------------------- */
  var botaoTopo = document.getElementById("botaoTopo");

  if (botaoTopo) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 480) {
        botaoTopo.classList.add("visivel");
      } else {
        botaoTopo.classList.remove("visivel");
      }
    });

    botaoTopo.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* -----------------------------------------------------------
     2. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
  ----------------------------------------------------------- */
  var formulario = document.getElementById("formulario");
  var mensagemSucesso = document.getElementById("mensagemSucesso");

  if (formulario) {
    var campoNome = document.getElementById("nome");
    var campoEmail = document.getElementById("email");
    var campoAssunto = document.getElementById("assunto");
    var campoMensagem = document.getElementById("mensagem");

    var erroNome = document.getElementById("erroNome");
    var erroEmail = document.getElementById("erroEmail");
    var erroAssunto = document.getElementById("erroAssunto");
    var erroMensagem = document.getElementById("erroMensagem");

    formulario.addEventListener("submit", function (evento) {
      var temErro = false;
      mensagemSucesso.textContent = "";

      var nome = campoNome.value.trim();
      var email = campoEmail.value.trim();
      var assunto = campoAssunto.value;
      var mensagem = campoMensagem.value.trim();

      // Valida o nome
      if (nome.length < 3) {
        erroNome.textContent = "Informe seu nome completo (mínimo 3 caracteres).";
        campoNome.classList.add("campo-erro");
        temErro = true;
      } else {
        erroNome.textContent = "";
        campoNome.classList.remove("campo-erro");
      }

      // Valida o e-mail com uma expressão regular simples
      var formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formatoEmail.test(email)) {
        erroEmail.textContent = "Informe um e-mail válido.";
        campoEmail.classList.add("campo-erro");
        temErro = true;
      } else {
        erroEmail.textContent = "";
        campoEmail.classList.remove("campo-erro");
      }

      // Valida o assunto
      if (assunto === "") {
        erroAssunto.textContent = "Selecione um assunto.";
        campoAssunto.classList.add("campo-erro");
        temErro = true;
      } else {
        erroAssunto.textContent = "";
        campoAssunto.classList.remove("campo-erro");
      }

      // Valida a mensagem
      if (mensagem.length < 10) {
        erroMensagem.textContent = "Sua mensagem deve ter pelo menos 10 caracteres.";
        campoMensagem.classList.add("campo-erro");
        temErro = true;
      } else {
        erroMensagem.textContent = "";
        campoMensagem.classList.remove("campo-erro");
      }

      if (temErro) {
        evento.preventDefault();
        return;
      }

      // Formulário válido: como este é um projeto acadêmico sem backend,
      // a submissão real para contato.php é interrompida e substituída
      // por uma mensagem de confirmação visual.
      evento.preventDefault();
      mensagemSucesso.textContent = "Mensagem validada com sucesso! Obrigado por entrar em contato.";
      formulario.reset();
    });
  }

});
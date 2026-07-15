<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 🔹 Proteção básica contra caracteres maliciosos
    function limpar($dado) {
        return htmlspecialchars(trim($dado));
    }

    $nome = limpar($_POST["name"] ?? "");
    $email = limpar($_POST["email"] ?? "");
    $presenca = limpar($_POST["presenca"] ?? "");
    $numConvidados = limpar($_POST["numConvidados"] ?? "");
    $outrasRestricoes = limpar($_POST["outrasRestricoes"] ?? "");
    $mensagem = limpar($_POST["mensagem"] ?? "");

    // 🔹 Checkbox (restrições)
    $restricoes = "";
    if (!empty($_POST["restricoes"])) {
        $restricoes = implode(", ", $_POST["restricoes"]);
    }

    // Seu e-mail que vai receber
    $para = "seu@email.com.br";
    $assunto = "Nova Confirmação de Presença 💌";

    $corpo = "Nova confirmação recebida:\n\n";
    $corpo .= "Nome: $nome\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Presença: $presenca\n";
    $corpo .= "Número de convidados: $numConvidados\n";
    $corpo .= "Restrições alimentares: $restricoes\n";
    $corpo .= "Outras restrições: $outrasRestricoes\n";
    $corpo .= "Mensagem: $mensagem\n";
// subistituir o FROM:pelo dominio do seu site
    $headers = "From: site@seudominio.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($para, $assunto, $corpo, $headers)) {
        echo "<h2>Confirmação enviada com sucesso!</h2>";
    } else {
        echo "<h2>Erro ao enviar. Tente novamente.</h2>";
    }

} else {
    echo "Acesso inválido.";
}

?>
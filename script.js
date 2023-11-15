function AdivinhaNumero()
{
    var numSecreto = 567;
    var numTentativa = document.getElementById("value").value;

    if (numTentativa == numSecreto)
    {
        document.getElementById("result").innerHTML = "PARABÉNS, VOCÊ ACERTOU!";
    }
    else if (numTentativa > numSecreto)
    {
        document.getElementById("result").innerHTML = "O NÚMERO SECRETO É MENOR!";
    }
    else if (numTentativa < numSecreto)
    {
        document.getElementById("result").innerHTML = "O NÚMERO SECRETO É MAIOR!";
    }
}


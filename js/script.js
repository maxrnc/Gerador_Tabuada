function calcular() {
    let num1 = Number(document.getElementById("num1").value);
    let contador = 1;
    let texto = "";

    if (num1 % 1 === 0) {

        if (num1 < 1 || num1 > 10 || num1 == null) {
            document.getElementById("resultado").innerHTML = "Entrada Inválida";
        }
        else {
            while (contador <= 10) {
                texto = texto + num1 + " X " + contador + " = " + num1 * contador + "<br>";
                contador++;
            }
            document.getElementById("resultado").innerHTML = texto;
        }
    }
    else {
        document.getElementById("resultado").innerHTML = "Entrada Inválida, digite um número Inteiro";
    }
}

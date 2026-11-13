function hemisferio(valor, tipo) {
  if (tipo === "lat") return valor >= 0 ? "N" : "S";
  return valor >= 0 ? "L" : "O";
}

function decimalParaGMS(valor) {
  const absoluto = Math.abs(valor);
  const graus = Math.floor(absoluto);
  const minutosDecimais = (absoluto - graus) * 60;
  const minutos = Math.floor(minutosDecimais);
  const segundos = ((minutosDecimais - minutos) * 60).toFixed(2);
  return `${graus}° ${minutos}' ${segundos}"`;
}

document.getElementById("converter").addEventListener("click", () => {
  const valor = parseFloat(document.getElementById("decimal").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(valor)) {
    resultado.textContent = "Digite um número válido.";
    return;
  }

  const tipo = document.getElementById("tipo").value;
  const limite = tipo === "lat" ? 90 : 180;
  if (Math.abs(valor) > limite) {
    resultado.textContent = `Valor inválido: deve estar entre -${limite} e ${limite}.`;
    return;
  }

  resultado.textContent = `${decimalParaGMS(valor)} ${hemisferio(valor, tipo)}`;
});

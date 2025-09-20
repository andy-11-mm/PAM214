const persona = {
  nombre: "Ivan Isay",
  edad: 37,
  direccion: {
    ciudad: "Qro",
    pais: "MX"
  }
};

// Aplicamos desestructuración
const { nombre, edad, direccion: { ciudad } } = persona;

// Imprimimos el mensaje
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);

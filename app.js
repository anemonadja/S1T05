const notasFinales = [6, 8, 9, 2, 5, 10];

const sumaNotas = notasFinales.reduce(
    (sum, item) => sum + item,
    0
);

const infoSuma = (sumaNotas) => {
    console.log("La suma de notas es: ", sumaNotas);
};

const promedio = sumaNotas/6;

const infoPromedio = (promedio) => {
    console.log("El promedio es: ", promedio);
};

infoSuma(sumaNotas);
infoPromedio(promedio);
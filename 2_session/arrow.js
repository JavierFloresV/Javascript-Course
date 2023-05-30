/** Esta arrow function retorna un array de objetos
 * cada objeto tiene dos propiedades: nombre y edad
 */


const arrowFormula1 = () => {
  const infoFormula1 = [
    { piloto: "Fernando Alonso", equipo: "Aston Martin" },
    { piloto: "Carlos Sainz Jr", equipo: "Ferrari" },
    { piloto: "Sergio Perez", equipo: "Red Bull" }
  ];
  return infoFormula1;
};

console.log(arrowFormula1());

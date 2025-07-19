//Importando o lodash com um nome customizado
import _ from  'lodash';

//Executa a função kebabCase
let frase = "Esta é uma Frase de Exemplo";
let frasekebabCase = _.kebabCase(frase);

frase = "Este é um Título Fictício Para um Artigo";
frasekebabCase = _.kebabCase(frase);
console.log(frasekebabCase);


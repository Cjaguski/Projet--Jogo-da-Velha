# Aula 19/05
## Comandos básicos:
Iniciar app "npx expo start"

import { View } from "react-native" - importa uma função ou algo utilizavel da tecnologia especificada, no caso React Native

export default function index(){
    return <View>Teste</View>
}

o <View> funciona basicamente como uma div no html, é necessário uma View principal no código, essa terá um return antes:
return <View>
<View><Text>Uma view que não é a principal está dentro da View principal</Text></View>
</View>

No exemplo temos a View principal onde estamos retornando ela, e dentro dela temos outra View, que não é a principal

## estrutura
na pasta app deve se criar as páginas


o x no final de tsx é por conta de misturar linguagem de programação Typescript junto com o X de experience do usuario, misturando linguagem de programação e visual em um só código


Typescript é basicamente Javascript com uma camada a mais

## Anotações Principais sobre a aula
React Native é uma ferramenta que impoe padrões para seguirmos, 
para criar uma tela criamos um arquivo Javascript para colocarmos o código, nesse arquivo JS para que o react native transforme o código em uma tela se deve seguir padrões, descritos na documentação do React Native.
Esse padrão é exportar uma função - Usando - import { View } from "react-native" - importamos o View do React Native para que então possamos usar em partes do nosso código, como em - 
export default function index(){
    return <View>Teste</View>
}
-

Desafio para a proxima aula, estilizar o resto da pagina, deixar um simbolo de jogo da velha bonitinho
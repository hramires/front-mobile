import React from 'react';
import { Text, StyleSheet } from 'react-native';

function Texto({ children, style }) {
  let estilo = estilos.texto;
  
  if(style?.fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  }

  return <Text style={[style, estilo]}>{ children }</Text>
}
const Colors = ({
  headerColor: '#9DCC9B',
})
const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textoNegrito: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',

  }
});

export {Texto, Colors}
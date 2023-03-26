import React from 'react';
import { Text, View } from 'react-native';
import {styles} from "./styles"

export default function Home({header}) {
  return <>
      <Text styles={styles.container}>{header.title}</Text>
      </>
}


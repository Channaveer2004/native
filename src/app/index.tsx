import { View, Text, Button, FlatList } from 'react-native'
import React from 'react'
import Greet from '../components/Greet'
import ButtonComp from '../components/Button'
import Preeablecomp from '../components/Preeablecomp'
import Imagestest from '../components/Imagestest'
import Dynamic from '../components/Dynamic'
import Inlinestyle from '../components/Inlinestyle'
import Externalstylesheet from '../components/Externalstylesheet'
import Flatlistcomp from '../components/Flatlistcomp'
import Arrayofobj from '../components/Arrayofobj'


const Index = () => {
  return (
    <View>
      <Text>Hello world</Text>
      <Flatlistcomp/>
      <Arrayofobj/>
        
    </View>
  )
}

export default Index
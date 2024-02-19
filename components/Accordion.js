import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Accordion = ({ title, child }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={{ marginVertical: 5 }}>
      <TouchableOpacity onPress={toggleAccordion}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#f0f0f0',
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
          <Text style={{fontSize:16}}>{expanded ? '-' : '+'}</Text>
        </View>
      </TouchableOpacity>
      {expanded && (
        <View
          style={{ padding: 10, backgroundColor: '#e0e0e0', borderRadius: 5 }}>
          <View>{child}</View>
        </View>
      )}
    </View>
  );
};

export default Accordion;

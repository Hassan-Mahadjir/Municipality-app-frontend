import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Helper function to generate a random color
const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Define the props type
interface RandomColoredBackgroundProps {
  name: string;
}

// Component to render the background with the letter
const RandomColoredBackground: React.FC<RandomColoredBackgroundProps> = ({ name }) => {
  // Use useMemo to ensure the color is generated only once per component instance
  const backgroundColor = useMemo(() => getRandomColor(), []);
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <View style={[styles.container, { backgroundColor } as ViewStyle]}>
      <Text style={styles.letter as TextStyle}>{firstLetter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  letter: {
    fontSize: 100,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default RandomColoredBackground;

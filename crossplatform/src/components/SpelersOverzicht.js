import { Text, View } from 'react-native';

const SpelersOverzicht = () => {
  const titel = 'Spelersoverzicht';
  const spelers = ['Speler 1', 'Speler 2', 'Speler 3'];

  return (
    <View>
      <Text>{titel}</Text>
      {spelers.map((speler) => (
        <Text key={speler}>{speler}</Text>
      ))}
    </View>
  );
};

export default SpelersOverzicht;

import { Text, View } from 'react-native';

const SpelersOverzicht = () => {
  const titel = 'Spelersoverzicht';
  const spelers = [];

  return (
    <View>
      <Text>{titel}</Text>
      {spelers.length > 0 ? (
        spelers.map((speler) => <Text key={speler}>{speler}</Text>)
      ) : (
        <Text>Geen spelers gevonden.</Text>
      )}
    </View>
  );
};

export default SpelersOverzicht;

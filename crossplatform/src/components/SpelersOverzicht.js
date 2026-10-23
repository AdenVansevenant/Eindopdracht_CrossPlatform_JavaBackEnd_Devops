import { Text, View } from 'react-native';

const SpelersOverzicht = () => {
  const titel = 'Spelersoverzicht';
  const spelers = [
    { id: 1, naam: 'Speler 1', positie: 'Keeper' },
    { id: 2, naam: 'Speler 2', positie: 'Verdediger' },
    { id: 3, naam: 'Speler 3', positie: 'Aanvaller' },
  ];

  const toonSpeler = (speler) => (
    <View key={speler.id}>
      <Text>{speler.naam}</Text>
      <Text>Positie: {speler.positie}</Text>
    </View>
  );

  const toonSpelers = () => {
    if (spelers.length === 0) {
      return <Text>Geen spelers gevonden.</Text>;
    }

    return spelers.map((speler) => toonSpeler(speler));
  };

  return (
    <View>
      <Text>{titel}</Text>
      {toonSpelers()}
    </View>
  );
};

export default SpelersOverzicht;

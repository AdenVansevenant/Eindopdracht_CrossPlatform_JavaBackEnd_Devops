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

  const toonSamenvatting = () => {
    if (spelers.length === 0) {
      return <Text>Er zijn nog geen spelers toegevoegd aan het team.</Text>;
    }

    const aantalSpelers = spelers.length;
    const spelerWoord = aantalSpelers === 1 ? 'speler' : 'spelers';

    return <Text>Er staan {aantalSpelers} {spelerWoord} in het overzicht.</Text>;
  };

  return (
    <View>
      <Text>{titel}</Text>
      <Text>Bekijk de spelers en hun positie in het team.</Text>
      {toonSamenvatting()}
      {toonSpelers()}
    </View>
  );
};

export default SpelersOverzicht;

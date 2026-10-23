import { Text, View } from 'react-native';

const SpelersOverzicht = () => {
  const titel = 'Spelersoverzicht';
  const ploegverantwoordelijke = {
    naam: 'Coach Aden',
    rol: 'Ploegverantwoordelijke',
  };

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

  const toonCoach = () => (
    <View>
      <Text>{ploegverantwoordelijke.rol}</Text>
      <Text>{ploegverantwoordelijke.naam}</Text>
    </View>
  );

  const toonSpelersPerPositie = () => {
    const posities = ['Keeper', 'Verdediger', 'Middenvelder', 'Aanvaller'];

    return posities.map((positie) => {
      const spelersOpPositie = spelers.filter(
        (speler) => speler.positie === positie,
      );

      if (spelersOpPositie.length === 0) {
        return null;
      }

      return (
        <View key={positie}>
          <Text>{positie}</Text>
          {spelersOpPositie.map((speler) => (
            <Text key={speler.id}>{speler.naam}</Text>
          ))}
        </View>
      );
    });
  };

  return (
    <View>
      <Text>{titel}</Text>
      <Text>Bekijk de spelers en hun positie in het team.</Text>
      {toonCoach()}
      {toonSamenvatting()}
      {toonSpelers()}
      {toonSpelersPerPositie()}
    </View>
  );
};

export default SpelersOverzicht;

import { Text, View } from 'react-native';
import FantasySpeler from './FantasySpeler';

const SpelersOverzicht = () => {
  const titel = 'Mijn WK Fantasy Team';
  const basisspelers = [
    { id: 1, naam: 'Doelman 1', positie: 'Doelman', prijs: 8 },
    { id: 2, naam: 'Verdediger 1', positie: 'Verdediger', prijs: 7 },
    { id: 3, naam: 'Verdediger 2', positie: 'Verdediger', prijs: 6 },
    { id: 4, naam: 'Verdediger 3', positie: 'Verdediger', prijs: 6 },
    { id: 5, naam: 'Verdediger 4', positie: 'Verdediger', prijs: 5 },
    { id: 6, naam: 'Middenvelder 1', positie: 'Middenvelder', prijs: 9 },
    { id: 7, naam: 'Middenvelder 2', positie: 'Middenvelder', prijs: 8 },
    { id: 8, naam: 'Middenvelder 3', positie: 'Middenvelder', prijs: 7 },
    { id: 9, naam: 'Middenvelder 4', positie: 'Middenvelder', prijs: 6 },
    { id: 10, naam: 'Aanvaller 1', positie: 'Aanvaller', prijs: 10 },
    { id: 11, naam: 'Aanvaller 2', positie: 'Aanvaller', prijs: 8 },
  ];
  const bankzitters = [
    { id: 12, naam: 'Bankspeler 1', positie: 'Doelman', prijs: 4 },
    { id: 13, naam: 'Bankspeler 2', positie: 'Verdediger', prijs: 4 },
    { id: 14, naam: 'Bankspeler 3', positie: 'Middenvelder', prijs: 5 },
    { id: 15, naam: 'Bankspeler 4', positie: 'Aanvaller', prijs: 5 },
  ];

  const toonSpelers = (spelers) => {
    if (spelers.length === 0) {
      return <Text>Er zijn nog geen spelers geselecteerd.</Text>;
    }

    return spelers.map((speler) => (
      <FantasySpeler key={speler.id} speler={speler} />
    ));
  };

  const toonSamenvatting = () => {
    const totaal = basisspelers.length + bankzitters.length;
    const resterendBudget = 100 - [...basisspelers, ...bankzitters].reduce(
      (totaalPrijs, speler) => totaalPrijs + speler.prijs,
      0,
    );

    return (
      <View>
        <Text>Basisspelers: {basisspelers.length} van 11</Text>
        <Text>Bankzitters: {bankzitters.length} van 4</Text>
        <Text>Geselecteerd: {totaal} spelers</Text>
        <Text>Resterend budget: €{resterendBudget} miljoen</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>{titel}</Text>
      {toonSamenvatting()}
      <Text>Basisspelers</Text>
      {toonSpelers(basisspelers)}
      <Text>Bankzitters</Text>
      {toonSpelers(bankzitters)}
    </View>
  );
};

export default SpelersOverzicht;

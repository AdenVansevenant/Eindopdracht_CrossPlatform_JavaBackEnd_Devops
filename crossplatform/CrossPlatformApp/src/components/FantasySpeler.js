import { Text, View } from 'react-native';

const FantasySpeler = ({ speler, label }) => {
  return (
    <View>
      <Text>{label}</Text>
      <Text>{speler.naam}</Text>
      <Text>Positie: {speler.positie}</Text>
      <Text>Prijs: €{speler.prijs} miljoen</Text>
      <Text>Fantasy-punten: {speler.punten}</Text>
    </View>
  );
};

export default FantasySpeler;

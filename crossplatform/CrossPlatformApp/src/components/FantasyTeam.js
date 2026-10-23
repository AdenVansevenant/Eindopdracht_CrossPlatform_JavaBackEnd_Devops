import { Text, View } from 'react-native';
import FantasySpeler from './FantasySpeler';

const FantasyTeam = ({ basisspelers, bankzitters }) => {
  const toonSpelers = (spelers, label) => {
    if (spelers.length === 0) {
      return <Text>Er zijn nog geen spelers geselecteerd.</Text>;
    }

    return spelers.map((speler) => (
      <FantasySpeler key={speler.id} speler={speler} label={label} />
    ));
  };

  return (
    <View>
      <Text>Basisspelers</Text>
      {toonSpelers(basisspelers, 'Basis')}
      <Text>Bankzitters</Text>
      {toonSpelers(bankzitters, 'Bank')}
    </View>
  );
};

export default FantasyTeam;

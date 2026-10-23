import { Text, View } from 'react-native';
import FantasySpeler from './FantasySpeler';

const BeschikbareSpelers = ({ spelers }) => {
  const toonBeschikbareSpelers = () => {
    if (spelers.length === 0) {
      return <Text>Er zijn geen beschikbare spelers.</Text>;
    }

    return spelers.map((speler) => (
      <FantasySpeler key={speler.id} speler={speler} label="Beschikbaar" />
    ));
  };

  return (
    <View>
      <Text>Beschikbare spelers</Text>
      {toonBeschikbareSpelers()}
    </View>
  );
};

export default BeschikbareSpelers;

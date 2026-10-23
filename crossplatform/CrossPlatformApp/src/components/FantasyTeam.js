import { FlatList, Text, View } from 'react-native';
import FantasySpeler from './FantasySpeler';

const FantasyTeam = ({ basisspelers, bankzitters }) => {
  const renderSpeler = (label) => ({ item }) => (
    <FantasySpeler speler={item} label={label} />
  );

  const toonSpelers = (spelers, label) => {
    if (spelers.length === 0) {
      return <Text>Er zijn nog geen spelers geselecteerd.</Text>;
    }

    return (
      <FlatList
        data={spelers}
        renderItem={renderSpeler(label)}
        keyExtractor={(speler) => speler.id.toString()}
      />
    );
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

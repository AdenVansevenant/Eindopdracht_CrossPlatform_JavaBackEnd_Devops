import { FlatList, Text, View } from 'react-native';
import FantasySpeler from './FantasySpeler';

const BeschikbareSpelers = ({ spelers }) => {
  const renderSpeler = ({ item }) => (
    <FantasySpeler speler={item} label="Beschikbaar" />
  );

  return (
    <View>
      <Text>Beschikbare spelers</Text>
      {spelers.length === 0 ? (
        <Text>Er zijn geen beschikbare spelers.</Text>
      ) : (
        <FlatList
          data={spelers}
          renderItem={renderSpeler}
          keyExtractor={(speler) => speler.id.toString()}
        />
      )}
    </View>
  );
};

export default BeschikbareSpelers;

import { FlatList, StyleSheet, Text, View } from 'react-native';
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
    <View style={styles.sectie}>
      <Text style={styles.kop}>Basisspelers</Text>
      {toonSpelers(basisspelers, 'Basis')}
      <Text style={styles.kop}>Bankzitters</Text>
      {toonSpelers(bankzitters, 'Bank')}
    </View>
  );
};

export default FantasyTeam;

const styles = StyleSheet.create({
  sectie: {
    marginTop: 20,
  },
  kop: {
    color: '#152536',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 12,
  },
});

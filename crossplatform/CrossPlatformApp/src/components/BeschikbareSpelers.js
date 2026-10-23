import { SectionList, StyleSheet, Text, View } from 'react-native';
import FantasySpeler from './FantasySpeler';
import theme from '../theme/theme';

const BeschikbareSpelers = ({ spelers }) => {
  const renderSpeler = ({ item }) => (
    <FantasySpeler speler={item} label="Beschikbaar" />
  );

  const posities = ['Doelman', 'Verdediger', 'Middenvelder', 'Aanvaller'];
  const secties = posities
    .map((positie) => ({
      positie,
      data: spelers.filter((speler) => speler.positie === positie),
    }))
    .filter((sectie) => sectie.data.length > 0);

  return (
    <View style={styles.sectie}>
      <Text style={styles.kop}>Beschikbare spelers</Text>
      {spelers.length === 0 ? (
        <Text>Er zijn geen beschikbare spelers.</Text>
      ) : (
        <SectionList
          sections={secties}
          renderItem={renderSpeler}
          keyExtractor={(speler) => speler.id.toString()}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectieKop}>{section.positie}</Text>
          )}
        />
      )}
    </View>
  );
};

export default BeschikbareSpelers;

const styles = StyleSheet.create({
  sectie: {
    marginTop: 24,
  },
  kop: {
    color: theme.PRIMARY_COLOR,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  sectieKop: {
    backgroundColor: '#EAF1F4',
    color: theme.SECONDARY_COLOR,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

import { StyleSheet, Text, View } from 'react-native';

const FantasySpeler = ({ speler, label }) => {
  return (
    <View style={styles.kaart}>
      <View style={styles.bovensteRij}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.punten}>{speler.punten} punten</Text>
      </View>
      <Text style={styles.naam}>{speler.naam}</Text>
      <Text style={styles.land}>{speler.land} · {speler.positie}</Text>
      <Text style={styles.prijs}>€{speler.prijs} miljoen</Text>
    </View>
  );
};

export default FantasySpeler;

const styles = StyleSheet.create({
  kaart: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D8E1E8',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    padding: 14,
  },
  bovensteRij: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    color: '#526477',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  punten: {
    color: '#087E68',
    fontSize: 13,
    fontWeight: '700',
  },
  naam: {
    color: '#152536',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  land: {
    color: '#526477',
    fontSize: 14,
    marginBottom: 8,
  },
  prijs: {
    color: '#152536',
    fontSize: 14,
    fontWeight: '600',
  },
});

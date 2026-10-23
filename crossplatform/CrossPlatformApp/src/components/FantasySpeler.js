import { StyleSheet, Text, View } from 'react-native';
import theme from '../theme/theme';

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
    backgroundColor: theme.CARD_COLOR,
    borderColor: theme.BORDER_COLOR,
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
    color: theme.MUTED_COLOR,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  punten: {
    color: theme.SUCCESS_COLOR,
    fontSize: 13,
    fontWeight: '700',
  },
  naam: {
    color: theme.PRIMARY_COLOR,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  land: {
    color: theme.MUTED_COLOR,
    fontSize: 14,
    marginBottom: 8,
  },
  prijs: {
    color: theme.PRIMARY_COLOR,
    fontSize: 14,
    fontWeight: '600',
  },
});

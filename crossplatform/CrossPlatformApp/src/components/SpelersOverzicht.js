import { StyleSheet, Text, TextInput, View } from 'react-native';
import BeschikbareSpelers from './BeschikbareSpelers';
import FantasyTeam from './FantasyTeam';

const SpelersOverzicht = () => {
  const titel = 'Mijn WK Fantasy Team';
  const basisspelers = [
    { id: 1, naam: 'Luca Moretti', land: 'Italië', positie: 'Doelman', prijs: 8, punten: 12 },
    { id: 2, naam: 'Mateo Silva', land: 'Brazilië', positie: 'Verdediger', prijs: 7, punten: 9 },
    { id: 3, naam: 'Noah Laurent', land: 'Frankrijk', positie: 'Verdediger', prijs: 6, punten: 7 },
    { id: 4, naam: 'Elias Berg', land: 'Zweden', positie: 'Verdediger', prijs: 6, punten: 8 },
    { id: 5, naam: 'Daniel Costa', land: 'Portugal', positie: 'Verdediger', prijs: 5, punten: 5 },
    { id: 6, naam: 'Leo Fischer', land: 'Duitsland', positie: 'Middenvelder', prijs: 9, punten: 14 },
    { id: 7, naam: 'Amir Haddad', land: 'Marokko', positie: 'Middenvelder', prijs: 8, punten: 11 },
    { id: 8, naam: 'Hugo Martin', land: 'Spanje', positie: 'Middenvelder', prijs: 7, punten: 10 },
    { id: 9, naam: 'Ethan Clarke', land: 'Engeland', positie: 'Middenvelder', prijs: 6, punten: 8 },
    { id: 10, naam: 'Thiago Alves', land: 'Brazilië', positie: 'Aanvaller', prijs: 10, punten: 16 },
    { id: 11, naam: 'Milan Petrov', land: 'Kroatië', positie: 'Aanvaller', prijs: 8, punten: 13 },
  ];
  const bankzitters = [
    { id: 12, naam: 'Oscar Lind', land: 'Zweden', positie: 'Doelman', prijs: 4, punten: 3 },
    { id: 13, naam: 'Rafael Nunes', land: 'Portugal', positie: 'Verdediger', prijs: 4, punten: 4 },
    { id: 14, naam: 'Youssef Amrani', land: 'Marokko', positie: 'Middenvelder', prijs: 5, punten: 6 },
    { id: 15, naam: 'Kai Nakamura', land: 'Japan', positie: 'Aanvaller', prijs: 5, punten: 7 },
  ];
  const beschikbareSpelers = [
    { id: 16, naam: 'Gabriel Santos', land: 'Brazilië', positie: 'Doelman', prijs: 5, punten: 6 },
    { id: 17, naam: 'Victor Dubois', land: 'Frankrijk', positie: 'Verdediger', prijs: 6, punten: 8 },
    { id: 18, naam: 'Samuel Okafor', land: 'Nigeria', positie: 'Middenvelder', prijs: 7, punten: 10 },
    { id: 19, naam: 'Adrian Vega', land: 'Spanje', positie: 'Aanvaller', prijs: 8, punten: 12 },
  ];
  const alleGeselecteerdeSpelers = [...basisspelers, ...bankzitters];
  const totaalBudgetGebruikt = alleGeselecteerdeSpelers.reduce(
    (totaalPrijs, speler) => totaalPrijs + speler.prijs,
    0,
  );
  const totaalFantasyPunten = alleGeselecteerdeSpelers.reduce(
    (totaalPunten, speler) => totaalPunten + speler.punten,
    0,
  );

  const toonSamenvatting = () => {
    const totaal = basisspelers.length + bankzitters.length;
    const openBasisplaatsen = 11 - basisspelers.length;
    const openBankplaatsen = 4 - bankzitters.length;
    const resterendBudget = 100 - totaalBudgetGebruikt;

    return (
      <View style={styles.samenvatting}>
        <Text style={styles.samenvattingKop}>Jouw team in cijfers</Text>
        <View style={styles.statistiekenRij}>
          <Text style={styles.statistiek}>Basis {basisspelers.length}/11</Text>
          <Text style={styles.statistiek}>Bank {bankzitters.length}/4</Text>
          <Text style={styles.statistiek}>{totaal} spelers</Text>
        </View>
        <Text style={styles.samenvattingTekst}>Open basisplaatsen: {openBasisplaatsen}</Text>
        <Text style={styles.samenvattingTekst}>Open plaatsen op de bank: {openBankplaatsen}</Text>
        <Text style={styles.samenvattingTekst}>Gebruikt budget: €{totaalBudgetGebruikt} miljoen</Text>
        <Text style={styles.budget}>Resterend budget: €{resterendBudget} miljoen</Text>
        <Text style={styles.punten}>Totaal fantasy-punten: {totaalFantasyPunten}</Text>
      </View>
    );
  };

  const toonTeamStatus = () => {
    const teamCompleet =
      basisspelers.length === 11 && bankzitters.length === 4;
    const budgetBeschikbaar = 100 - totaalBudgetGebruikt;

    if (teamCompleet && budgetBeschikbaar >= 0) {
      return <Text style={styles.geslaagd}>Je team is volledig en past binnen het budget.</Text>;
    }

    if (budgetBeschikbaar < 0) {
      return <Text style={styles.fout}>Het team gaat over het beschikbare budget.</Text>;
    }

    return <Text style={styles.melding}>Je team is nog niet volledig samengesteld.</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titel}>{titel}</Text>
      <Text style={styles.intro}>Stel jouw WK Fantasy League-team samen.</Text>
      <Text style={styles.zoekLabel}>Zoek een speler</Text>
      <TextInput
        style={styles.zoekveld}
        placeholder="Typ een spelersnaam"
        accessibilityLabel="Zoek een speler"
      />
      {toonSamenvatting()}
      {toonTeamStatus()}
      <FantasyTeam basisspelers={basisspelers} bankzitters={bankzitters} />
      <BeschikbareSpelers spelers={beschikbareSpelers} />
    </View>
  );
};

export default SpelersOverzicht;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F6F8',
    flex: 1,
    padding: 18,
  },
  titel: {
    color: '#152536',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 6,
  },
  intro: {
    color: '#526477',
    fontSize: 15,
    marginBottom: 20,
  },
  zoekLabel: {
    color: '#24465D',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  zoekveld: {
    backgroundColor: '#FFFFFF',
    borderColor: '#C8D4DD',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  samenvatting: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D8E1E8',
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
  },
  samenvattingKop: {
    color: '#152536',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  statistiekenRij: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statistiek: {
    color: '#24465D',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  samenvattingTekst: {
    color: '#526477',
    fontSize: 14,
    marginTop: 4,
  },
  budget: {
    color: '#087E68',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 8,
  },
  punten: {
    color: '#24465D',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 6,
  },
  geslaagd: {
    backgroundColor: '#E2F4EE',
    borderRadius: 8,
    color: '#12664F',
    marginTop: 12,
    padding: 10,
  },
  fout: {
    backgroundColor: '#FCE8E6',
    borderRadius: 8,
    color: '#9D2A20',
    marginTop: 12,
    padding: 10,
  },
  melding: {
    color: '#526477',
    fontSize: 14,
    marginTop: 12,
  },
});

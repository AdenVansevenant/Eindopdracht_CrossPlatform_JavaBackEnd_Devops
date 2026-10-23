import { Text, TextInput, View } from 'react-native';
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
      <View>
        <Text>Basisspelers: {basisspelers.length} van 11</Text>
        <Text>Bankzitters: {bankzitters.length} van 4</Text>
        <Text>Geselecteerd: {totaal} spelers</Text>
        <Text>Open basisplaatsen: {openBasisplaatsen}</Text>
        <Text>Open plaatsen op de bank: {openBankplaatsen}</Text>
        <Text>Gebruikt budget: €{totaalBudgetGebruikt} miljoen</Text>
        <Text>Resterend budget: €{resterendBudget} miljoen</Text>
        <Text>Totaal fantasy-punten: {totaalFantasyPunten}</Text>
      </View>
    );
  };

  const toonTeamStatus = () => {
    const teamCompleet =
      basisspelers.length === 11 && bankzitters.length === 4;
    const budgetBeschikbaar = 100 - totaalBudgetGebruikt;

    if (teamCompleet && budgetBeschikbaar >= 0) {
      return <Text>Je team is volledig en past binnen het budget.</Text>;
    }

    if (budgetBeschikbaar < 0) {
      return <Text>Het team gaat over het beschikbare budget.</Text>;
    }

    return <Text>Je team is nog niet volledig samengesteld.</Text>;
  };

  return (
    <View>
      <Text>{titel}</Text>
      <Text>Stel jouw WK Fantasy League-team samen.</Text>
      <Text>Zoek een speler</Text>
      <TextInput
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

package be.adenvansevenant.wkfantasy.dto;

import be.adenvansevenant.wkfantasy.model.Positie;
import be.adenvansevenant.wkfantasy.model.Speler;

import java.math.BigDecimal;

public record SpelerResponse(
        Long id,
        String naam,
        String land,
        Positie positie,
        BigDecimal prijs,
        int punten
) {
    public static SpelerResponse from(Speler speler) {
        return new SpelerResponse(
                speler.getId(),
                speler.getNaam(),
                speler.getLand(),
                speler.getPositie(),
                speler.getPrijs(),
                speler.getPunten()
        );
    }
}

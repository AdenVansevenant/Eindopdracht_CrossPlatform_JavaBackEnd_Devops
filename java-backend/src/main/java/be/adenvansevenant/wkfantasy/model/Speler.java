package be.adenvansevenant.wkfantasy.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;

@Entity
@Table(name = "spelers")
public class Speler {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String naam;

    @Column(nullable = false)
    private String land;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Positie positie;

    @Column(nullable = false, precision = 5, scale = 2)
    private BigDecimal prijs;

    @Column(nullable = false)
    private int punten;

    protected Speler() {
    }

    public Speler(String naam, String land, Positie positie, BigDecimal prijs, int punten) {
        this.naam = naam;
        this.land = land;
        this.positie = positie;
        this.prijs = prijs;
        this.punten = punten;
    }

    public Long getId() {
        return id;
    }

    public String getNaam() {
        return naam;
    }

    public String getLand() {
        return land;
    }

    public Positie getPositie() {
        return positie;
    }

    public BigDecimal getPrijs() {
        return prijs;
    }

    public int getPunten() {
        return punten;
    }
}

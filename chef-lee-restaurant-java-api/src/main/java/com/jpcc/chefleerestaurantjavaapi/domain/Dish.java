package com.jpcc.chefleerestaurantjavaapi.domain;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "dish")
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Boolean currentlyOnMenu;
    private String name;
    private String description;
    private BigDecimal price;
    @Enumerated(EnumType.STRING) // This tells JPA to store the enum as a string in the database
    private DishCategory category;
    private Boolean isSpicy;
    private Boolean isVegetarian;
    private Boolean isPescatarian;
    private Boolean hasTreeNuts;
    private Boolean hasPeanuts;
    private Boolean hasEggs;
    private Boolean hasMilk;
    private Boolean hasShellfish;
    private Boolean hasSoy;
    private Boolean hasWheat;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getCurrentlyOnMenu() {
        return currentlyOnMenu;
    }

    public void setCurrentlyOnMenu(Boolean currentlyOnMenu) {
        this.currentlyOnMenu = currentlyOnMenu;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    @JsonProperty("isSpicy")
    public Boolean getSpicy() {
        return isSpicy;
    }

    @JsonProperty("isSpicy")
    public void setSpicy(Boolean isSpicy) {
        this.isSpicy = isSpicy;
    }
    public Boolean getPescatarian() {
        return isPescatarian;
    }

    public void setPescatarian(Boolean pescatarian) {
        isPescatarian = pescatarian;
    }

    @JsonProperty("isVegetarian")
    public Boolean getVegetarian() {
        return isVegetarian;
    }
    @JsonProperty("isVegetarian")

    public void setVegetarian(Boolean vegetarian) {
        isVegetarian = vegetarian;
    }

    public Boolean getHasTreeNuts() {
        return hasTreeNuts;
    }

    public void setHasTreeNuts(Boolean hasTreeNuts) {
        this.hasTreeNuts = hasTreeNuts;
    }

    public Boolean getHasPeanuts() {
        return hasPeanuts;
    }

    public void setHasPeanuts(Boolean hasPeanuts) {
        this.hasPeanuts = hasPeanuts;
    }

    public Boolean getHasEggs() {
        return hasEggs;
    }

    public void setHasEggs(Boolean hasEggs) {
        this.hasEggs = hasEggs;
    }

    public Boolean getHasMilk() {
        return hasMilk;
    }

    public void setHasMilk(Boolean hasMilk) {
        this.hasMilk = hasMilk;
    }

    public Boolean getHasShellfish() {
        return hasShellfish;
    }

    public void setHasShellfish(Boolean hasShellfish) {
        this.hasShellfish = hasShellfish;
    }

    public Boolean getHasSoy() {
        return hasSoy;
    }

    public void setHasSoy(Boolean hasSoy) {
        this.hasSoy = hasSoy;
    }

    public Boolean getHasWheat() {
        return hasWheat;
    }

    public void setHasWheat(Boolean hasWheat) {
        this.hasWheat = hasWheat;
    }

    public DishCategory getCategory() {
        return category;
    }

    public void setCategory(DishCategory category) {
        this.category = category;
    }

}

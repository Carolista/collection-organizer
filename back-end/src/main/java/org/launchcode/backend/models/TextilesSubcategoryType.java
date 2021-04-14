package org.launchcode.backend.models;

public enum TextilesSubcategoryType {

    CLOTHING("Clothing and shoes"),
    FINE("Fine Jewelry"),
    COSTUME("Costume Jewelry"),
    ACCESSORIES("Accessories (watches, handbags, pens, etc.)"),
    ARMS("Arms and Armor (incl. knives/swords/firearms/etc.)");

    private final String displayName;

    TextilesSubcategoryType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

}

package org.launchcode.backend.models;

public enum DecorativeSubcategory {

    PRETWENTIETH("Pre-20th century"),
    VICTORIAN("Victorian Era"),
    DECO("Art Deco/Art Nouveau/Arts and Crafts"),
    MCM("Mid-Century Modern"),
    CERAMICS("Ceramics/Pottery/China/Porcelain"),
    FOLK("Folk Art"),
    TEXTILES("Textiles"),
    FURNITURE("Furniture"),
    ARCHITECTURE("Architecture");

    private final String displayName;

    DecorativeSubcategory(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

}
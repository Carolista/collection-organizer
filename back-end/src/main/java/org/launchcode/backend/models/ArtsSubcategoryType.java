package org.launchcode.backend.models;

public enum ArtsSubcategoryType {

//    Painting
//    Sculpture
//    Prints/Photographs/Drawings/Digital
//            European
//    Africa/Oceania/Pre-Columbian Americas/Native American/Aboriginal Asian
//    Near and Middle Eastern
//    American
//    Pre-20th century
//    Modern/Contemporary

    PAINTING("Painting"),
    SCULPTURE("Sculpture"),
    PRINTS("Prints/Photographs/Drawings/Digital European"),
    AFRICAN("Africa/Oceania/Pre-Columbian Americas/Native American/Aboriginal Asian"),
    EASTERN("Near and Middle Eastern"),
    AMERICAN("American"),
    PRETWENTIETH("Pre-20th Century"),
    MODERN("Modern/Contemporary");

    private final String displayName;

    ArtsSubcategoryType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}

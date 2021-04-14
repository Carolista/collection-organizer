package org.launchcode.backend.models;

public enum HistorySubcategoryType {

    ANIMALS("Animals/Zoology"),
    BOTANY("Botany"),
    SHELLS("Shells"),
    FOSSILS("Fossils"),
    ROCKS("Rocks, Minerals, and Gems"),
    METALS("Precious Metals"),
    COLLATERAL("Natural History Collateral (Books/Guides/Tools/Etc.)"),
    SCIENTIFIC("Medical/Scientific"),
    MAPS("Maps/Globes");

    private final String displayName;

    HistorySubcategoryType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

}

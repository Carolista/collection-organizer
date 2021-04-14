package org.launchcode.backend.models;

public enum MachinesSubcategoryType {

    CAMERAS("Cameras"),
    VEHICLES("Cars and Motorcycles"),
    AERO("Aviation and Space"),
    NAUTICAL("Nautical"),
    ELECTRONICS("Electronics"),
    MODELS("Models (cars, trains, etc.)"),
    RADIOS("Radios"),
    TELEPHONES("Telephones"),
    OFFICE("Office"),
    CLOCKS("Clocks");

    private final String displayName;

    MachinesSubcategoryType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

}

export interface ThemeColors {
    
};

export interface ThemeTailwindClasses {
    text: string,
    mutedText: string,
    accentText: string,
    gradientText: string,

    background: string,
    accentBackground: string,
    backgroundGradient: string,

    card: string,

    buttonPrimary: string,
    buttonSecondary: string,
    accentButton: string,
    buttonGradient: string,

    outlinedButtonPrimary: string,
    outlinedButtonSecondary: string,
    outlinedAccentButton: string,
    outlinedButtonGradient: string,
};

export interface Theme {
    colors: ThemeColors,
    tailwind: ThemeTailwindClasses
};
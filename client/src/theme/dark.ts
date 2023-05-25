import type { Theme, ThemeColors, ThemeTailwindClasses } from '../types/theme';

const colors: ThemeColors = {
    primary: "#00ff3c",
    secondary: "#00d2ff"
};

const tailwind: ThemeTailwindClasses = {
    text: "text-[#dedede]",
    mutedText: "text-neutral-600",
    accentText: "text-[#00d2ff]", // Secondary color
    gradientText: "bg-clip-text bg-gradient-to-tr from-[#00ff3c] to-[#00d2ff] text-transparent", // Primary to secondary color gradient

    background: "bg-[#1a1a1a]",
    accentBackground: "bg-[#00d2ff]", // Secondary color
    backgroundGradient: "bg-gradient-to-tr from-[#00ff3c] to-[#00d2ff]", // Primary to secondary color gradient
    
    card: "bg-[#404040]",

    buttonPrimary: "bg-[#00ff3c] text-[#1a1a1a]", // Primary color
    buttonSecondary: "bg-[#404040]",
    accentButton: "bg-[#00d2ff] text-[#1a1a1a]", // Secondary color
    buttonGradient: "bg-gradient-to-tr from-[#00ff3c] to-[#00d2ff] hover:shadow-lg hover:shadow-[#00f3c] text-[#1a1a1a]", // Primary to secondary color gradient

    outlinedButtonPrimary: "border-2 border-[#00ff3c] text-[#00ff3c]",
    outlinedButtonSecondary: "border-2 border-[#404040]",
    outlinedAccentButton: "border-2 border-[#00d2ff] text-[#00d2ff]",
    outlinedButtonGradient: "bg-gradient-to-tr from-[#00ff3c] to-[#00d2ff] first:text-[#dedede]"
};

const darkTheme: Theme = {
    colors,
    tailwind
};

export default darkTheme;
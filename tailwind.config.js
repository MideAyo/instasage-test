module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1020px',
            xl: '1320px',
        },
        container: {
            center: true,
        },
        extend: {
            boxShadow: {
                "md": "0 2px 4px 2px rgba(0, 0, 0, 0.2)",
            },
            colors: {
                primaryColor: `var(--ion-color-primary)`,
                primaryText: `var(--ion-color-primary-text)`,
                textDark: `var(--ion-color-dark)`,
                darkShade: `var(--ion-color-dark-shade)`,
                darkerTint : `var(--ion-color-darkerTint-shade)`,
                colorDark: `var(--ion-color-dark)`,
                lightTint: `var(--ion-color-light-tint)`,
                greyTint: `var( --ion-color-grey-tint)`,
                lineBorder: `var(--ion-color-line-border)`,
            },
            fontFamily: {
                dmSans: ["var(--font-dmSans)"],
                nunito: ["var(--font-nunito)"],
                inter: ["var(--font-inter)"]
            },
            fontWeight: {
                400: ["400"],
                500:["500"],
                600: ["600"],
                700: ["700"],
            },
        },
    },
    plugins: [],
};

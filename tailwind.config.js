const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        backgroundImage: theme => ({
            'body-pattern': "url('../img/pattern.png')"
        }),
        colors: theme => ({
            bscPrimary: "#003c71",
            bscGray: "#c0bcb3",
            white: colors.white,
            blueGray: "#a1b0ea",
            lightBlue: colors.lightBlue,
            cardGray: "#f0f1f1",
            dark: colors.dark,
            success: "#5da446",
            warning: "#E87722",
            gray200: colors.gray-200,
            grayCard: "#d2d7db",
            black: colors.black
        })
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover']
    }
}
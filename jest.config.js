module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/default",
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    moduleFileExtensions: [
        "js",
        "json",
        "vue"
    ],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    transform: {
        ".*\\.(vue)$": require.resolve("@vue/vue3-jest"),
        ".*\\.(js)$": "babel-jest"
    }
};

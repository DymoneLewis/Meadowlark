var fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know",
    "Whenever possible,keep it possible",
];
exports.getFortune = function () {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return gortuneCookies[idx];
};
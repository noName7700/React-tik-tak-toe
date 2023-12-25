import avatar from "./avatar.png";

export const GAME_SYMBOLS = {
    ZERO: "zero",
    CROSS: "cross",
    TRIANGLE: "triangle",
    SQUARE: "square",
};

export const MOVE_ORDER = [
    GAME_SYMBOLS.CROSS,
    GAME_SYMBOLS.ZERO,
    GAME_SYMBOLS.TRIANGLE,
    GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
    { id: 1, name: "noName", rating: 1230, avatar: avatar, symbol: GAME_SYMBOLS.CROSS },
    { id: 2, name: "saswe", rating: 435, avatar: avatar, symbol: GAME_SYMBOLS.ZERO },
    { id: 3, name: "Kwago", rating: 865, avatar: avatar, symbol: GAME_SYMBOLS.TRIANGLE },
    { id: 4, name: "matre", rating: 920, avatar: avatar, symbol: GAME_SYMBOLS.SQUARE },
]
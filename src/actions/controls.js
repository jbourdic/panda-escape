export const MOVE = 'MOVE';

export const PadDirections = {
    PAD_UP: 'PAD_UP',
    PAD_RIGHT: 'PAD_RIGHT',
    PAD_DOWN: 'PAD_DOWN',
    PAD_LEFT: 'PAD_LEFT',
};

/** Actions **/

export function move(direction) {
    return { type: MOVE, direction }
}
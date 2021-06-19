import { ALERT_SHOW, ALERT_HIDE } from '../../alert/types'

const handlers = {
    [ALERT_SHOW]: (state, { payload }) => ({...payload, visible: true }),
    [ALERT_HIDE] : state => ({...state, visible: false }),
    DEFAULT: state => state
};

export const alertReducer = (state, payload) => {
    const handle = handlers[payload.type] || handlers.DEFAULT;
    return handle(state, payload);
}
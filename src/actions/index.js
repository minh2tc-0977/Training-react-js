export const ON_CHANGE = 'ON_CHANGE';
export const ON_SUBMIT = 'ON_SUBMIT';

export function onChange(param) {
    return {
        type: ON_CHANGE,
        param
    }
}

export function onSubmit(param) {
    return {
        type: ON_SUBMIT,
        param
    }
}

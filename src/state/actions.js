// Actions: individual state property manipulations

export function setCounterValue(counterValue: number) {
    return {
        type: "SET_COUNTER_VALUE",
        payload: counterValue
    }
}

export function setCounterViewCount(counterViewCount: number) {
    return {
        type: "SET_COUNTER_VIEW_COUNT",
        payload: counterViewCount
    }
}
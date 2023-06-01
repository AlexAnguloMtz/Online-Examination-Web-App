import { Dispatch, SetStateAction, useCallback, useState } from "react";

export const useCounter = (initialState: number = 0): [number, () => void, () => void] => {
    const [count, setCount] = useState<number>(initialState);

    const increment = useCallback(() => setCount(count + 1), []);

    const decrement = useCallback(() => setCount(count - 1), []);

    return [count, increment, decrement];

}
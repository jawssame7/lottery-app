import React, { useEffect, useState } from "react";
import * as lotoData from "../api/Loto";
import { Loto7 } from "../types/Loto7";

export const useLoto7 = () => {
    const [loto7List, setLoto7List] = useState<Loto7[]>([]);

    useEffect(() => {
        lotoData.fetchLoto7Result().then((loto7) => {
            console.log(...loto7);
            setLoto7List([...loto7]);
        });
    }, []);

    // 作成した関数を返す
    return { loto7List };
};

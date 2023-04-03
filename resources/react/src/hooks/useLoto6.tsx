import React, {useEffect, useState} from "react";

import * as lotoData from "../api/Loto";
import {Loto6} from "../types/Loto6";

export const useLoto6 = () => {

    const [loto6List, setLoto6List] = useState<Loto6[]>([]);

    useEffect(() => {
        lotoData.fetchLoto6Result().then((loto6) => {
            console.log(...loto6);
            setLoto6List([...loto6]);
        });
    }, []);

    // 作成した関数を返す
    return {loto6List};
}

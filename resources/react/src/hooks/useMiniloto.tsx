import React, {useEffect, useState} from "react";

import * as lotoData from "../api/Loto";
import {MiniLoto} from "../types/MiniLoto";

export const useMiniloto = () => {

    const [minilotoList, setMiniLotoList] = useState<MiniLoto[]>([]);

    useEffect(() => {
        lotoData.fetchMinilotoResult().then((miniloto) => {
            console.log(...miniloto);
            setMiniLotoList([...miniloto]);
        });
    }, []);

    // 作成した関数を返す
    return {minilotoList};
}

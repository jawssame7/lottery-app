import React, {useEffect} from "react";
import axios from "axios";

const App3: React.FC = () => {
    useEffect(() => {
        const fetchFromLaravel = async () => {
            const res = await axios.get('/api/hoge');
            alert(res.data.hoge);
        };
        fetchFromLaravel();
    }, [])

    return (
        <div className="App"></div>
    );
}

export default App3;

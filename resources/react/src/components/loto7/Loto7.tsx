import { useLoto7 } from '../../hooks/useLoto7';
import { List } from './List';
import Navbar from '../header/Navbar';
import EventInfoDisplayButton from '../common/EventInfoDisplayButton';
import PerInfo from './PerInfo';

const Loto7 = () => {
  // カスタムフックから必要な変数を取得
  const { loto7List } = useLoto7();

  return (
    <>
      <Navbar />
      <div>
        <h2>Loto 7</h2>
        <EventInfoDisplayButton />
        <PerInfo lotoList={loto7List} maxNum={37} />
        <h3>最新が一番上</h3>
        <List loto7List={loto7List}></List>
      </div>
    </>
  );
};

export default Loto7;

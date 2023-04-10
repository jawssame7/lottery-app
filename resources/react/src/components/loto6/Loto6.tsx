import { useLoto6 } from '../../hooks/useLoto6';
import { List } from './List';
import Navbar from '../header/Navbar';
import EventInfoDisplayButton from '../common/EventInfoDisplayButton';
import Perinfo from './PerInfo';

const Loto6 = () => {
  // カスタムフックから必要な変数を取得
  const { loto6List } = useLoto6();

  return (
    <>
      <Navbar />
      <div>
        <h2>Loto 6</h2>
        <EventInfoDisplayButton />
        <Perinfo lotoList={loto6List} maxNum={43} />
        <h3>最新が一番上</h3>
        <List loto6List={loto6List}></List>
      </div>
    </>
  );
};

export default Loto6;

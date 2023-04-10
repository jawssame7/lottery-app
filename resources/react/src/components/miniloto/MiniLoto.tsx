import { useMiniloto } from '../../hooks/useMiniloto';
import { List } from './List';
import Navbar from '../header/Navbar';
import EventInfoDisplayButton from '../common/EventInfoDisplayButton';
import PerInfo from './PerInfo';

const MiniLoto = () => {
  // カスタムフックから必要な変数を取得
  const { minilotoList } = useMiniloto();

  return (
    <>
      <Navbar />
      <div>
        <h2>Mini Loto</h2>
        <EventInfoDisplayButton />
        <PerInfo minilotoList={minilotoList} maxNum={31} />
        <h3>最新が一番上</h3>
        <List minilotoList={minilotoList}></List>
      </div>
    </>
  );
};

export default MiniLoto;

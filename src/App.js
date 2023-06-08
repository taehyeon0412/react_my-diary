import { useRef, useState } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

/* const dummyList = [
  {
    id: 1,
    title: "1일차",
    content: "1일차 할 일",
    emotion: 1,
    create_date: new Date().getTime(), //현재시간 기준
  },
  {
    id: 2,
    title: "2일차",
    content: "2일차 할 일",
    emotion: 3,
    create_date: new Date().getTime(), //현재시간 기준
  },
  {
    id: 3,
    title: "3일차",
    content: "3일차 할 일",
    emotion: 4,
    create_date: new Date().getTime(), //현재시간 기준
  },
]; */

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (title, content, emotion) => {
    const create_date = new Date().getTime(); //현재시간
    const newItem = {
      title,
      content,
      emotion,
      create_date,
      id: dataId.current,
    };
    dataId.current += 1; //dataId의 현재값은 +1씩 추가된다
    setData([newItem, ...data]); // 새로운 아이템 + 기존데이터
  };

  return (
    <>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </>
  );
}

export default App;

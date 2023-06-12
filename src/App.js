import { useEffect, useRef, useState } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

// https://jsonplaceholder.typicode.com/posts

function App() {
  const getData = async () => {
    const res = await (
      await fetch(`https://jsonplaceholder.typicode.com/posts`)
    ).json();

    const initData = res.slice(0, 20).map((it) => {
      return {
        title: it.title,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        create_date: new Date().getTime(),
        id: dataId.current++,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

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

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };
  //삭제

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };
  //수정하기 완료 누르면 수행됨

  return (
    <>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} diaryList={data} onDelete={onDelete} />
    </>
  );
}

export default App;

//데이터 수정하기

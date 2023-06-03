import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

const dummyList = [
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
];

function App() {
  return (
    <>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </>
  );
}

export default App;

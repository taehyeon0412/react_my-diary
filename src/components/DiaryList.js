import { styled } from "styled-components";
import DiaryItem from "./DiaryItem";

const Wrapper = styled.div``;

const DiaryTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DiaryInfo = styled.h4`
  margin-bottom: 10px;
  padding-left: 20px;
`;

const DiaryContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

function DiaryList({ diaryList }) {
  console.log(diaryList);
  return (
    <Wrapper>
      <DiaryTitle>일기 리스트</DiaryTitle>
      <DiaryInfo>{diaryList.length}개의 일기가 있습니다.</DiaryInfo>

      <DiaryContents>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </DiaryContents>
    </Wrapper>
  );
}

export default DiaryList;

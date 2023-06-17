import { styled } from "styled-components";
import DiaryItem from "./DiaryItem";
import { useContext } from "react";
import { DiaryStateContext } from "../App";

const Wrapper = styled.div``;

const DiaryTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 700;
`;

const DiaryInfo = styled.h4`
  margin-bottom: 10px;
  padding-left: 20px;
  font-weight: 700;
`;

const DiaryContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

function DiaryList() {
  const diaryList = useContext(DiaryStateContext); //App의 conText 데이터를 가져옴

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

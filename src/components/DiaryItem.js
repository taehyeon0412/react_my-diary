import { styled } from "styled-components";

const ItemDiv = styled.div`
  background-color: rgb(240, 240, 240);
  margin-bottom: 10px;
  padding: 20px;
`;

const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 10px;
`;

const ItemTitleSpan = styled.span``;

const ItemTitleDate = styled.span`
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: gray;
  font-size: 0.9rem;
`;

const ItemContents = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;
  font-weight: bold;
`;

const ItemDeleteBtn = styled.button``;

function DiaryItem({ title, content, create_date, emotion, id, onDelete }) {
  return (
    <ItemDiv>
      <ItemTitle>
        <ItemTitleSpan>
          제목 : {title} | 감정점수 : {emotion}
        </ItemTitleSpan>

        <ItemTitleDate>{new Date(create_date).toLocaleString()}</ItemTitleDate>
      </ItemTitle>

      <ItemContents>{content}</ItemContents>

      <ItemDeleteBtn
        onClick={() => {
          if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onDelete(id);
          }
        }}
      >
        삭제하기
      </ItemDeleteBtn>
    </ItemDiv>
  );
}

export default DiaryItem;

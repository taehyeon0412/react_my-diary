import React, { memo, useEffect, useRef, useState } from "react";
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

const ItemBtn = styled.button``;

const ItemEditArea = styled.textarea`
  width: 100%;
  height: 5rem;
`;

function DiaryItem({
  title,
  content,
  create_date,
  emotion,
  id,
  onDelete,
  onEdit,
}) {
  const localContentInput = useRef();

  const handleDelete = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };
  //삭제 핸들러

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };
  const [localContent, setLocalContent] = useState(content);
  //수정 핸들러

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  //수정취소 핸들러

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정 하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };
  //수정완료 핸들러
  /* onEdit에 id와 localContent를 전달해준다 전달해준값은 
  부모요소인 DiaryList를 거쳐 최종적으로 App의 onEdit으로 전달된다 */

  return (
    <ItemDiv>
      <ItemTitle>
        <ItemTitleSpan>
          제목 : {title} | 감정점수 : {emotion}
        </ItemTitleSpan>

        <ItemTitleDate>{new Date(create_date).toLocaleString()}</ItemTitleDate>
      </ItemTitle>

      <ItemContents>
        {isEdit ? (
          <>
            <ItemEditArea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </ItemContents>

      {isEdit ? (
        <>
          <ItemBtn onClick={handleQuitEdit}>수정 취소</ItemBtn>
          <ItemBtn onClick={handleEdit}>수정 완료</ItemBtn>
        </>
      ) : (
        <>
          <ItemBtn onClick={handleDelete}>삭제하기</ItemBtn>
          <ItemBtn onClick={toggleIsEdit}>수정하기</ItemBtn>
        </>
      )}
    </ItemDiv>
  );
}

export default React.memo(DiaryItem);

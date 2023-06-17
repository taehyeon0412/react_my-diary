import React, { memo, useContext, useRef, useState } from "react";
import styled from "styled-components";
import { DiaryDispatchContext } from "../App";

const Wrapper = styled.div`
  border: 1px solid gray;
  text-align: center;
  padding: 20px;
`;

const TitleBox = styled.div``;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const TitleInput = styled.input`
  margin-bottom: 1rem;
`;

const TextBox = styled.div`
  margin-bottom: 1rem;
`;

const TextInput = styled.textarea`
  width: 30rem;
  height: 15rem;
`;

const EmotionBox = styled.div`
  margin-bottom: 1rem;
`;

const SelectBox = styled.select`
  width: 10rem;
`;

const SaveBtn = styled.button`
  width: 30rem;
`;

function DiaryEditor() {
  const { onCreate } = useContext(DiaryDispatchContext);

  const titleInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    title: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    /* console.log(event.target.name); */
  };
  //change 이벤트

  const handleSave = () => {
    console.log(state);
    if (state.title.length < 1) {
      titleInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.title, state.content, state.emotion);
    //App에서 넘어온 onCreate의 props에 내용을 각각 넣어준다
    alert("저장 성공");
    setState({
      title: "",
      content: "",
      emotion: 1,
    }); //초기화
  };
  //저장

  return (
    <Wrapper>
      <TitleBox>
        <Title>오늘의 일기</Title>
        <TitleInput
          ref={titleInput}
          name="title"
          value={state.title}
          onChange={handleChangeState}
        />
      </TitleBox>

      <TextBox>
        <TextInput
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </TextBox>

      <EmotionBox>
        <span>오늘의 감정점수 : </span>
        <SelectBox
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </SelectBox>
      </EmotionBox>

      <SaveBtn onClick={handleSave}>저장</SaveBtn>
    </Wrapper>
  );
}

export default React.memo(DiaryEditor);

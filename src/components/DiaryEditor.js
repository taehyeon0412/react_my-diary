import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid gray;
  text-align: center;
  padding: 20px;
`;

const TitleBox = styled.div``;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const WriteInput = styled.input`
  margin-bottom: 1rem;
`;

const TextBox = styled.div`
  margin-bottom: 1rem;
`;

const TextBoxWrite = styled.textarea``;

const EmotionBox = styled.div``;

const SaveBtn = styled.button``;

function DiaryEditor() {
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
    console.log(event.target.name);
  };
  //change 이벤트

  const handleSave = () => {
    console.log(state);
    alert("저장 성공");
  };

  return (
    <Wrapper>
      <TitleBox>
        <Title>오늘의 일기</Title>
        <WriteInput
          name="title"
          value={state.author}
          onChange={handleChangeState}
        />
      </TitleBox>

      <TextBox>
        <TextBoxWrite
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </TextBox>

      <EmotionBox>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <SaveBtn onClick={handleSave}>저장</SaveBtn>
      </EmotionBox>
    </Wrapper>
  );
}

export default DiaryEditor;

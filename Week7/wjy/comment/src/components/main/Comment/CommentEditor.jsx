import React from "react";
import * as S from "../Main.style";
import Input from "../Input";
import Button from "../Button";

export default function CommentEditor({ inputText, setInputText, addComment }) {
  return (
    <S.AddCommentWrapper>
      <Input inputText={inputText} setInputText={setInputText} />
      <Button text="댓글 추가" addComment={addComment} />
    </S.AddCommentWrapper>
  );
}

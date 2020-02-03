import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import img_404 from "../assets/404.png";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withRouter } from "react-router-dom";

const NotFoundContainer = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  /* 404 image */
  img {
    max-width: 600px;
    width: 50%;
  }
  /* text */
  div {
    font-family: "Noto Sans KR Medium";
    font-size: 20px;
    margin: 20px 0;
    p {
      margin-bottom: 15px;
      line-height: 20px;
    }
    p:first-of-type {
      font-size: 24px;
    }
    p:last-of-type {
      font-size: 16px;
      font-family: "Noto Sans KR Regular";
    }
  }
`;

const BackButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;
`;

function NotFound({ history }) {
  const goBack = () => {
    history.goBack();
  };
  return (
    <div>
      <NotFoundContainer>
        <img src="#" alt="image for 404" />
        <div>
          <p>ERROR</p>
          <p>찾을 수 없는 페이지 입니다.</p>
          <p>
            존재하지 않는 주소를 입력하셨거나 요청하신 페이지의 주소가 변경, 삭제 되어 찾을 수
            없습니다.
          </p>
        </div>
        <BackButton onClick={goBack}>
          <ArrowBackIcon /> 뒤로 가기
        </BackButton>
      </NotFoundContainer>
      <Footer />
    </div>
  );
}

export default withRouter(NotFound);

import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import { useEffect, useRef } from "react";

function App() {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.

    const location = new naver.maps.LatLng(36.3503816, 127.3847379);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  function call_119() {
    window.location.href = "tel:119";
  }

  function call_112() {
    window.location.href = "tel:112";
  }

  function call_120() {
    window.location.href = "tel:042-120";
  }

  function open_safe() {
    window.open(`https://www.safetyreport.go.kr/#main`, "_blank");
  }

  function open_notice() {
    window.open(
      `https://www.daejeon.go.kr/drh/MediaList.do?notiType=NOTI_01&menuSeq=2559`,
      "_blank"
    );
  }

  return (
    <div>
      <div
        style={{ border: "1px solid black", padding: "20px", margin: "10px" }}
      >
        <div
          style={{
            display: "flex",
            width: "calc(100% - 20px)",
            height: "5vh",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              fontSize: "0.85em",
              textAlign: "center",
              width: "100%",
            }}
          >
            QUANTUM D.N.<span style={{ color: "red" }}>A</span>(Data.Network.
            <span style={{ color: "red" }}>A</span>
            <span style={{ color: "blue" }}>IoT</span>) 4D 공간주소
          </span>
        </div>
        <div
          style={{
            display: "flex",
            width: "calc(100% - 20px)",
            height: "5vh",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <span style={{ fontSize: "1em", color: "gray" }}>
            사용할 수 없는 기능입니다.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            marginTop: "30px",
            marginBottom: "30px",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={call_119}
            style={{
              width: "40%",
              height: "8vh",
              border: "1px solid black",
            }}
          >
            <strong style={{ fontSize: "1.8em", color: "red" }}>119</strong>
            &nbsp;&nbsp;&nbsp;
            <strong style={{ marginTop: "10px", color: "black" }}>
              긴급신고
            </strong>
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            onClick={call_112}
            style={{
              width: "40%",
              height: "8vh",
              border: "1px solid black",
            }}
          >
            <strong style={{ fontSize: "1.8em", color: "red" }}>112</strong>
            &nbsp;&nbsp;&nbsp;
            <strong style={{ marginTop: "10px", color: "black" }}>
              긴급신고
            </strong>
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            border: "1px solid black",
            padding: "10px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            ref={mapElement}
            style={{ width: "100%", height: "40vh", marginBottom: "30px" }}
          />
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "1.1em", color: "gray" }}>
                사용할 수 없는 기능입니다.
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "15vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              borderTop: "none",
              fontSize: "15px",
              lineHeight: "1.9",
            }}
          >
            <strong style={{ fontSize: "0.6em", color: "black" }}>
              &nbsp;{"※"}&nbsp;&nbsp;&nbsp;
              <a onClick={open_notice}>대전시 공지사항 안내</a>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;민원안내{" "}
              <span style={{ color: "blue" }}>
                <a onClick={call_120}>120</a>
              </span>{" "}
              콜센터
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "blue" }}>
                <a onClick={open_safe}>안전신문고</a>
              </span>
              (불법주정차.포트홀.위험요소등)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대전시청{" "}
              <span style={{ color: "blue" }}>당직실</span> . 서구청{" "}
              <span style={{ color: "blue" }}>당직실</span>
            </strong>
          </div>

          <div
            style={{
              width: "50%",
              height: "15vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid black",
              borderTop: "none",
              borderLeft: "none",
              fontSize: "15px",
              lineHeight: "1.5",
            }}
          >
            <strong
              style={{ fontSize: "1.5em", color: "blue", marginBottom: "10px" }}
            >
              디지털 트윈
            </strong>
            <strong style={{ fontSize: "1em", color: "black" }}>
              2층 민원봉사실
            </strong>
            <strong style={{ fontSize: "13px", color: "black" }}>
              지상 주차장 주차가능 : 10대
            </strong>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "30vh",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              width: "75%",
              height: "100%",
              justifyContent: "center",
              textAlign: "start",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
              }}
            >
              <strong style={{ fontSize: "1em", color: "blue" }}>
                Pre-Alpha Test Ver 1.0
              </strong>
            </div>
            <div
              style={{
                width: "100%",
                height: "25%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <strong style={{ fontSize: "13px", color: "blue" }}>
                <span style={{ color: "red" }}>QUANTUM QR코드</span> 4D 공간주소
                서비스
              </strong>
            </div>

            <div
              style={{
                width: "100%",
                height: "25%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <span style={{ fontSize: "13px", color: "black" }}>
                SK텔레콤 퀀텀QR코드 로그인 적용
              </span>
            </div>
          </div>
          <div
            className="c1image"
            style={{
              display: "flex",
              width: "25%",
              justifyContent: "center",
              alignItems: "center",
              objectFit: "cover",
            }}
          >
            <img
              className="phoneImage"
              alt="qr1"
              src="img/qr1.png"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

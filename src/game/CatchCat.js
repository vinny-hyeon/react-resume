import React, { useEffect, useState } from "react";
import mouse from "./image/mouse.png";
import cat from "./image/cat.png";

const catStyle = {
  position: "absolute",
  width: "75%",
  height: "75%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function CatchCat() {
  const [board, setBoard] = useState([]);
  const [num, setNum] = useState(5);
  const [colorIdx, setColorIdx] = useState([-1, -1]);
  const [questionIdx, setQuestionIdx] = useState(0);
  useEffect(() => {
    const createItem = (board, pickedIndexArr, img) => {
      return board.map((item, idx) => {
        if (pickedIndexArr.indexOf(idx) > -1) {
          return (
            <img
              style={{ width: "100%", height: "100%" }}
              alt="사진"
              src={img}
            />
          );
        }
        return "";
      });
    };
    let catTimer;
    let colorTimer;
    let answerTimer;

    const init = () => {
      let mouseBoard = Array.from({ length: 36 }, () => "");
      let catBoard = Array.from({ length: 36 }, () => "");
      // 생쥐 생성
      // 0 ~ 35 중 랜덤으로 num개 선택
      const mousePickedIndexArr = selectIndex(36, num);
      const mouseArr = createItem(mouseBoard, mousePickedIndexArr, mouse);
      setBoard(mouseArr);

      // 고양이 생성
      catTimer = setTimeout(() => {
        const catPickedIndexArr = selectIndex(36, num);
        const catArr = createItem(catBoard, catPickedIndexArr, cat);
        setBoard(catArr);
        // 빨간, 파랑 고양이 생성
        colorTimer = setTimeout(() => {
          const redIdx =
            catPickedIndexArr[
              Math.floor(Math.random() * catPickedIndexArr.length)
            ];
          const blueIdx =
            catPickedIndexArr[
              (catPickedIndexArr.indexOf(redIdx) + 1) % catPickedIndexArr.length
            ];
          setColorIdx([redIdx, blueIdx]);
          // 게임종료 및 정답 선택
          answerTimer = setTimeout(() => {
            setBoard([]);
          }, 300);
        }, 500);
      }, 1000);
    };
    if (questionIdx === 0) {
      init();
    }

    return () => {
      setBoard([]);
      setColorIdx([-1, -1]);
      clearTimeout(catTimer);
      clearTimeout(colorTimer);
      clearTimeout(answerTimer);
    };
  }, [num, questionIdx]);

  useEffect(() => {
    if (questionIdx >= 2) {
      setColorIdx([-1, -1]);
      setBoard([]);
      setQuestionIdx(0);
    }
  }, [questionIdx]);

  return (
    <>
      <div style={{ padding: 50 }}>
        고양이/생쥐 n마리
        <br />
        <input
          style={{ marginRight: 10, width: 50 }}
          name="setNumber"
          placeholder="5"
          onChange={(e) => {
            if (isNaN(+e.target.value) && e.target.value !== "") {
              alert("숫자를 입력해주세요!");
              setNum(5);
            }
            setNum(e.target.value);
          }}
          value={num}
        />
      </div>
      <div style={{ padding: 100 }}>
        {board.length ? (
          <ul style={{ listStyle: "none" }}>
            {board.map((item, index) => {
              return (
                <>
                  {index % 6 === 0 && <br />}
                  <div
                    style={{
                      backgroundColor:
                        index === colorIdx[0]
                          ? "red"
                          : index === colorIdx[1]
                          ? "blue"
                          : "gray",
                      width: 100,
                      height: 100,
                      marginRight: 10,
                      display: "inline-block",
                      position: "relative",
                    }}
                  >
                    <div style={catStyle}>{item}</div>
                  </div>
                </>
              );
            })}
          </ul>
        ) : (
          <div>
            <h1>{`${
              questionIdx === 0 ? "빨간" : "파란"
            } 칸의 고양이는 생쥐를 찾았을까요?`}</h1>
            <br />
            <div
              style={{
                position: "relative",
                backgroundColor: questionIdx === 0 ? "red" : "blue",
                width: 100,
                height: 100,
              }}
            >
              <img src={cat} style={catStyle} alt="고양이" />
            </div>

            <br />
            <br />
            <br />
            <button
              style={{ width: 300, height: 50, marginRight: 30 }}
              onClick={() => {
                setQuestionIdx(questionIdx + 1);
              }}
            >
              놓쳤다.
            </button>
            <button
              style={{ width: 300, height: 50 }}
              onClick={() => {
                setQuestionIdx(questionIdx + 1);
              }}
            >
              찾았다.
            </button>
          </div>
        )}
      </div>
    </>
  );
}

const selectIndex = (totalIndex, selectingNumber) => {
  let randomIndexArray = [];
  for (let i = 0; i < selectingNumber; i++) {
    //check if there is any duplicate index
    const randomNum = Math.floor(Math.random() * totalIndex);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      //if the randomNum is already in the array retry
      i--;
    }
  }
  return randomIndexArray;
};

export default CatchCat;

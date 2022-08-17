/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>世界の〇ベアツ</h1>
      <ColorfulMessage color="blue">一世を風靡した名ギャグ</ColorfulMessage>
      <ColorfulMessage color="orange">
        今から数字を数えて、3の倍数の時にアホな顔になります。
      </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* faceShowFlagがfalseなら右辺を返す
      {(faceShowFlag && num !== 0) || <p>(-ω-)</p>} */}
      {/* faceShowFlagがtrueなら右辺を返す */}
      {faceShowFlag && <p>(´◉◞౪◟◉)＜アホやで！</p>}
    </>
  );
};

export default App;

import spaceship from "../../assets/spaceship.png";

import React, { useEffect, useState } from "react";
import Missile from "../Missile/Missile";

function SpaceShip() {
  // tracks the ships x position
  const [marginLeft, setMarginLeft] = useState(0);
  const [missileList, setMissileList] = useState([]);

  useEffect(() => {
    function handleKeyDown(e) {
      //Left Arrow Key
      if (e.keyCode === 32) {
        console.log("Spacebar!");
        setMissileList([
          ...missileList,
          {
            x: marginLeft - 10, // starting positon horizontal
            w: 100,
            h: 100,
          },
        ]);
        // img.src = missile;
        // img.classList.add("missileImage");
        // img.width = 50;
        // img.height = 50;
        // img.marginLeft = marginLeft;
        // document.getElementById("Body").appendChild(img);
      } else if (e.keyCode === 37) {
        console.log("Left");
        if (marginLeft > 0 + 100) {
          setMarginLeft(marginLeft - 75);
        } else {
          setMarginLeft(0);
        }
        //Right Arrow Key
      } else if (e.keyCode === 39) {
        console.log("Right");
        if (marginLeft < window.outerWidth - 90) {
          setMarginLeft(marginLeft + 75);
        } else {
          const value = window.outerWidth - 75;
          setMarginLeft(value);
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [marginLeft, missileList]);

  // console.log(marginLeft);
  // console.log(window.innerWidth);
  return (
    <div id="Body">
      <img
        alt="Spaceship"
        src={spaceship}
        style={{
          left: marginLeft,
          width: 75,
          bottom: 300,
          flex: 1,
          position: 'absolute'
        }}
      />

      {missileList.map((missile, i) => {
        return (
          <Missile
            key={i}
            height={missile.h}
            width={missile.w}
            left={missile.x}
          />
        );
      })}
    </div>
  );
}

export default SpaceShip;

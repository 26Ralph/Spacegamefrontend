import "../../App.css";
import Timer from "../../components/Timer/Timer";
import SpaceShip from "../../components/SpaceShip/SpaceShip";
import useAllHighScores from "../../hooks/useAllHighScores";

export default function Game() {
  const { allScores } = useAllHighScores();

  console.log(allScores)

  // let img = new Image();

  // function handleKeyUp(e) {

  //   if (e.keyCode === 32) {
  //     console.log("Spacebar!");
  //     img.src = missile;
  //     img.classList.add('missileImage')
  //     img.width = 50;
  //     img.height = 50;
  //     img.marginLeft = marginLeft;
  //     document.getElementById("Body").appendChild(img);
  //   }

  // }

  // image that holds image true or false

  // if space -> make the use effect
  // get spaceship margin location to render the laser

  // useEffect(() => {
  //   function handleKeyDown(e) {
  //     console.log(e.keyCode);
  //     //Left Arrow Key
  //     if (e.keyCode === 37) {
  //       console.log("Left");
  //       if (marginLeft > 0) {
  //         setMarginLeft(marginLeft - 75);
  //       } else {
  //         setMarginLeft(0);
  //       }
  //       //Right Arrow Key
  //     } else if (e.keyCode === 39) {
  //       console.log("Right");
  //       if (marginLeft < window.outerWidth - 75) {
  //         setMarginLeft(marginLeft + 75);
  //       } else {
  //         const value = window.outerWidth - 75;
  //         setMarginLeft(value);
  //       }
  //     }
  //     // Spacebar
  //     if (e.keyCode === 32) {
  //       console.log("Spacebar!");
  //     }
  //   }

  //   document.addEventListener("keydown", handleKeyDown);

  //   document.addEventListener("keydown", handleKeyUp);

  //   // Don't forget to clean up
  //   return function cleanup() {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [marginLeft]);
  console.log(window.innerWidth);

  return (
    <div className="App" id="animatedBackground">
      <div>
        <Timer />

        {/* <div id="spacedivboom">
            <img
                id='spaceshipdiv'
                alt="Spaceship"
                src={spaceship}
                style={{
                  marginLeft: marginLeft,
                  width: 75,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "white",
                  marginTop: window.outerHeight / 2,
                }}
              />
           </div> */}

        <SpaceShip />
      </div>
    </div>
  );
}

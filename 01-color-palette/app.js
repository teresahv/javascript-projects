const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colorHexadecimal = document.querySelector(".color-hex");
const coloRgb = document.querySelector(".color-rgba");
const colorHsl = document.querySelector(".color-hsl");

btn.addEventListener("click", () => {
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNum()];
        }
        
        /*Hexadecimal to RGB*/
        const hexToRgb = hex => {
          const rgb = hex.match(/\w\w/g).map(x => parseInt(x, 16));
          coloRgb.textContent = `(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        /*RGB to HSL*/
        rgb[0] /= 255, rgb[1] /= 255, rgb[2] /= 255;
        let max = Math.max(rgb[0], rgb[1], rgb[2]),
            min = Math.min(rgb[0], rgb[1], rgb[2]);
            let h, s, l = (max + min) / 2;
            if(max == min){
              h = s = 0;
            }else {
              let d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              switch(max) {
                case rgb[0]: h = (rgb[1] - rgb[2]) / d + (rgb[1] < rgb[2] ? 6 : 0) ;break;
                case rgb[1]: h = (rgb[2] - rgb[0]) / d + 2;break;
                case rgb[2]: h = (rgb[0] - rgb[1]) / d + 4;break;
              }
              h /= 6;
            }

            s = s*100;
            s = Math.round(s);
            l = l*100;
            l = Math.round(l);
            h = Math.round(360*h);
            colorHsl.textContent = `(${h}, ${s}%, ${l}%)`;
        };

        hexToRgb(hexColor)

     
      
        colorHexadecimal.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
    });

function getRandomNum() {//random hexadecimal
  return Math.floor(Math.random() * hex.length);
}

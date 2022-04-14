import Particles from "react-tsparticles";
import { ISourceOptions } from "tsparticles";
import { useTheme } from '@mui/material'

const CanvasBackground = () => {
  const theme = useTheme()
  const isDarkTheme = theme.palette.mode === 'dark'
  const options: ISourceOptions = {
    background: {
      color: isDarkTheme ? "#000" : "#EEEEF5"
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      number: {
        value: 300,
        density: {
          enable: !0,
          value_area: 1e3
        }
      },
      color: {
        value: ["#8e8ffe", "#ffeccc"]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 4
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: .8,
        random: !0,
        anim: {
          enable: !1,
          speed: 1,
          opacity_min: .1,
          sync: !1
        }
      },
      size: {
        value: 3,
        random: !0,
        anim: {
          enable: !1,
          speed: 40,
          size_min: .08,
          sync: !1
        }
      },
      line_linked: {
        enable: !1,
        distance: 150,
        color: "#ffffff",
        opacity: .4,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        attract: {
          enable: !1,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    retina_detect: !1
  };

  return <Particles options={options} />;
};
export default CanvasBackground;
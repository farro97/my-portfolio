import styled from "@emotion/styled";

const BackG = styled.div`
  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }
  .background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #202023;
    overflow: hidden;

  }

  .background span {
    width: 1vmin;
    height: 1vmin;
    border-radius: 1vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 18;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .background span:nth-child(0) {
    color: #fafafa;
    top: 48%;
    left: 76%;
    animation-duration: 33s;
    animation-delay: -11s;
    transform-origin: 14vw 14vh;
    box-shadow: -2vmin 0 1.0266552895018062vmin currentColor;
  }
  .background span:nth-child(1) {
    color: #ba6d6d;
    top: 66%;
    left: 62%;
    animation-duration: 35s;
    animation-delay: -63s;
    transform-origin: 21vw -6vh;
    box-shadow: 2vmin 0 1.0691060325130188vmin currentColor;
  }
  .background span:nth-child(2) {
    color: #fafafa;
    top: 79%;
    left: 5%;
    animation-duration: 139s;
    animation-delay: -285s;
    transform-origin: 8vw -15vh;
    box-shadow: -2vmin 0 0.3223248156969549vmin currentColor;
  }
  .background span:nth-child(3) {
    color: #ba6d6d;
    top: 52%;
    left: 61%;
    animation-duration: 9s;
    animation-delay: -207s;
    transform-origin: 8vw -24vh;
    box-shadow: -2vmin 0 1.0357368508958247vmin currentColor;
  }
  .background span:nth-child(4) {
    color: #fafafa;
    top: 51%;
    left: 6%;
    animation-duration: 153s;
    animation-delay: -61s;
    transform-origin: -4vw 4vh;
    box-shadow: -2vmin 0 0.773889672948811vmin currentColor;
  }
  .background span:nth-child(5) {
    color: #fafafa;
    top: 90%;
    left: 21%;
    animation-duration: 98s;
    animation-delay: -193s;
    transform-origin: -23vw -8vh;
    box-shadow: -2vmin 0 0.8061996539750589vmin currentColor;
  }
  .background span:nth-child(6) {
    color: #70679e;
    top: 79%;
    left: 10%;
    animation-duration: 54s;
    animation-delay: -50s;
    transform-origin: -9vw 6vh;
    box-shadow: -2vmin 0 0.7784870016522338vmin currentColor;
  }
  .background span:nth-child(7) {
    color: #fafafa;
    top: 23%;
    left: 70%;
    animation-duration: 177s;
    animation-delay: -130s;
    transform-origin: 22vw 13vh;
    box-shadow: -2vmin 0 1.224904378200567vmin currentColor;
  }
  .background span:nth-child(8) {
    color: #70679e;
    top: 80%;
    left: 93%;
    animation-duration: 268s;
    animation-delay: -258s;
    transform-origin: 25vw -10vh;
    box-shadow: 2vmin 0 0.9927938051906655vmin currentColor;
  }
  .background span:nth-child(9) {
    color: #70679e;
    top: 22%;
    left: 39%;
    animation-duration: 41s;
    animation-delay: -24s;
    transform-origin: 23vw -15vh;
    box-shadow: 2vmin 0 0.890494047962578vmin currentColor;
  }
  .background span:nth-child(10) {
    color: #fafafa;
    top: 41%;
    left: 77%;
    animation-duration: 309s;
    animation-delay: -293s;
    transform-origin: 7vw 12vh;
    box-shadow: 2vmin 0 0.883591500442986vmin currentColor;
  }
  .background span:nth-child(11) {
    color: #fafafa;
    top: 82%;
    left: 43%;
    animation-duration: 202s;
    animation-delay: -190s;
    transform-origin: 24vw 0vh;
    box-shadow: 2vmin 0 0.8265204539326019vmin currentColor;
  }
  .background span:nth-child(12) {
    color: #70679e;
    top: 91%;
    left: 37%;
    animation-duration: 195s;
    animation-delay: -320s;
    transform-origin: -19vw 25vh;
    box-shadow: 2vmin 0 0.2504138807928642vmin currentColor;
  }
  .background span:nth-child(13) {
    color: #70679e;
    top: 7%;
    left: 26%;
    animation-duration: 291s;
    animation-delay: -290s;
    transform-origin: 25vw -14vh;
    box-shadow: 2vmin 0 0.9220233425936384vmin currentColor;
  }
  .background span:nth-child(14) {
    color: #ba6d6d;
    top: 3%;
    left: 82%;
    animation-duration: 182s;
    animation-delay: -136s;
    transform-origin: -17vw 7vh;
    box-shadow: -2vmin 0 0.7022585594627264vmin currentColor;
  }
  .background span:nth-child(15) {
    color: #ba6d6d;
    top: 7%;
    left: 41%;
    animation-duration: 300s;
    animation-delay: -197s;
    transform-origin: -17vw 2vh;
    box-shadow: 2vmin 0 0.5272878291979679vmin currentColor;
  }
  .background span:nth-child(16) {
    color: #70679e;
    top: 58%;
    left: 8%;
    animation-duration: 309s;
    animation-delay: -96s;
    transform-origin: 20vw -9vh;
    box-shadow: 2vmin 0 1.089203533374191vmin currentColor;
  }
  .background span:nth-child(17) {
    color: #fafafa;
    top: 10%;
    left: 84%;
    animation-duration: 67s;
    animation-delay: -306s;
    transform-origin: 19vw 5vh;
    box-shadow: -2vmin 0 0.6504287886645386vmin currentColor;
  }
  .background span:nth-child(18) {
    color: #fafafa;
    top: 22%;
    left: 78%;
    animation-duration: 20s;
    animation-delay: -297s;
    transform-origin: 9vw -7vh;
    box-shadow: -2vmin 0 1.0757893477366822vmin currentColor;
  }
  .background span:nth-child(19) {
    color: #fafafa;
    top: 75%;
    left: 35%;
    animation-duration: 61s;
    animation-delay: -294s;
    transform-origin: 2vw 22vh;
    box-shadow: -2vmin 0 0.3523812819195351vmin currentColor;
  }
  .background span:nth-child(20) {
    color: #fafafa;
    top: 6%;
    left: 80%;
    animation-duration: 187s;
    animation-delay: -134s;
    transform-origin: -18vw 21vh;
    box-shadow: -2vmin 0 0.37926625164066685vmin currentColor;
  }
  .background span:nth-child(21) {
    color: #fafafa;
    top: 71%;
    left: 16%;
    animation-duration: 60s;
    animation-delay: -249s;
    transform-origin: 12vw 9vh;
    box-shadow: 2vmin 0 0.8509633006580959vmin currentColor;
  }
  .background span:nth-child(22) {
    color: #70679e;
    top: 37%;
    left: 15%;
    animation-duration: 299s;
    animation-delay: -106s;
    transform-origin: 23vw 24vh;
    box-shadow: 2vmin 0 0.3884576749106228vmin currentColor;
  }
  .background span:nth-child(23) {
    color: #70679e;
    top: 24%;
    left: 75%;
    animation-duration: 164s;
    animation-delay: -16s;
    transform-origin: -16vw -14vh;
    box-shadow: 2vmin 0 0.29277814490662446vmin currentColor;
  }
  .background span:nth-child(24) {
    color: #fafafa;
    top: 98%;
    left: 69%;
    animation-duration: 178s;
    animation-delay: -196s;
    transform-origin: -20vw -7vh;
    box-shadow: -2vmin 0 0.5798844219398753vmin currentColor;
  }
  .background span:nth-child(25) {
    color: #ba6d6d;
    top: 75%;
    left: 94%;
    animation-duration: 26s;
    animation-delay: -179s;
    transform-origin: 3vw 6vh;
    box-shadow: -2vmin 0 1.0593415324422915vmin currentColor;
  }
`;

const BackgroundParticles = () => {
  return (
    <BackG>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </BackG>
  );
};

export default BackgroundParticles;

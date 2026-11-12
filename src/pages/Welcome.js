import { useCallback, useEffect } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { PARTICLES_CONFIG } from "./particlesConfig";
import "./welcome.css";

const NEW_PORTFOLIO_URL = "https://kudenikovns.github.io/portfolio/";

function Welcome() {
  // The old portfolio pages no longer exist: any old link
  // (e.g. /#/skills, /#/project/3) is reset to the Welcome page.
  useEffect(() => {
    if (window.location.hash || window.location.search) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const initParticles = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const enter = () => {
    window.location.href = NEW_PORTFOLIO_URL;
  };

  return (
    <main className='welcome'>
      <Particles init={initParticles} options={PARTICLES_CONFIG} />
      <div className='welcome__content'>
        <h1 className='welcome__title'>Welcome</h1>
        <button type='button' className='welcome__btn' onClick={enter}>
          Enter
        </button>
      </div>
    </main>
  );
}

export default Welcome;

import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const BlobMenu = () => {
  const activLink = "nav-list__link nav-list__link_activ";
  const normalLink = "nav-list__link";

  const [menuExpanded, setMenuExpanded] = useState(false);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const curveXRef = useRef(10);
  const curveYRef = useRef(0);
  const targetXRef = useRef(0);
  const xIterationRef = useRef(0);
  const yIterationRef = useRef(0);

  const blobPathRef = useRef(null);
  const blobRef = useRef(null);
  const hamburgerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const easeOutExpo = (
      currentIteration,
      startValue,
      changeInValue,
      totalIterations
    ) =>
      changeInValue *
        (-Math.pow(2, (-10 * currentIteration) / totalIterations) + 1) +
      startValue;

    const hoverZone = 150;
    const expandAmount = 20;

    let animationFrameId;

    const svgCurve = () => {
      if (Math.abs(curveXRef.current - xRef.current) < 1) {
        xIterationRef.current = 0;
      } else {
        if (menuExpanded) {
          targetXRef.current = 0;
        } else {
          if (xRef.current > hoverZone) {
            targetXRef.current = 0;
          } else {
            targetXRef.current = -(
              ((60 + expandAmount) / 100) *
              (xRef.current - hoverZone)
            );
          }
        }
        xIterationRef.current += 1;
        curveXRef.current = easeOutExpo(
          xIterationRef.current,
          curveXRef.current,
          targetXRef.current - curveXRef.current,
          100
        );
      }

      if (Math.abs(curveYRef.current - yRef.current) < 1) {
        yIterationRef.current = 0;
      } else {
        yIterationRef.current += 1;
        curveYRef.current = easeOutExpo(
          yIterationRef.current,
          curveYRef.current,
          yRef.current - curveYRef.current,
          100
        );
      }

      const anchorDistance = 200;
      const curviness = anchorDistance - 40;

      const newCurve = `M60,${window.innerHeight}H0V0h60v${
        curveYRef.current - anchorDistance
      }c0,${curviness},${curveXRef.current},${curviness},${
        curveXRef.current
      },${anchorDistance}S60,${curveYRef.current},60,${
        curveYRef.current + anchorDistance * 2
      }V${window.innerHeight}z`;

      if (blobPathRef.current) {
        blobPathRef.current.setAttribute("d", newCurve);
      }
      if (blobRef.current) {
        blobRef.current.style.width = `${curveXRef.current + 60}px`;
      }
      if (hamburgerRef.current) {
        hamburgerRef.current.style.transform = `translate(${curveXRef.current}px, ${curveYRef.current}px)`;
      }
      animationFrameId = window.requestAnimationFrame(svgCurve);
    };

    const handleMouseMove = (e) => {
      xRef.current = e.clientX;
      yRef.current = e.clientY;
    };

    const handleHamburgerClick = () => {
      menuRef.current.classList.add("expanded");
      setMenuExpanded(true);
    };

    const handleMenuInnerClick = () => {
      menuRef.current.classList.remove("expanded");
      setMenuExpanded(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const hamburgerEl = hamburgerRef.current;
    const menuInnerEl = menuRef.current?.querySelector(".menu-inner");

    if (hamburgerEl) {
      hamburgerEl.addEventListener("click", handleHamburgerClick);
    }
    if (menuInnerEl) {
      menuInnerEl.addEventListener("click", handleMenuInnerClick);
    }

    svgCurve();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (hamburgerEl) {
        hamburgerEl.removeEventListener("click", handleHamburgerClick);
      }
      if (menuInnerEl) {
        menuInnerEl.removeEventListener("click", handleMenuInnerClick);
      }
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [menuExpanded]);

  return (
    <div id="menu" ref={menuRef} className={menuExpanded ? "expanded" : ""}>
      <div className="hamburger" ref={hamburgerRef}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <div className="menu-inner">
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activLink : normalLink)}
            >
              Home
            </NavLink>
          </li>
{/*           <li className="nav-list__item">
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? activLink : normalLink)}
            >
              Skills
            </NavLink>
          </li> */}
          <li className="nav-list__item">
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? activLink : normalLink)}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>

      <svg
        version="1.1"
        id="blob"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        ref={blobRef}
      >
        <path
          id="blob-path"
          ref={blobPathRef}
          d="M60,500H0V0h60c0,0,20,172,20,250S60,900,60,500z"
        />
      </svg>
    </div>
  );
};

export default BlobMenu;

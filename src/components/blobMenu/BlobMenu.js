import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const BlobMenu = () => {
  const activLink = "nav-list__link nav-list__link_activ";
  const normalLink = "nav-list__link";

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [curveX, setCurveX] = useState(10);
  const [curveY, setCurveY] = useState(0);
  const [targetX, setTargetX] = useState(0);
  const [xitteration, setXitteration] = useState(0);
  const [yitteration, setYitteration] = useState(0);
  const [menuExpanded, setMenuExpanded] = useState(false);

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

    const svgCurve = () => {
      if (curveX > x - 1 && curveX < x + 1) {
        setXitteration(0);
      } else {
        if (menuExpanded) {
          setTargetX(0);
        } else {
          setXitteration(0);
          if (x > hoverZone) {
            setTargetX(0);
          } else {
            setTargetX(-(((60 + expandAmount) / 100) * (x - hoverZone)));
          }
        }
        setXitteration((prevXitteration) => prevXitteration + 1);
      }

      if (curveY > y - 1 && curveY < y + 1) {
        setYitteration(0);
      } else {
        setYitteration(0);
        setYitteration((prevYitteration) => prevYitteration + 1);
      }

      setCurveX((prevCurveX) =>
        easeOutExpo(xitteration, prevCurveX, targetX - prevCurveX, 100)
      );
      setCurveY((prevCurveY) =>
        easeOutExpo(yitteration, prevCurveY, y - prevCurveY, 100)
      );

      const anchorDistance = 200;
      const curviness = anchorDistance - 40;

      const newCurve =
        "M60," +
        window.innerHeight +
        "H0V0h60v" +
        (curveY - anchorDistance) +
        "c0," +
        curviness +
        "," +
        curveX +
        "," +
        curviness +
        "," +
        curveX +
        "," +
        anchorDistance +
        "S60," +
        curveY +
        ",60," +
        (curveY + anchorDistance * 2) +
        "V" +
        window.innerHeight +
        "z";

      const blobPath = document.getElementById("blob-path");
      if (blobPath) {
        blobPath.setAttribute("d", newCurve);
      }

      const blob = document.getElementById("blob");
      if (blob) {
        blob.style.width = curveX + 60 + "px";
      }

      const hamburger = document.querySelector(".hamburger");
      if (hamburger) {
        hamburger.style.transform =
          "translate(" + curveX + "px, " + curveY + "px)";
      }

      window.requestAnimationFrame(svgCurve);
    };

    window.addEventListener("mousemove", (e) => {
      setX(e.clientX);
      setY(e.clientY);
    });

    document
      .querySelector(".hamburger, .menu-inner")
      .addEventListener("click", function () {
        this.parentNode.classList.add("expanded");
        setMenuExpanded(true);
      });

    document
      .querySelector(".menu-inner")
      .addEventListener("click", function () {
        setMenuExpanded(false);
        this.parentNode.classList.remove("expanded");
      });

    window.requestAnimationFrame(svgCurve);

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, [curveX, curveY, menuExpanded, targetX, x, xitteration, y, yitteration]);

  return (
    <>
      <div id='menu' className={menuExpanded ? "expanded" : ""}>
        <div className='hamburger'>
          <div className='line' />
          <div className='line' />
          <div className='line' />
        </div>
        <div className='menu-inner'>
          <ul className='nav-list'>
            <li className='nav-list__item'>
              <NavLink
                to='/portfolio-react'
                className={({ isActive }) =>
                  isActive ? activLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink
                to='/skills'
                className={({ isActive }) =>
                  isActive ? activLink : normalLink
                }
              >
                Skills
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink
                to='/contacts'
                className={({ isActive }) =>
                  isActive ? activLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>

        <svg
          version='1.1'
          id='blob'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <path
            id='blob-path'
            d='M60,500H0V0h60c0,0,20,172,20,250S60,900,60,500z'
          />
        </svg>
      </div>
    </>
  );
};

export default BlobMenu;

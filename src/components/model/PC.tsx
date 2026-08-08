"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LaptopProps {
  className?: string;
  brand?: "pc" | "mac";
  size?: "sm" | "md" | "lg";
}

const PC: React.FC<LaptopProps> = ({
  className = "",
  brand = "pc",
  size = "md",
}) => {
  const scopeRef = useRef<HTMLDivElement>(null);

  const sizeMap = {
    sm: { scale: 0.6 },
    md: { scale: 1 },
    lg: { scale: 1.4 },
  };

  const { scale } = sizeMap[size];
  const brandText = brand === "pc" ? "Laptop" : "MacBook Air";

  useEffect(() => {
    const root = scopeRef.current;
    if (!root) return;

    const model = root.querySelector(".pc-model") as HTMLElement | null;
    if (!model) return;

    const getLayout = () => {
      const rect = model.getBoundingClientRect();

      // Minimum 24px gap from edges (up to 40px on big screens)
      const spacing = Math.max(24, Math.min(40, window.innerWidth * 0.03));

      // Extra room at the bottom so the soft shadow stays inside too
      const shadowExtra = rect.height * 0.5;

      const halfW = rect.width / 2;
      const halfH = rect.height / 2;

      const maxX = Math.max(0, window.innerWidth / 2 - halfW - spacing);
      const maxYTop = Math.max(0, window.innerHeight / 2 - halfH - spacing);
      const maxYBottom = Math.max(
        0,
        window.innerHeight / 2 - halfH - spacing - shadowExtra,
      );

      return {
        bottomRight: { x: maxX, y: maxYBottom },
        bottomCenter: { x: 0, y: maxYBottom },
        bottomLeft: { x: -maxX, y: maxYBottom },
        rightCenter: { x: maxX, y: 0 },
        leftCenter: { x: -maxX, y: 0 },
        topRight: { x: maxX, y: -maxYTop },
        topLeft: { x: -maxX, y: -maxYTop },
        center: { x: 0, y: 0 },
      };
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const applyStaticPosition = () => {
        const layout = getLayout();
        gsap.set(root, layout.bottomRight);
      };

      applyStaticPosition();

      let resizeTimer: ReturnType<typeof setTimeout> | null = null;

      const onResize = () => {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => applyStaticPosition(), 200);
      };

      window.addEventListener("resize", onResize);
      window.addEventListener("orientationchange", onResize);

      return () => {
        if (resizeTimer) clearTimeout(resizeTimer);
        window.removeEventListener("resize", onResize);
        window.removeEventListener("orientationchange", onResize);
      };
    }

    const inner: any = root.querySelectorAll(".inner");
    const screen: any = root.querySelectorAll(".screen");
    const shadow: any = root.querySelectorAll(".shadow");
    const shade: any = root.querySelectorAll(".shade");
    const bodyFace: any = root.querySelectorAll(".macbody .face-one");
    const macbody: any = root.querySelectorAll(".macbody");

    gsap.set(macbody, { rotateX: -90 });
    gsap.set(inner, { rotateX: -20, rotateY: 0, rotateZ: 0 });
    gsap.set(screen, { rotateX: 0, backgroundPosition: "0% 100%" });
    gsap.set(shadow, {
      rotateX: 80,
      rotateY: 0,
      rotateZ: 0,
      x: 0,
      boxShadow: "0 0 60px 40px rgba(0,0,0,0.3)",
    });
    gsap.set(shade, { backgroundPosition: "-20px 0px" });
    gsap.set(bodyFace, { backgroundColor: "#dfdfdf" });

    type Pose = {
      inner: Record<string, any>;
      screen: Record<string, any>;
      shadow: Record<string, any>;
      shade: Record<string, any>;
      bodyFace: Record<string, any>;
    };

    const poses: Pose[] = [
      {
        inner: { rotateX: -20, rotateY: 0, rotateZ: 0 },
        screen: { rotateX: 0, backgroundPosition: "0% 100%" },
        shadow: {
          rotateX: 80,
          rotateY: 0,
          rotateZ: 0,
          x: 0,
          boxShadow: "0 0 60px 40px rgba(0,0,0,0.3)",
        },
        shade: { backgroundPosition: "-20px 0px" },
        bodyFace: { backgroundColor: "#dfdfdf" },
      },
      {
        inner: { rotateX: -20, rotateY: 35, rotateZ: 0 },
        screen: { rotateX: 45, backgroundPosition: "0% 100%" },
        shadow: {
          rotateX: 80,
          rotateY: 10,
          rotateZ: 0,
          x: 0,
          boxShadow: "0 0 60px 40px rgba(0,0,0,0.3)",
        },
        shade: { backgroundPosition: "-40px 0px" },
        bodyFace: { backgroundColor: "#d8d8d8" },
      },
      {
        inner: { rotateX: 18, rotateY: 150, rotateZ: 0 },
        screen: { rotateX: -85, backgroundPosition: "50% 0%" },
        shadow: {
          rotateX: 45,
          rotateY: -20,
          rotateZ: -15,
          x: 0,
          boxShadow: "0 0 50px 30px rgba(0,0,0,0.3)",
        },
        shade: { backgroundPosition: "200px 0px" },
        bodyFace: { backgroundColor: "#bbbbbb" },
      },
      {
        inner: { rotateX: -45, rotateY: 245, rotateZ: 0 },
        screen: { rotateX: 12, backgroundPosition: "100% 0%" },
        shadow: {
          rotateX: 80,
          rotateY: -10,
          rotateZ: 35,
          x: 24,
          boxShadow: "0 0 35px 15px rgba(0,0,0,0.1)",
        },
        shade: { backgroundPosition: "-200px 0px" },
        bodyFace: { backgroundColor: "#cfcfcf" },
      },
      {
        inner: { rotateX: -20, rotateY: 325, rotateZ: 0 },
        screen: { rotateX: 0, backgroundPosition: "100% 0%" },
        shadow: {
          rotateX: 80,
          rotateY: 0,
          rotateZ: 0,
          x: 0,
          boxShadow: "0 0 60px 40px rgba(0,0,0,0.3)",
        },
        shade: { backgroundPosition: "0px 0px" },
        bodyFace: { backgroundColor: "#dfdfdf" },
      },
      {
        inner: { rotateX: -20, rotateY: 360, rotateZ: 0 },
        screen: { rotateX: 0, backgroundPosition: "100% 50%" },
        shadow: {
          rotateX: 80,
          rotateY: 0,
          rotateZ: 0,
          x: 0,
          boxShadow: "0 0 60px 40px rgba(0,0,0,0.3)",
        },
        shade: { backgroundPosition: "-20px 0px" },
        bodyFace: { backgroundColor: "#dfdfdf" },
      },
    ];

    // Position of the laptop at the start of each section
    // hero -> bio -> projects -> skills -> footer -> footer end
    const positionKeys = [
      "bottomLeft",
      "rightCenter",
      "bottomCenter",
      "bottomRight",
      "leftCenter",
      "bottomRight",
    ] as const;

    let tl: gsap.core.Timeline | null = null;
    let st: ReturnType<typeof ScrollTrigger.create> | null = null;
    let hasInitialized = false;

    const build = () => {
      tl?.kill();
      st?.kill();

      const layout = getLayout();
      const positions = positionKeys.map((key) => layout[key]);

      if (!hasInitialized) {
        const initialPosition = positions[0];
        if (initialPosition) {
          gsap.set(root, initialPosition);
        }
        hasInitialized = true;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
      });

      const maxScroll = ScrollTrigger.maxScroll(window);

      const SECTION_IDS = [
        "hero",
        "bio",
        "projects",
        "skills",
        "footer",
      ] as const;

      const activationOffset = 0;

      const progress = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        if (!el || maxScroll <= 0) return 0;

        const top =
          el.getBoundingClientRect().top + window.scrollY - activationOffset;

        return gsap.utils.clamp(0, 1, top / maxScroll);
      });

      for (let i = 1; i < progress.length; i++) {
        progress[i] = Math.max(progress[i], progress[i - 1]);
      }

      const addSegment = (
        start: number,
        duration: number,
        fromIndex: number,
        toIndex: number,
      ) => {
        const fromPose = poses[fromIndex];
        const toPose = poses[toIndex];

        const fromPosition = positions[fromIndex];
        const toPosition = positions[toIndex];

        if (!fromPose || !toPose) return;
        if (!fromPosition || !toPosition) return;
        if (duration <= 0.0001) return;

        // Move the whole fixed laptop around the screen
        timeline.fromTo(
          root as any,
          fromPosition,
          {
            ...toPosition,
            duration,
            immediateRender: false,
          },
          start,
        );

        timeline.fromTo(
          inner,
          fromPose.inner,
          {
            ...toPose.inner,
            duration,
            immediateRender: false,
          },
          start,
        );

        timeline.fromTo(
          screen,
          fromPose.screen,
          {
            ...toPose.screen,
            duration,
            immediateRender: false,
          },
          start,
        );

        timeline.fromTo(
          shadow,
          fromPose.shadow,
          {
            ...toPose.shadow,
            duration,
            immediateRender: false,
          },
          start,
        );

        timeline.fromTo(
          shade,
          fromPose.shade,
          {
            ...toPose.shade,
            duration,
            immediateRender: false,
          },
          start,
        );

        timeline.fromTo(
          bodyFace,
          fromPose.bodyFace,
          {
            ...toPose.bodyFace,
            duration,
            immediateRender: false,
          },
          start,
        );
      };

      SECTION_IDS.forEach((_, i) => {
        const start = progress[i];
        const end = i === SECTION_IDS.length - 1 ? 1 : (progress[i + 1] ?? 1);

        addSegment(start, Math.max(0, end - start), i, i + 1);
      });

      const dummy: Record<string, unknown> = {};
      timeline.to(dummy, { done: true, duration: 0.001 }, 0.999);

      tl = timeline;

      st = ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        animation: timeline,
        scrub: 0.6,
        invalidateOnRefresh: true,
      });
    };

    build();
    ScrollTrigger.refresh();

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;

    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        build();
        ScrollTrigger.refresh();
      }, 200);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      if (resizeTimer) clearTimeout(resizeTimer);

      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);

      st?.kill();
      tl?.kill();
    };
  }, [size]);

  return (
    <div
      ref={scopeRef}
      className={`pc-fixed-wrap ${className}`.trim()}
      aria-hidden="true"
    >
      <style>{`
        .pc-fixed-wrap {
          position: fixed;
          inset: 0;
          z-index: 50;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }

        .pc-stage {
          transform-origin: center;
          transform: scale(0.62);
        }

        @media (min-width: 640px) {
          .pc-stage {
            transform: scale(0.75);
          }
        }

        @media (min-width: 1024px) {
          .pc-stage {
            transform: scale(0.9);
          }
        }

        @media (min-width: 1440px) {
          .pc-stage {
            transform: scale(1);
          }
        }

        @media (min-width: 1920px) {
          .pc-stage {
            transform: scale(1.12);
          }
        }

        .pc-model {
          position: relative;
          width: 150px;
          height: 96px;
          perspective: 500px;
          transform-origin: center;
        }

        .shadow {
          position: absolute;
          width: 60px;
          height: 0px;
          left: 40px;
          top: 160px;
          transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
          box-shadow: 0 0 60px 40px rgba(0, 0, 0, 0.3);
        }

        .inner {
          z-index: 20;
          position: absolute;
          width: 150px;
          height: 96px;
          left: 0;
          top: 0;
          transform-style: preserve-3d;
          transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
        }

        .screen {
          width: 150px;
          height: 96px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 7px;
          background: #ddd;
          transform-style: preserve-3d;
          transform-origin: 50% 93px;
          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          background-image: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.34) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          background-position: left bottom;
          background-size: 300px 300px;
          box-shadow: inset 0 3px 7px rgba(255, 255, 255, 0.5);
        }

        .screen .face-one {
          width: 150px;
          height: 96px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 7px;
          background: #d3d3d3;
          transform: translateZ(2px);
          background-image: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.24) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .screen .face-one .camera {
          width: 3px;
          height: 3px;
          border-radius: 100%;
          background: #000;
          position: absolute;
          left: 50%;
          top: 4px;
          margin-left: -1.5px;
        }

        .screen .face-one .display {
          width: 130px;
          height: 74px;
          margin: 10px;
          background-color: #000;
          background-size: 100% 100%;
          border-radius: 1px;
          position: relative;
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 1);
        }

        .screen .face-one .display .shade {
          position: absolute;
          left: 0;
          top: 0;
          width: 130px;
          height: 74px;
          background: linear-gradient(
            -135deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 47%,
            rgba(255, 255, 255, 0) 48%
          );
          background-size: 300px 200px;
          background-position: -20px 0px;
        }

        .screen .face-one span {
          position: absolute;
          top: 85px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 6px;
          color: #666;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .macbody {
          width: 150px;
          height: 96px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 7px;
          background: #cbcbcb;
          transform-style: preserve-3d;
          transform-origin: 50% bottom;
          transform: rotateX(-90deg);
          background-image: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.24) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .macbody .face-one {
          width: 150px;
          height: 96px;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 7px;
          transform-style: preserve-3d;
          background: #dfdfdf;
          transform: translateZ(-2px);
          background-image: linear-gradient(
            30deg,
            rgba(0, 0, 0, 0.24) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .macbody .touchpad {
          width: 40px;
          height: 31px;
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 4px;
          margin: -44px 0 0 -18px;
          background: #cdcdcd;
          background-image: linear-gradient(
            30deg,
            rgba(0, 0, 0, 0.24) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          box-shadow: inset 0 0 3px #888;
        }

        .macbody .keyboard {
          width: 130px;
          height: 45px;
          position: absolute;
          left: 7px;
          top: 41px;
          border-radius: 4px;
          transform-style: preserve-3d;
          background: #cdcdcd;
          background-image: linear-gradient(
            30deg,
            rgba(0, 0, 0, 0.24) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          box-shadow: inset 0 0 3px #777;
          padding: 0 0 0 2px;
        }

        .keyboard .key {
          width: 6px;
          height: 6px;
          background: #444;
          float: left;
          margin: 1px;
          transform: translateZ(-2px);
          border-radius: 2px;
          box-shadow: 0 -2px 0 #222;
        }

        .key.space {
          width: 45px;
        }

        .key.f {
          height: 3px;
        }

        .macbody .pad {
          width: 5px;
          height: 5px;
          background: #333;
          border-radius: 100%;
          position: absolute;
        }

        .pad.one {
          left: 20px;
          top: 20px;
        }

        .pad.two {
          right: 20px;
          top: 20px;
        }

        .pad.three {
          right: 20px;
          bottom: 20px;
        }

        .pad.four {
          left: 20px;
          bottom: 20px;
        }
      `}</style>

      <div className="pc-stage">
        <div className="pc-model" style={{ transform: `scale(${scale})` }}>
          <div className="shadow"></div>

          <div className="inner">
            {/* Screen */}
            <div className="screen">
              <div className="face-one">
                <div className="camera"></div>

                <div className="display">
                  <div className="shade"></div>
                </div>

                <span>{brandText}</span>
              </div>
            </div>

            {/* Body */}
            <div className="macbody">
              <div className="face-one">
                <div className="touchpad"></div>

                <div className="keyboard">
                  {Array.from({ length: 67 }).map((_, i) => {
                    const isSpace = i === 5;
                    const isF = i >= 58 && i <= 73;

                    const keyClass = [
                      "key",
                      isSpace ? "space" : "",
                      isF ? "f" : "",
                    ]
                      .filter(Boolean)
                      .join(" ");

                    return <div key={i} className={keyClass}></div>;
                  })}
                </div>
              </div>

              <div className="pad one"></div>
              <div className="pad two"></div>
              <div className="pad three"></div>
              <div className="pad four"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PC;

import React from "react";
import { useSpring, animated, interpolate } from "react-spring";
import { useWindowSize } from "@react-hook/window-size";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";
import breakpoint from "../../Common/breakpoints";

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

export function Button({ label, colour, className }: ButtonProps): JSX.Element {
  const [width] = useWindowSize();
  const isButtonAnimated: boolean = width >= breakpoint.size.md;

  const [props, set] = useSpring(() => ({
    xys: [27, 1, 1],
    config: { mass: 5, tension: 350, friction: 140 },
  }));

  return (
    <>
      {isButtonAnimated ? (
        <animated.button
          className={`${styles.button} ${styles.animated} ${className}`}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [27, 1, 1] })}
          style={{
            transform: interpolate(props.xys, (x, y, s) => {
              return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
            }),
          }}
          role="button"
        >
          {label}
        </animated.button>
      ) : (
        <button className={`${styles.button} ${className}`} role="button">
          {label}
        </button>
      )}
    </>
  );
}

export default Button;

Button.displayName = "Button";

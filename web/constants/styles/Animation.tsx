// Core
import { keyframes } from "styled-components";

// Begin Component
// __________________________________________________________________________________________

export const Blink = keyframes`
  to {
    visibility: hidden;
  }
`;

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const OverlayFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: .75;
  }
`;

export const FadeInScaleUpFromTop = keyframes`
  from {
    transform: scale(.9);
    transform-origin: top center;
    opacity: 0;
  }
  to {
    transform: scale(1);
    transform-origin: top center;
    opacity: 1;
  }
`;

export const Disappear = keyframes`
  from {
    display: flex;
  }
  to {
    display: none !important;
  }
`;

export const Marquee = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const SlideFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const SlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Grain = keyframes`
  0%, 100% { transform: scale(1.5) translate(0, 0) }
  10% { transform: scale(1.5) translate(-5%, -10%) }
  20% { transform: scale(1.5) translate(-15%, 5%) }
  30% { transform: scale(1.5) translate(7%, -10%) }
  40% { transform: scale(1.5) translate(-5%, 10%) }
  50% { transform: scale(1.5) translate(-15%, 10%) }
  60% { transform: scale(1.5) translate(15%, 0%) }
  70% { transform: scale(1.5) translate(0%, 15%) }
  80% { transform: scale(1.5) translate(3%, 10%) }
  90% { transform: scale(1.5) translate(-10%, 10%) }
`;

export const LoaderDot = keyframes`
 0% {
    background: #f7fafc;
  }
  50% {
    background: #cbd5e0;
  }
  100% {
    background: #f7fafc;
  }
`;

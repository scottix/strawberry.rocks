/** @jsx jsx */
import { jsx } from "theme-ui";

import { ReactSVGFC } from "~/types/react-svg";

export const TypingIcon: ReactSVGFC = (props) => (
  <svg viewBox="0 0 88 88" width={88} height={88} {...props}>
    <path d="M43.836.01c-.215.018-.427.07-.625.156L1.234 18.602C.373 18.98.052 19.659.047 20.445c-.106 15.692 0 31.417 0 47.12.01.763.49 1.502 1.187 1.812l41.79 18.342c.3.132.81.287 1.156.28.236 0 .412-.073.593-.155 13.927-6.285 28.03-12.318 42.04-18.467A2.048 2.048 0 0088 67.565V20.726c0-1.028-.504-1.825-1.187-2.124L44.836.166a2.009 2.009 0 00-1-.156zm.188 4.156l37.011 16.28-14.68 6.436-.03-.031-36.95-16.248 14.648-6.437zM24.377 12.79L61.42 29.07l-17.398 7.623L7.012 20.445l17.366-7.655zm59.624 10.686v42.776l-14.773 6.5v-9.343c.024-1.134-1.09-2.155-2.218-2.031-.982.108-1.801 1.043-1.78 2.03v11.093l-19.209 8.437V40.162l19.209-8.437v9.436c-.015 1.057.943 2.029 1.999 2.029s2.014-.972 1.999-2.029V29.975l14.773-6.499zm-79.957.031l37.98 16.655v42.745L4.045 66.252V23.507z" />
  </svg>
);

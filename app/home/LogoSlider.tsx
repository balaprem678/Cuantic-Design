"use client";

import { Images } from '@/components/utilis/Images';
import "./LogoSlider.scss";

const logos = [
  Images.clients_1,
  Images.clients_2,
  Images.clients_3,
  Images.clients_4,
  Images.clients_5,
  Images.clients_6,
  Images.clients_7,
  Images.clients_8,
  Images.clients_9,
  Images.clients_10,
  Images.clients_11,
  Images.clients_12,
  Images.clients_13,
  Images.clients_14,
  Images.clients_15,
  Images.clients_16,
  Images.clients_17,
];

const topLogos = [...logos, ...logos];
const bottomLogos = [...logos].reverse();
const bottomLoop = [...bottomLogos, ...bottomLogos];

export default function LogoSlider() {
  return (
    <section className="logo-slider">
      <div className="logo-slider__row logo-slider__row--top">
        <div className="logo-slider__track">
          {topLogos.map((logo, index) => (
            <div className="logo-slider__item" key={`top-${index}`}>
              <img src={logo.src} alt={`Partner logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="logo-slider__row logo-slider__row--bottom">
        <div className="logo-slider__track">
          {bottomLoop.map((logo, index) => (
            <div className="logo-slider__item" key={`bottom-${index}`}>
              <img src={logo.src} alt={`Partner logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
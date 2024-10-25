'use client';

import { useEffect } from 'react';

import AOS from 'aos';

import 'aos/dist/aos.css';
import useDeviceDetection from 'hooks/useDeviceDetection';

export const AOSInit = () => {
  const { isMobile } = useDeviceDetection();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: isMobile,
    });
  }, [isMobile]);

  return null;
};

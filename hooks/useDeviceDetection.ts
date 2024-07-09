import { useEffect, useState } from 'react';

interface DeviceState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useDeviceDetection = (): DeviceState => {
  const [devices, setDevices] = useState<DeviceState>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) {
        setDevices({ isMobile: true, isTablet: false, isDesktop: false });
      } else if (isTablet) {
        setDevices({ isMobile: true, isTablet: true, isDesktop: false });
      } else {
        setDevices({ isMobile: false, isTablet: false, isDesktop: true });
      }
    };

    handleDeviceDetection();
    window.addEventListener('resize', handleDeviceDetection);

    return () => {
      window.removeEventListener('resize', handleDeviceDetection);
    };
  }, []);

  return devices;
};

export default useDeviceDetection;

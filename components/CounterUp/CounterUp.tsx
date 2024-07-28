'use client';

import { useState } from 'react';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

interface CounterUpProps {
  count: number;
  time: number;
}

const CounterUp = ({ count, time }: CounterUpProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (isVisible: boolean) => {
    setIsVisible(isVisible);
  };

  return (
    <div>
      <VisibilitySensor onChange={onVisibilityChange}>
        <div>
          <CountUp end={isVisible ? count : 0} duration={time} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default CounterUp;

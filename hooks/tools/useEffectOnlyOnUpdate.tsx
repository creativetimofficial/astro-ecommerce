/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, useEffect, useRef } from 'react';

export const useEffectOnlyOnUpdate = (
  callback: (deps: DependencyList) => void,
  dependencies: DependencyList
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      callback(dependencies);
    } else {
      didMount.current = true;
    }
  }, dependencies);
};

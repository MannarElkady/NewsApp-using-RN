import {
  Appearance,
  ColorSchemeName,
  NativeEventSubscription,
} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import {getOSMode} from '.';

//to get the os preferred theme
export default function useColorScheme(
  delay = 0,
): NonNullable<ColorSchemeName> {
  const [colorScheme, setColorScheme] = useState(getOSMode());
  let apperanceListner: NativeEventSubscription;

  let timeout = useRef<NodeJS.Timeout | null>(null).current;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    apperanceListner = Appearance.addChangeListener(onColorSchemeChange);

    return () => {
      resetCurrentTimeout();
      apperanceListner.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onColorSchemeChange(preferences: Appearance.AppearancePreferences) {
    resetCurrentTimeout();

    timeout = setTimeout(() => {
      setColorScheme(preferences.colorScheme);
    }, delay);
  }

  function resetCurrentTimeout() {
    if (timeout) {
      clearTimeout(timeout);
    }
  }

  return colorScheme as NonNullable<ColorSchemeName>;
}

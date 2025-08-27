import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDencrypt } from "use-dencrypt-effect";

const DecryptText = ({
    values = ['Empty'],
    delay = 3000
}) => {
  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    if (!values || values.length === 0) return;

    let i = 0;
    dencrypt(values[i]);

    const action = setInterval(() => {
      i = (i + 1) % values.length;
      dencrypt(values[i]);
    }, delay);

    return () => clearInterval(action);
  }, [values, delay, dencrypt]);  // 👈 Include dependencies

  return <>{result || values[0]}</>;
};

DecryptText.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  delay: PropTypes.number
};

export default DecryptText;

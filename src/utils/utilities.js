import * as Icon from 'react-feather';

export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj || {}));
}

export function onGenerateIcon(icon) {
  if (icon) {
    let CustomTag = Icon[icon];

    return (
      <span className='first-icon'>
        <CustomTag />
      </span>
    );
  }
}

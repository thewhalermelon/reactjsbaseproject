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

export function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
}

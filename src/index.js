import _ from 'lodash';
// import standalone from 'deepdash/standalone'; // doesn't work by design, no default export, import {methods} explicitly
// import standalone from 'deepdash-es/standalone'; // doesn't work by design, no default export, import {methods} explicitly
// import { mapValuesDeep } from 'deepdash'; // doesn't work by design, deepdash is a function to mixin into Lodash
// import { mapValuesDeep } from 'deepdash-es'; // doesn't work by design, deepdash is a function to mixin into Lodash
// import { mapValuesDeep } from 'deepdash/standalone'; // works in v5.3.7
import { mapValuesDeep } from 'deepdash-es/standalone'; // works in v5.3.7
// import mapValuesDeep from 'deepdash/mapValuesDeep'; // works in v5.3.7 - standalone method same as above
// import mapValuesDeep from 'deepdash-es/mapValuesDeep'; // doesn't work yet (will be back in v5.3.7), use import { mapValuesDeep } from 'deepdash-es/standalone'

function component() {
  const element = document.createElement('div');
  const data = { a: 'a', b: 'b' };

  element.innerHTML = _.join(
    [
      'Hello',
      'webpack',
      JSON.stringify(
        mapValuesDeep(data, (v) => v.toUpperCase(), { leavesOnly: true })
      ),
    ],
    ' '
  );

  return element;
}

document.body.appendChild(component());

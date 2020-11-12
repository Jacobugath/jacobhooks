# jhooks

> handy react hooks

[![NPM](https://img.shields.io/npm/v/jhooks.svg)](https://www.npmjs.com/package/jhooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save jhooks
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'jhooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [Jacobugath](https://github.com/Jacobugath)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).

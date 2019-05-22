React UserMedia
================
[![Build Status](https://travis-ci.org/vardius/react-user-media.svg?branch=master)](https://travis-ci.org/vardius/react-user-media)
[![npm version](https://img.shields.io/npm/v/react-user-media.svg)](https://www.npmjs.com/package/react-user-media)
[![npm downloads](https://img.shields.io/npm/dm/react-user-media.svg)](https://www.npmjs.com/package/react-user-media)
[![license](https://img.shields.io/github/license/vardius/react-user-media.svg)](LICENSE)
[![codecov](https://codecov.io/gh/vardius/react-user-media/branch/master/graph/badge.svg)](https://codecov.io/gh/vardius/react-user-media)

<details>
  <summary>Table of Content</summary>

<!-- toc -->
- [About](#about)
- [How to use](#how-to-use)
  - [Installation](#installation)
  - [Examples](#examples)
    - [Hook](#hook)
    - [Context](#context)
      - [Context Hook](#context-hook)
      - [HOC](#hoc)
- [License](#license)
<!-- tocstop -->

</details>

ABOUT
==================================================
React wrapper for getUserMedia.

Contributors:

* [Rafał Lorenz](http://rafallorenz.com)

Want to contribute ? Feel free to send pull requests!

Have problems, bugs, feature ideas?
We are using the github [issue tracker](https://github.com/vardius/react-user-media/issues) to manage them.

<!-- ![Dashboard](../master/.github/kubernetes-dashboard-overview.png)
![Dashboard](../master/.github/kubernetes-dashboard-pods.png) -->

HOW TO USE
==================================================

1. [Chat Example](https://github.com/vardius/react-webrtc-chat)

## Getting started
### Installation
```bash
npm install @vardius/react-user-media
```
### Examples
Use `useUserMedia` hook to request user media from navigator.
#### Hook
```javascript
import React from 'react';
import { UserMediaError, useUserMedia } from '@vardius/react-user-media';

function App() {
  const { stream, error } = useUserMedia({ audio: true, video: true });

  if (error) {
    return (
      <UserMediaError error={error} />
    );
  }

  return (
    <video autoPlay ref={video => { video.srcObject = stream }} />
  );
}

export default App;
```
#### Context
Use `UserMediaProvider` to request user media from navigator and pass it down with context.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { UserMediaProvider } from '@vardius/react-user-media';

import App from './App';

ReactDOM.render(
    <UserMediaProvider constraints={{ audio: true, video: true }}>
        <App />
    </UserMediaProvider>,
    document.getElementById("root")
);
```
you can access context user media value in two ways:
##### Context Hook
```javascript
import React from 'react';
import { UserMediaError, useUserMediaFromContext } from '@vardius/react-user-media';

function App() {
  const { stream, error } = useUserMediaFromContext();

  if (error) {
    return (
      <UserMediaError error={error} />
    );
  }

  return (
    <video autoPlay ref={video => { video.srcObject = stream }} />
  );
}

export default App;
```
##### HOC
```javascript
import React from 'react';
import { UserMediaError, withUserMedia } from '@vardius/react-user-media';

function App({ userMedia }) {
  const { stream, error } = userMedia;

  if (error) {
    return (
      <UserMediaError error={error} />
    );
  }

  return (
    <video autoPlay ref={video => { video.srcObject = stream }} />
  );
}

export default withUserMedia(App);
```

License
-------

This package is released under the MIT license. See the complete license in the package:

[LICENSE](LICENSE.md)

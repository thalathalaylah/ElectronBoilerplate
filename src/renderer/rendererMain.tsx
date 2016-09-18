/// <reference path="../../typings/index.d.ts" />
import * as React from 'react'
import * as ReactDom from 'react-dom'
import Component = require('./component/root.tsx');

ReactDom.render(<Component.Root />, document.getElementById('root'));

import React from 'react'
import { render } from 'react-snapshot'

import './css/normalize.css'
import './css/base.css'
import './css/print.css'
import './fonts/font-awesome.min.css'

import CV from './CV'

import linkifyAnchors from './util/linkify-anchors'
import trackPageView from './util/google-analytics'

render(
    <CV />,
    document.getElementById('root'),
    linkifyAnchors
)

trackPageView()

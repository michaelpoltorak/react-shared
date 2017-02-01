import * as React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

var isDev = process.env.NODE_ENV !== 'production';
var DevTools = createDevTools(
    <DockMonitor defaultIsVisible={false} toggleVisibilityKey="ctrl-h" 
                changePositionKey="ctrl-q">
            <LogMonitor theme="tomorrow" />
  </DockMonitor>
)
export default DevTools;

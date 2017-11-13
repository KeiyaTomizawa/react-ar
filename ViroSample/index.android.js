/**
 * Copyright (c) 2015-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {
  ViroSceneNavigator,
} from 'react-viro';

var InitialScene = require('./js/HelloWorldScene');

export default class ViroSample extends Component {
  render() {
    return (
      <ViroSceneNavigator apiKey="96BA1533-8193-4724-B19F-127ED7B4A309"
        initialScene={{scene: InitialScene}}
        />
    );
  }
}

AppRegistry.registerComponent('ViroSample', () => ViroSample);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => ViroSample);


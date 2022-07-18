import React from 'react';
import { AntIcon } from './ant-icon';

export const DefaultIcon = () => (
  <AntIcon />
);

export const RetweetIcon = () => (
  <AntIcon name="retweet" color="orange"/>
);

export const LargeRetweetIcon = () => (
  <AntIcon name="retweet" size={100} color="orange"/>
);

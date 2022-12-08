import { MainRuntime } from '@teambit/cli';
import { UIRuntime } from '@teambit/ui';
import { ComponentUI, ComponentAspect } from '@teambit/component';
import { SnackAspectAspect } from './snack-aspect.aspect';
import type { LinkProps } from '@teambit/base-react.navigation.link';
import * as React from "react";
import {Snacks} from "./snack";

export class SnackAspectMain  extends React.Component<any>  {
  static slots = [];
  static dependencies = [ComponentAspect];
  static runtime = UIRuntime;
  static async provider([component]: [ComponentUI]) {
    component.registerRoute({
      element: <Snacks />,
      path: '~snacks'
    });

    component.registerNavigation({
      href: '~snacks',
      children: 'Snacks',
      order: 10
    } as LinkProps);

    return new SnackAspectMain(component);
  }
}

SnackAspectAspect.addRuntime(SnackAspectMain);

export default SnackAspectMain;

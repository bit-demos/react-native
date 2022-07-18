# React Native Example Workspace

This workspace contains examples for using react native with Bit. The core Bit react-native env `teambit.react/react-native` should support the vast majority of react-native use-cases, and all the example components in this workspace currently use this core env. 

We have also included a custom env - created by simply running `bit create react-native-env envs/my-react-native` (where `envs` is just a namespace for the new env components), to demonstrate what a custom env looks like if you do need to customize any of the built-in react-native tooling configs; even though the examples in this repo do not require any customizations to run.

To see the components in this repo, run the following commands after cloning the repo.
```bash
bit install
bit compile
bit start
```

## What's included

- **React-native-vector-icons**

A simple component implementing the AndDesign subset of react-native-vector-icons, to illustrate how the `react-native-vector-icons` library should be used with components.

Note the bringing in of the icon set via css - this can be done in a variety of ways, we have chosen a regular css configuration for the sake of simplicity.


- **Custom React Native Env**

A simple custom react-native env, with in-built customization syntaxes (currently commented out) to demonstrate how a custom react-native env works. 

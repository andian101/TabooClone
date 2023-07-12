import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

type LayoutProps = PropsWithChildren<{
  title: string;
}>;

function Layout({children}: LayoutProps): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}

export default Layout;

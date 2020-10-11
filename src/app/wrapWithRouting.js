import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import pages from 'pages';

const Tab = createBottomTabNavigator();

export default function WrapWithRouting() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {pages.map((Page) => {
          return (
            <Tab.Screen
              key={Page.name}
              name={Page.name}
              component={Page}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

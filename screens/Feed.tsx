import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabViewVertical,TabBarVertical} from 'react-native-tab-view-vertical';
const Screen = (props) => {

  const _renderTabs = (landscape: boolean, otherProps: SceneRendererProps): Element<*> => {
    // const SelectedTabBar = landscape ? TabBarVertical : TabBar;
    return (
      <TabBarVertical
        {...otherProps}
        renderLabel={this._renderLabelFactory(otherProps)}
        renderIcon={this._renderIconFactory(otherProps)}
        style={styles.tabbar}
        tabStyle={styles.tab}
        indicatorStyle={styles.indicator}
        scrollEnabled
      />
    );
  };

  return (
    <TabViewVertical
    initialLayout={initialLayout}
    renderTabBar={this._renderTabs}
    style={styles.container}
    navigationState={this.state}
    renderScene={this._renderScene}
    onIndexChange={this._handleIndexChange}
  />
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDECED'
  },
  tabbar: {
    backgroundColor: '#205493'
  },
  tab: {
    width: 110,
    height: 80
  },
  icon: {
    backgroundColor: 'transparent'
    color: '#ffffff'
  },
  indicator: {
    width: 110,
    height: 80,
    backgroundColor: '#F6F7F8'
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Source Sans Pro',
    paddingTop: 5,
    color: '#F6F7F8',
    backgroundColor: 'transparent'
  }
});

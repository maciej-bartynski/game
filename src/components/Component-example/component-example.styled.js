import { StyleSheet } from 'react-native';
import styled from 'utils/styled';
import ComponentExample from './component-example.interface';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },

  somestyle: {

  }
});

export default styled(styles)(ComponentExample);

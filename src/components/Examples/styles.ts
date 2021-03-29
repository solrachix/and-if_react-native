import styled from 'styled-components/native';

import StyleGuide from '../../styles/StyleGuide';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 32,
  },
}))`
  flex: 1;

  background-color: ${StyleGuide.palette.background};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  padding: 20px;

  justify-content: center;

  margin-bottom: 2px;
`;

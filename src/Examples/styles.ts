import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  background-color: transparent;
`

export const Thumbnail = styled.View`
  background-color: ${props => props.theme.colors.background.darker};

  padding: ${props => props.theme.spacing * 2}px;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.background.light};
`

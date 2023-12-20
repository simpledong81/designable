import React from 'react'
import { useTheme } from '@rapid/designable-react'
import logoDark from './logo/rapid-color.svg'
import logoLight from './logo/rapid-black.svg'
import packageJson from '../../package.json'

const logo = {
  dark: logoDark,
  light: logoLight,
}

export const LogoWidget: React.FC = () => {
  const url = logo[useTheme()]
  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: 14 }}>
      <img src={url} style={{ margin: '0 8px', height: 32, width: 'auto' }} />{' '}
      <span>v{packageJson.version}</span>
    </div>
  )
}

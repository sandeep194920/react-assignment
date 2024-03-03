import React from 'react'
import UpVoteIcon from '../assets/arrow-up.svg?react'
import PlusIcon from '../assets/plus.svg?react'

// Define specific props for the 'plus' icon type
type PlusIconProps = {
  iconType: 'plus'
}

// Define specific props for the 'vote' icon type
type VoteIconProps = {
  variant?: 'default' | 'selected'
  iconType: 'vote'
}

// Define common props for all icon types
type CommonIconProps = {
  onClick?: () => void
  size?: 'small'
}

// Create a discriminated union type for all icon types
type IconProps = (VoteIconProps | PlusIconProps) & CommonIconProps

const Icon: React.FC<IconProps> = ({ iconType, ...props }) => {
  const { onClick } = props

  switch (iconType) {
    case 'plus':
      return (
        <PlusIcon
          onClick={onClick}
          className={`icon icon-default ${
            props?.size === 'small' && `icon-small`
          }`}
          {...props} // passing down the props if any for future use cases
        />
      )
    case 'vote': {
      const { variant = 'default' } = props as VoteIconProps
      return (
        <UpVoteIcon
          onClick={onClick}
          className={`icon icon-${variant}`}
          {...props} // passing down the props if any for future use cases
        />
      )
    }
    default:
      throw new Error(`Unsupported icon type: ${iconType}`)
  }
}

export default Icon

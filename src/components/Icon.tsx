import React from 'react'
import UpVoteIcon from '../assets/arrow-up.svg?react'
import PlusIcon from '../assets/plus.svg?react'

// Define specific props for the 'vote' icon type
type PlusIconProps = {
  iconType: 'plus'
}

// Define specific props for the 'vote' icon type
type VoteIconProps = {
  variant?: 'default' | 'selected'
  iconType: 'vote'
}

// Create a discriminated union type for all icon types
type IconProps = VoteIconProps | PlusIconProps

const Icon: React.FC<IconProps> = ({ iconType, ...props }) => {
  switch (iconType) {
    case 'plus':
      return <PlusIcon className={`icon icon-default`} {...props} />
    case 'vote': {
      const { variant = 'default' } = props as VoteIconProps
      return <UpVoteIcon className={`icon icon-${variant}`} />
    }
    default:
      throw new Error(`Unsupported icon type: ${iconType}`)
  }
}

export default Icon

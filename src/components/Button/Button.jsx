import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './Button.module.scss'

function Button({
  children,
  className = '',
  outline = false,
  rounded = false,
  variation = 'primary',
  ...rest
}) {
  const classNames = cn(
    'flex',
    'items-center',
    'm-1',
    'px-3',
    'py-1.5',
    'border',
    'font-semibold',
    'text-lg',
    'shadow-md',
    'hover:shadow-none',
    {
      'border-blue-500 bg-blue-500 text-white':
        variation === 'primary' && !outline,
      'border-green-500 bg-green-500 text-white':
        variation === 'success' && !outline,
      'border-yellow-500 bg-yellow-500 text-white':
        variation === 'warning' && !outline,
      'border-red-500 bg-red-500 text-white':
        variation === 'danger' && !outline,
      'border-black bg-black text-white': variation === 'neutral' && !outline,
      'border-blue-500 bg-white text-blue-500':
        variation === 'primary' && outline,
      'border-green-500 bg-white text-green-500':
        variation === 'success' && outline,
      'border-yellow-500 bg-white text-yellow-500':
        variation === 'warning' && outline,
      'border-red-500 bg-white text-red-500': variation === 'danger' && outline,
      'border-black bg-white text-black': variation === 'neutral' && outline,
    },
    {
      'rounded-full': rounded,
    },
    className,
    styles.button
  )

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  variation: PropTypes.string,
  rest: PropTypes.any,
}

export default Button

import cn from 'classnames'

function Panel({ children, className = '', ...rest }) {
  const classNames = cn(
    'flex justify-between items-center w-full px-4 py-3 text-left',
    className
  )
  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  )
}

export default Panel

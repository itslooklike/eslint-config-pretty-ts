export const ButtonForm: React.FC<React.ComponentProps<`button`>> = (properties) => {
  const { children, className, ...rest } = properties

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  )
}

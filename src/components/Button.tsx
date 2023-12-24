interface Props{
    onClick: () => void;
}

const Button = ({onClick}:Props) => {
  return (
    <div className=' btn btn-primary' onClick={onClick}>Button</div>
  )
}

export default Button
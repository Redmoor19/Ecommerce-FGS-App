type LoaderProps = {
  size?: number
}

const Loader = ({ size }: LoaderProps) => {
  return (
    <div className="h-full w-full flex justify-center align-center">
      <img alt="Loading" src="/loading.gif" style={{ height: size, width: size }} />
    </div>
  )
}

export default Loader

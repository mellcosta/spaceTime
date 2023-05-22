const styles = {
  color: '#f00',
}

interface ButtonProps{
  title: string
}

export default function Button(props: ButtonProps) {
  return(
    <div style={{color:'#dd8'}}>
      <h1 style={styles}>Button</h1>
      {props.title}
    </div>
  )
}
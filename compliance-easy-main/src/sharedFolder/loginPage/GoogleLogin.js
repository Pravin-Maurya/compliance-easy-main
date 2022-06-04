import GoogleButton from 'react-google-button'

const GoogleLogin=()=>{

  const handleGoogle=()=>{
    window.open("http://localhost:5000/auth/google", "_self");
  }

  return(
    <GoogleButton onClick={handleGoogle} />
  )
}
export default GoogleLogin
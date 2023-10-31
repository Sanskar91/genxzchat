import axios from 'axios'
const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(
        'http://localhost:3001/authenticate',
        {username: value}
        ).then(r=>props.onAuth({ ...r.data, secret:value}))
        .catch(e => console.log('error',e))
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
           
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
        <div className="image-container">
          <img src="../src/assets/logogenxz.png" alt="logo" style={{height:"500px",width:"500px",position:"absolute",top:"4%",right:"7%"}} />
        </div>
      </div>
    );
  };
  
  export default AuthPage;
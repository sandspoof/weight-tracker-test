import './loginForm.css';
import FormValues from "../Login.model";

type FormProps = {
    data: FormValues,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: () => void
}

const LoginForm = ({ data, onChange, onSubmit }: FormProps) => {
    return (
        <div className="login-form">
            <div className="form-group">
                <label>Username</label>
                <input title="userName" value={data.userName} onChange={(e) => onChange(e)} placeholder="Type here..."/>

            </div>
            
            <div className="form-group">
                <label className='p-4'>Password</label>
                <input type="password" title="password" value={data.password} onChange={(e) => onChange(e)} placeholder="Type here..."/>
            </div>

            <button title="Add" onClick={onSubmit}>Sign In</button>
        </div>
    )
}

export default LoginForm;
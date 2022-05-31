import { Navigate, useLocation, useNavigate } from "react-router-dom";

function Login({ loggedIn, setLoggedIn }: {loggedIn?: boolean; setLoggedIn: (loggedIn: boolean) => void }) {
    const state = useLocation().state as { from: string | undefined };
    const from = state?.from ?? '/';
    const navigate = useNavigate();

    if(loggedIn) {
        return <Navigate to={from} replace />
    }

  return (
    <button onClick={() => {setLoggedIn(true); navigate(from, {
        replace: true
    })}}>
        Login
    </button>
  )
}

export default Login
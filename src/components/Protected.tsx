import React from "react"
import { Navigate, useLocation } from "react-router-dom"

function Protected({ children, loggedIn }: { loggedIn?: boolean, children: React.ReactNode }): React.ReactElement {
    const state = useLocation().state as { from: string | undefined };
    const from = state?.from ?? '/';

    if(!loggedIn){
        return <Navigate to={"/login"} state={{ from }} replace />
    }

  return (
     <>
        { children }
     </> 
  )
}

export default Protected
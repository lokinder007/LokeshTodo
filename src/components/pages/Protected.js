import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Protected = (props) => {
  let Cmp = props.cmp
  
    const history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem('user-login')) {
            history.push("/register");
        }
    },[history])

    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Protected

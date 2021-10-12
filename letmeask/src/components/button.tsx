import {  ButtonHTMLAttributes } from 'react'
/* I do this import for use an type for html attributes in my props  */
import '../styles/button.scss'

/* The type imported being used */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps){
    return(
        <button className="button" {...props} />
    )
}
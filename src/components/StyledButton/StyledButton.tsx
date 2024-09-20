import styled from "@emotion/styled"
import { ReactNode } from "react"

interface StyledButtonProps{
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

    const StyledButton = styled("button")(() => ({
        backgroundColor: "transparent",
        border: '1px solid ${theme.palette.primary.contrastText}',
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: '10px',
        '&:hover': {
            backgroundColor: "green",
        }
    }))

    return (
      <>
        <StyledButton>{children}</StyledButton>
      </>
    )
  }
  
  export default StyledButton
  
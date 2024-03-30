import { createTheme, styled } from "@mui/material";


export const theme = createTheme({
    components:{
        MuiAppBar:{
            styleOverrides:{
                root:{
                    backgroundColor:'white',
                    boxShadow:'none'
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    color:'black'
                }
            }
        }
    }
})

export const Logo = styled('img')(({theme})=>({
    width:'10vw',
    height:'6vw'
}))
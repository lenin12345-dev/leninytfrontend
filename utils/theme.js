import { createTheme } from '@material-ui/core/styles';
// Create a theme instance.
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 436,
            sm: 720,
            md: 992,
            lg: 1280,
            xl: 1980
        }
    },
    palette: {
        // primary: {
        //     main:Config.app_config.app_primary_color
        // },
        // secondary: {
        //     main:Config.app_config.app_secondary_color
        // },
        background: {
            default: '#f9f9f9',
            level1: '#fff',
            level2: '#f5f5f5',
            paper: '#fff',
            PattensBlue:'#dce8ff'
        },
        comment: {
            main: '#a0b8d0'
        },
        common: {
            success: {
                main: '#0FD572'
            },
            info: {
                main: '#00b8d8'
            },
            warning: {
                main: '#ffb400'
            },
            disabled: {
                main: '#D8D8D8'
            },
            light: {
                main: '#e9ecef'
            },
            dark: {
                main: '#212529'
            },
            grey: {
                main: '#d9d9d9'
            },
            darkGrey: {
                main: '#363d40'
            },
            blue: 'blue',
            red: {
                main: '#F23D3D'
            },
            orange: {
                main: '#FF8C00'
            },
            Purple: {
                main: '#EE82EE'
            },
            lecturenotesBlue: {
                main:'#0f267b'
            },
            primeHeading: {
                main:'#163962'
            },
            primeSubHeading: {
                main:'#555555'  
            },
            primeCountBackground: {
                main:'#2e6cc3'
            },
            primeLandingCard: {
                main:'#173861'
            },
            black:{
                main:'#2a2929'
            },
            cornflowerBlue:{
                main:'#6692F1'
            },
            shamrock:{
                main:'#2DE08A'
            },
            treePoppy:{
                main:'#fba018'
            },
            prime:{
                main:'#feda78',
                dark:'#ece38b'
            },
            free:{
                main:'#6bc108'
            },
            classroom:{
                main:'#13c16a'
            },
            lectures:{
                main:'#EF4C4C'
            },
            assignment:{
                main:'#02B3E4'
            },
            quiz:{
                main:'#3FC844'
            },
            student:{
                main:'#166ee2'
            },
            refer:{
                main:'#2e577e',
                text:'#3a6b99',
            },
            teacher:{
                main:'#ff6363'
            },
            upload:{
                main:'#0a86fb'
            },
            link:{
                main:'#2a94dc'
            }
        },
        facebook:{
            main: '#4568b2',
            dark: '#2f4173',
        },
        google:{
            main: '#ea4335',
            dark: '#a6362c',
        },
    },
    nprogress: {
        color: '#102b45'
    },
    status: {
        danger: 'orange',
    },
    typography: {
        htmlFontSize: 18,
        fontFamily: 'MyriadPro',
        h1: {
            
            fontSize: '2.2rem',
            lineHeight: 1.2,
            
        },
        h2: {
           
            fontSize: '1.8rem',
            lineHeight: 1.2,
            
        },
        h3: {
            
            fontSize: '1.5rem',
            lineHeight: 1.2,
          
        },
        h4: {
            
            fontSize: '1.2rem',
            lineHeight: 1.2,
            
        },
        h5: {
         
            fontSize: '1rem',
            lineHeight: 1.2,
            
        },
        h6: {
            
            fontSize: '.8rem',
            lineHeight: 1.2,
           
        },
        body1: {
            fontSize: '12px',
            lineHeight: '1.5',
            
        },
        button: {
            textTransform: 'initial',
        }
    },
    drawerWidth: 300,
    mixins: {
        toolbar: {
            minHeight: 42,
            '@media (min-width:0px) and (orientation: landscape)': {minHeight: 38},
            '@media (min-width:600px)': {minHeight: 50}
        }
    },
   

    overrides: {
        MuiCssBaseline: {
            '@global': {
                fontFamily: 'MyriadPro',
            },
        },
        MuiPaper:{
            elevation1: {
                boxShadow: '5px 5px 20px 0px rgba(86, 86, 86, 0.07)'
            }
        },
        MuiAppBar: {
            root: {
                backgroundColor: '#FFFFFF'
            },
            colorDefault: {
                backgroundColor: '#FFFFFF'
            }
        },
        MuiButton: {
            root: {
                borderRadius: 25,
                textDecoration: 'none !important',
            }
        },
        MuiDrawer:{
            paper:{
                top: 'unset'
            },
            paperAnchorDockedLeft:{
                borderRight: 'unset'
            }
        },
        MuiSwitch:{
            track:{
                backgroundColor:'#000'
            }
        }
       
    }
});


export default theme;

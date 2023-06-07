import { Box, Divider, Tooltip, Typography } from "@mui/material";
import { ILoginData } from "../../../api/api";
import { Logout } from "@mui/icons-material";

export function UserInfo() {

    const userInfo = JSON.parse(localStorage.getItem('auth')!) as ILoginData

    function logout() {
        localStorage.removeItem('auth')
        window.location.reload()
    }

    return (
        <Box
            height="72px"
            p={2}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            bgcolor={'var(--panel-header-background)'}
            width="100%"
            sx={{
                borderBottom: '1px solid rgba(0,0,0,0.15)'
            }}
        >
            <Tooltip title={"Выйти"}>
                <Logout
                    onClick={logout}
                    fontSize="large"
                    sx={{
                        cursor: 'pointer',
                        color: 'var(--main)'
                    }}
                />
            </Tooltip>
            {
                userInfo &&
                <>
                    <Box>
                        <Typography>
                            idInstance
                        </Typography>
                        <Typography>{userInfo?.idInstance}</Typography>
                    </Box>
                    <Box>
                        <Typography
                            align="right"
                        >
                            apiTokenInstance
                        </Typography>
                        <Typography
                            maxWidth={'200px'}
                            sx={{
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: "ellipsis"
                            }}
                            align="right"
                        >
                            {userInfo?.apiTokenInstance}
                        </Typography>
                    </Box>

                </>
            }

        </Box>
    )
}
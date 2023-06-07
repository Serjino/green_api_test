import { Box } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import { Search } from '@mui/icons-material'

interface IContactSearch {
    searchContactByName: (searchName: string) => void
}

export function ContactSearch(props: IContactSearch) {

    const { searchContactByName } = props

    return (
        <Box>
            <TextField
                size="small"
                fullWidth
                placeholder="Введите наименование контакта"
                InputProps={{
                    startAdornment: <Search sx={{ mr: 2 }} />,
                    sx: {
                        backgroundColor: ('var(--panel-header-background)')
                    }
                }}
                sx={{
                    p: 2
                }}
                onChange={(e) => searchContactByName(e.target.value)}
            />
        </Box>
    )
}
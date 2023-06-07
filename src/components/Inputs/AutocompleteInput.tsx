import { AutocompleteProps, Autocomplete, MenuItem } from "@mui/material"
import { TextInput } from "./TextInput"
import { IValidatableInputProps } from "./z.def"

interface IAutocompleteProps extends Omit<AutocompleteProps<any, undefined, boolean, undefined>, 'renderInput'>, IValidatableInputProps {
}

export function AutocompleteInput(props: IAutocompleteProps) {

    const { options, fieldName, validation } = props

    return (
        <Autocomplete
            disableClearable
            fullWidth
            disablePortal
            noOptionsText={'Нет значений'}
            sx={{
                zIndex: 2,
                ".MuiAutocomplete-endAdornment": {
                    svg: {
                        fontSize: "24px",
                    }
                },
            }}
            renderOption={(props, option) => <MenuItem {...props}>{option.value}</MenuItem>}
            loading={props.options == null}
            loadingText="Загрузка"
            renderInput={(props) => (
                <TextInput
                    {...props}
                    fieldName={fieldName}
                    validation={validation}
                    sx={{
                        ".MuiInputBase-root": {
                            // paddingY: theme.spacing(1),
                            padding: "0px !important"
                        },
                        "input": {
                        }
                    }}
                />
            )}
            {...props}
        />
    )
}
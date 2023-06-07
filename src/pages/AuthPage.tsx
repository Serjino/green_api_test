import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import { FEInputWrapper } from "../components/FormComponents/FEInputWrapper";
import { FELabel } from "../components/FormComponents/FELabel";
import { FormElement } from "../components/FormComponents/FormElement";
import { FormSection } from "../components/FormComponents/FormSection";
import { FormWrapper } from "../components/FormComponents/FormWrapper";
import { TextInput } from "../components/Inputs/TextInput";
import { ILoginData } from "../api/api";

export function AuthPage() {

    const methods = useForm({
        mode: 'all'
    })

    const history = useHistory()

    function login(tokenData: ILoginData) {
        localStorage.setItem("auth", JSON.stringify(tokenData))
        history.replace('/chat')
        methods.reset()
    }

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Typography variant="h3" mb={2} color="primary">
                GreenAPI Test
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: 400,
                    gap: 2
                }}
            >
                <FormProvider {...methods}>

                    <FormWrapper onSubmit={login}>
                        <FormSection>
                            <FormElement>
                                <FELabel>
                                    Логин
                                </FELabel>
                                <FEInputWrapper
                                    size="large"
                                >
                                    <TextInput
                                        fieldName="idInstance"
                                    >

                                    </TextInput>
                                </FEInputWrapper>
                            </FormElement>
                            <FormElement>
                                <FELabel>
                                    Пароль
                                </FELabel>
                                <FEInputWrapper
                                    size="large"
                                >
                                    <TextInput
                                        fieldName="apiTokenInstance"
                                        type="password"
                                    >

                                    </TextInput>
                                </FEInputWrapper>
                            </FormElement>

                            <Button
                                variant="contained"
                                type="submit"
                            >
                                Авторизоваться
                            </Button>
                        </FormSection>



                    </FormWrapper>
                </FormProvider>
            </Box>
        </Box>
    )
}
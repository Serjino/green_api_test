import { Box, BoxProps, Divider, Typography } from "@mui/material";

interface IFormSectionProps extends BoxProps {
    label?: string | React.ReactNode,
    bottomDivider?: boolean,
    topDivider?: boolean
}

export function FormSection(props: IFormSectionProps) {

    const { label, children, topDivider, bottomDivider = true } = props

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={1.25}
            pt={2.5}
            pb={label ? 2.5 : 0}
            position={"relative"}
            sx={{
                "#formElementLabel": {
                    pl: 1.25
                },
            }}
            {...props}
        >

            {topDivider &&
                <Divider
                    sx={{
                        position: "absolute",
                        top: "0px",
                        width: "285px",
                        left: "calc(50% - 142.5px)",
                    }}
                />
            }

            {label &&
                <Typography
                    // color="defau"
                    variant="subtitle2"
                    mb={0.75}
                >
                    {label}
                </Typography>
            }

            {children}

            {label && bottomDivider &&
                <Divider
                    sx={{
                        position: "absolute",
                        bottom: "0px",
                        width: "285px",
                        left: "calc(50% - 142.5px)",
                    }}
                />
            }
        </Box>
    )
}
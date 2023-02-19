import {Stack, Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <Stack spacing={1}>
        <Typography variant='h1'>h1 heading</Typography>
        <Typography variant='h2'>h2 heading</Typography>
        <Typography variant='h3'>h3 heading</Typography>
        <Typography variant='h4'>h4 heading</Typography>
        <Typography variant='h5'>h5 heading</Typography>
        <Typography variant='h6'>h6 heading</Typography>

        <Typography variant='subtitle1'>Sub Title 1</Typography>
        <Typography variant='subtitle2'>Sub Title 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem optio rerum aut nisi, nemo assumenda dolores laboriosam in, omnis quae accusamus recusandae earum ipsum voluptatum dolorum doloribus ut ex quam!</Typography>
        <Typography variant='body2' gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente dicta odit illo tempora enim nisi dolores quod omnis, placeat sequi dolor architecto magni optio iure libero voluptatibus pariatur fugiat.</Typography>
    </Stack>
  )
}

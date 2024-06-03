import Rating from '@mui/material/Rating';
import * as React from 'react';

function RatingPage(){
    const [value, setValue] = React.useState(2);
    return(
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    )
}
export default RatingPage
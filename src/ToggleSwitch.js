import React from "react";
import {
  Box,
  FormGroup,
  withStyles,
  FormControlLabel
} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

// const useStyles = makeStyles(() =>
//     createStyles({

//     })
// )

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 28,
    height: 17,
    padding: 0,
    margin: theme.spacing(1),
    borderRadius: "28px"
  },
  switchBase: {
    padding: 1,
    // paddingTop: "1px",
    "&$checked": {
      transform: "translateX(11px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#81e598",
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
    //   backgroundColor: "#fff",
    //   border: "6px solid #fff"
    }
  },
  thumbLoader: {
    width: 15,
    height: 15,
    boxShadow: "none",
    boxSizing: "border-box",
    animation: "around 5s infinite",
    position: "relative",
    backgroundColor: '#fff',
    "&::after, &::before": {
      content: "''",
    //   padding: '5px',
    //   background: "transparent",
      position: "absolute",
      display: "inline-block",
      width: "100%",
      height: "100%",
      borderWidth: "1px",
      borderColor: "#2c66c3 #2c66c3 transparent transparent", 
      borderStyle: "solid",
      borderRadius: "20px",
      boxSizing: "border-box",
      top: 0,
      left: 0,
      animation: "$around 0.5s ease-in-out infinite"
    }
  },
  thumb: {
    width: 15,
    height: 15,
    boxShadow: "none",
    boxSizing: "border-box",
    backgroundColor: '#fff'
  },
  "@keyframes around": {
    "0%": {
      transform: "rotate(0deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  },
  track: {
    borderRadius: '28px',
    // border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: "#666678",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: props.loading ? classes.thumbLoader : classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

const IOSToggleSwitch = props => {
  return (
    <Box width="38px">
      <FormGroup>
        <FormControlLabel
          control={
            <IOSSwitch
              checked={props.checked}
              onChange={props.onChange}
              value="checkedB"
              loading={props.loading}
              disabled={props.loading}
            />
          }
        />
      </FormGroup>
    </Box>
  );
};

export default IOSToggleSwitch;

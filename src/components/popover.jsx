import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Popover from 'material-ui/Popover';

const styles = ({
  paper: {
    padding: '20px',
    width: '14vw',
  },
  popover: {
    pointerEvents: 'none',
  },
});

class MultiplePopover extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      anchorEl: null,
    };
    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);
  }
  handlePopoverOpen(event, popoverId) {
    this.setState({
      openedPopoverId: popoverId,
      anchorEl: event.target,
    });
  }
  handlePopoverClose() {
    this.setState({
      openedPopoverId: null,
      anchorEl: null,
    });
  }

  render() {
    const { classes } = this.props;
    const { anchorEl, openedPopoverId } = this.state;

    const multi = [
      {
        _id: 0,
        name: 'name1',
        hoverText: 'text1',
        linkUrl: '#',
      },
      {
        _id: 1,
        name: 'name2',
        hoverText: 'text2',
        linkUrl: '#',
      },
      {
        _id: 2,
        name: 'name3',
        hoverText: 'text3',
        linkUrl: '#',
      },
    ]

  console.log(openedPopoverId)

    return (
      <div className="wrapper">
        <ul>
          {multi.map(m => (
            <li
              key={m._id}
            >
              <Typography
                onMouseEnter={(e) => this.handlePopoverOpen(e, m._id)}
                onMouseLeave={this.handlePopoverClose}
              >
                {m.name} 
              </Typography>
              <Popover
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={openedPopoverId === m._id}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
              >
                <Typography>
                  <a
                    href="{m.linkUrl}"
                    target=" /blank"
                  >
                    {m.hoverText}
                  </a>
                </Typography>
              </Popover>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

MultiplePopover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MultiplePopover);
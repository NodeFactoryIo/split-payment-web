import React, { useRef, useEffect }  from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '3box';
import { Avatar } from '../../components/Avatar';

import { useOutsideClickHandler } from '../../utils/hooks';


export function AddressBook ({ visible, onClose, onSelectedItems }) {
  let className = 'address-book-container';
  className += visible ? ' active' : '';

  const [checked, setChecked] = React.useState([]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const beforeClose = () => {
    onSelectedItems(checked);
    onClose();
  };

  const wrapperRef = useRef(null);
  useOutsideClickHandler(wrapperRef, visible, beforeClose);

  const [profiles, setProfiles] = React.useState([]);

  useEffect(() => {
    // TODO: read addresses from props
    const addresses = ['0xAf0f557a9a7E84Bdd02aDBc14962df2789d95D4e'];
    const profiles = [];
    addresses.map(async(address) => {
      const fetchedProfile = await Box.getProfile(address);
      profiles.push({...fetchedProfile, address });
    });
    setProfiles(profiles);
  }, []);

  console.log(profiles);

  return (
    <List className={className} ref={wrapperRef}>
      {profiles.map(profile => {
        return (
          <ListItem key={profile.address} dense button>
            <ListItemAvatar>
              <Avatar imageHash={profile.image[0].contentUrl['/']}/>
            </ListItemAvatar>

            <ListItemText primary={profile.name} />

            <ListItemSecondaryAction>
              <Checkbox
                onClick={handleToggle(profile.address)}
                edge="start"
                checked={checked.indexOf(profile.address) !== -1}
                tabIndex={-1}
                disableRipple
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  )
}
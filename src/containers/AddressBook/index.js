import React from 'react';
import {SmallHeader} from "../../components/SmallHeader";
import {HOME, SPLIT_SUCCESS} from "../../routes";
import {AddressBook} from "../../components/AddressBook";
import Box from '3box';
import {ContactsButton} from "../../components/ContactsButton";

export class AddressBookContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        profiles: []
    }
  }

  componentWillMount() {
      const addresses = ["0x77E3630DEC288c9a477bC430c44d8507068a63D1", "0xbD9f96663E07a83ff18915c9074d9dc04d8E64c9"];
      Promise.all(
          addresses.map(async (address) => {
              try {
                  const fetchedProfile = await Box.getProfile(address);
                  return {...fetchedProfile, address };
              } catch (e) {
                  return {address};
              }
          })
      ).then((profiles) => {
          console.log('profiles', profiles);
          this.setState({profiles});
      })
  }

    goHome = () => {
    this.props.history.push(HOME);
  };

  sendNotifications = () => {
      this.props.history.push(SPLIT_SUCCESS);
  };

  getSubmitButton() {
     return (
         <ContactsButton count={2} onClick={this.sendNotifications}/>
     )
  }

  render() {
    return (
        <div>
          <SmallHeader title="Choose contacts" goHome={this.goHome} rightButton={this.getSubmitButton()}/>

          <div className="container">
            <AddressBook profiles={this.state.profiles}/>
          </div>
        </div>
    );
  }


}
import React from 'react';
import {SmallHeader} from "../../components/SmallHeader";
import {HOME, SPLIT_SUCCESS} from "../../routes";
import {AddressBook} from "../../components/AddressBook";
import Box from '3box';
import {ContactsButton} from "../../components/ContactsButton";
import {Requester, SplitWallet} from "@nodefactory/split-payment-sdk";
import { Web3Context } from '../../Web3Provider';

export class AddressBookContainer extends React.Component {
  static contextType = Web3Context;

  constructor(props) {
    super(props);
    this.state = {
        profiles: [],
        selectedProfiles: [],
    }
    this.onSelectedProfile = this.onSelectedProfile.bind(this);
  }

  componentWillMount() {
      // TODO: fetch from 3box the address book
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

  requestPayment = async (requester, from, to, amount) => {
    console.log(await requester.request([
      {
        from,
        to,
        amount,
        currency: "ETH"
      }
    ]));
  };

  calculateSplitAmount(numberOfAddresses) {
    const { value } = this.props.location.state;
    return value / (numberOfAddresses + 1);
  }

  sendNotifications = async () => {
    const { provider } = this.context;
    const { selectedProfiles } = this.state;
    const amount = this.calculateSplitAmount(selectedProfiles.length);

    const accounts = await provider.listAccounts();
    const requester = new Requester(accounts[0], window.ethereum);
    await requester.init();

    const promises = [];
    selectedProfiles.map((profile) =>
      promises.push(this.requestPayment(requester, accounts[0], profile.address, amount)));

    await Promise.all(promises);
    this.props.history.push(SPLIT_SUCCESS);
  };

  getSubmitButton() {
    const { selectedProfiles } = this.state;

     return (
         <ContactsButton count={selectedProfiles.length} onClick={this.sendNotifications}/>
     )
  }

  onSelectedProfile(address) {
    const { selectedProfiles } = this.state;
    const currentIndex = selectedProfiles.indexOf(address);
    const newSelectedProfiles = [...selectedProfiles];

    if (currentIndex === -1) {
      newSelectedProfiles.push(address);
    } else {
      newSelectedProfiles.splice(currentIndex, 1);
    }

    this.setState({ selectedProfiles: newSelectedProfiles });
  }

  render() {
    console.log(this.props);

    const { selectedProfiles } = this.state;

    return (
        <div>
          <SmallHeader
            title="Choose contacts"
            goHome={this.goHome}
            rightButton={this.getSubmitButton()}
          />

          <div className="container">
            <AddressBook
              onChecked={this.onSelectedProfile}
              profiles={this.state.profiles}
              selectedProfiles={selectedProfiles}
            />
          </div>
        </div>
    );
  }


}
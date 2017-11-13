import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { Permissions, Notifications, Constants } from 'expo';
import { connect } from 'react-redux';

import SnowIcon from '../ResortInfoCard/WeatherIcons/SnowIcon';

import { createUserDevice } from '../../actions/users';

import {
  mutateNotificationBannerUserPreference,
  NOTIFICATION_BANNER_USER_PREFERENCE,
} from '../../actions/userSession';

class NotificationBanner extends Component {
  constructor(props) {
    super(props);
    /* eslint-disable max-len */
    this.handleNotificationBannerUserPreferenceOKPress = this.handleNotificationBannerUserPreferenceOKPress.bind(this);
    this.handleNotificationBannerUserPreferenceNotNowPress = this.handleNotificationBannerUserPreferenceNotNowPress.bind(this);
    /* eslint-enable */
  }

  handleNotificationBannerUserPreferenceNotNowPress() {
    this.props.mutateNotificationBannerUserPreference(NOTIFICATION_BANNER_USER_PREFERENCE.NOT_NOW);
  }

  async handleNotificationBannerUserPreferenceOKPress() {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS,
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      this.props.mutateNotificationBannerUserPreference(NOTIFICATION_BANNER_USER_PREFERENCE.NO);
      return;
    }

    // Get the token that uniquely identifies this device
    const notificationToken = await Notifications.getExpoPushTokenAsync();

    const deviceName = Constants.deviceName;
    this.props.createUserDevice(deviceName, notificationToken);
    this.props.mutateNotificationBannerUserPreference(NOTIFICATION_BANNER_USER_PREFERENCE.YES);
  }

  render() {
    return (
      <TouchableHighlight
        hitSlop={{ top: 16, left: 16, bottom: 16, right: 20 }}
        underlayColor="transparent"
        onPress={() => {
          Alert.alert(
            'Snow Alerts',
            'Would you like to be notified when it snows in Tahoe?',
            [
              {
                text: 'Not Now',
                style: 'default',
                onPress: this.handleNotificationBannerUserPreferenceNotNowPress,
              },
              {
                text: 'OK',
                style: 'default',
                onPress: this.handleNotificationBannerUserPreferenceOKPress,
              },
            ],
          );
        }}
      >
        <View
          style={{
            backgroundColor: '#FF4991',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 12,
            paddingTop: 6,
            paddingBottom: 6,
          }}
        >
          <SnowIcon width={28} height={28} fill="#FFFFFF" />
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 16,
              paddingLeft: 6,
            }}
          >
            Activate Snow Alerts?
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = state => ({
  notificationBannerUserPreference: state.userSession.notificationBannerUserPreference,
});

const mapDispatchToProps = dispatch => ({
  createUserDevice: (deviceName, notificationToken) => {
    dispatch(createUserDevice(deviceName, notificationToken));
  },
  mutateNotificationBannerUserPreference: (status) => {
    dispatch(mutateNotificationBannerUserPreference(status));
  },
});

/* eslint-disable max-len */
const ConnectedNotificationBanner = connect(mapStateToProps, mapDispatchToProps)(NotificationBanner);
/* eslint-enable */

export default ConnectedNotificationBanner;

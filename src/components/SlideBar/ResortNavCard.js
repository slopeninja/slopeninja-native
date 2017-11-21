import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';

import { mutateFavoriteResorts } from '../../actions/favorites';

import ProgressBar from '../ProgressBar/ProgressBar';
import LightText from '../AdaptiveText/LightText';

import BorealLogo from '../ResortLogos/BorealLogo';
import DiamondLogo from '../ResortLogos/DiamondLogo';
import DonnerLogo from '../ResortLogos/DonnerLogo';
import HeavenlyLogo from '../ResortLogos/HeavenlyLogo';
import HomewoodLogo from '../ResortLogos/HomewoodLogo';
import KirkwoodLogo from '../ResortLogos/KirkwoodLogo';
import MtRoseLogo from '../ResortLogos/MtRoseLogo';
import NorthstarLogo from '../ResortLogos/NorthstarLogo';
import SierraLogo from '../ResortLogos/SierraLogo';
import SquawLogo from '../ResortLogos/SquawLogo';
import SugarLogo from '../ResortLogos/SugarLogo';

import BookmarkStrokeIcon from './BookmarkStrokeIcon';
import BookmarkIcon from './BookmarkIcon';

export const resortLogos = {
  boreal: BorealLogo,
  'diamond-peak': DiamondLogo,
  'donner-ski-ranch': DonnerLogo,
  heavenly: HeavenlyLogo,
  homewood: HomewoodLogo,
  kirkwood: KirkwoodLogo,
  'mt-rose': MtRoseLogo,
  northstar: NorthstarLogo,
  'sierra-at-tahoe': SierraLogo,
  'squaw-valley': SquawLogo,
  'alpine-meadows': SquawLogo,
  'sugar-bowl': SugarLogo,
};

const styles = StyleSheet.create({
  resortNavCard: {
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#EDEDED',
    height: 136,
    width: 324,
    flexDirection: 'row',
    position: 'relative',
  },
  resortLogoContainer: {
    marginTop: 18,
    marginLeft: 18,
    height: 60,
    width: 60,
  },
  image: {
    backgroundColor: 'grey',
    height: 60,
    width: 60,
  },
  resortInfoContainer: {
    margin: 18,
    marginBottom: 10,
    flex: 1,
  },
  resortTitleContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  resortName: {
    fontSize: 24,
  },
  resortSubText: {
    color: '#9B9B9B',
    fontSize: 16,
  },
  progressBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarInfo: {
    flex: 1,
  },
  processBarDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  bookmarkWrapper: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
});

const ResortBookmarkButton = ({
  resort,
  favorite,
  onFavoritePress,
  onResortClick,
}) => (
  <View style={styles.bookmarkWrapper}>
    <TouchableHighlight
      onPress={() => {
        if (!favorite) {
          onResortClick(resort);
        }
        onFavoritePress(resort.shortName, !favorite);
      }}
      hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
      underlayColor="transparent"
    >
      <View style={{ flex: 1 }}>
        {
          favorite ? (
            <BookmarkIcon />
          ) : (
            <BookmarkStrokeIcon />
          )
        }
      </View>
    </TouchableHighlight>
  </View>
);

const ResortNavCard = (props) => {
  const {
    style,
    resort,
    onResortClick,
    favorite,
  } = props;

  let liftsProgress;
  let trailsProgress;

  let liftData = '-';
  if (resort.liftCounts.open !== null && resort.liftCounts.total !== null) {
    liftData = `${resort.liftCounts.open} / ${resort.liftCounts.total}`;
    liftsProgress = Math.ceil(
      (resort.liftCounts.open / resort.liftCounts.total) * 100,
    );
  }

  let trailData = '-';
  if (resort.trailCounts.open !== null && resort.trailCounts.total !== null) {
    trailData = `${resort.trailCounts.open} / ${resort.trailCounts.total}`;
    trailsProgress = Math.ceil(
      (resort.trailCounts.open / resort.trailCounts.total) * 100,
    );
  }

  const ResortLogo = resortLogos[resort.shortName];

  return (
    <View style={style}>
      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={() => onResortClick(resort)}
      >
        <View style={styles.resortNavCard}>
          <ResortBookmarkButton
            resort={resort}
            favorite={favorite}
            onFavoritePress={props.mutateFavoriteResorts}
            onResortClick={onResortClick}
          />
          <View style={styles.resortLogoContainer}>
            <ResortLogo />
          </View>
          <View style={styles.resortInfoContainer}>
            <View style={styles.resortTitleContainer}>
              <LightText style={styles.resortName}>{resort.name}</LightText>
              <LightText style={styles.resortSubText}>{resort.location}</LightText>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarInfo}>
                <LightText style={styles.processBarDescription}>Open Lifts</LightText>
                <ProgressBar small progress={liftsProgress} />
              </View>
              <View style={styles.progressBarInfo}>
                <LightText style={styles.processBarDescription}>Open Trails</LightText>
                <ProgressBar small progress={trailsProgress} />
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    favorite: state.favorites.favoriteResorts.includes(ownProps.resort.shortName),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mutateFavoriteResorts: (resortShortName, favorite) => {
      dispatch(mutateFavoriteResorts(resortShortName, favorite));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResortNavCard);

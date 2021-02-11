import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { useGrowAvatarStyles } from '@mui-treasury/styles/avatar/grow';
import { useMusicInfoStyles } from '@mui-treasury/styles/info/music';

const useStyles = makeStyles(() => ({
  text: {
    display: 'flex',
    alignItems: 'center',
    '& > svg': {
      fontSize: 18,
      color: '#888',
      marginRight: 4,
    },
  },
}));

const MusicListItemDemo = React.memo(function MusicListItem() {
  const commonProps = {
    blur: '12px',
    radius: 16,
    size: 48,
    opacity: 0.6,
  };
  const src =
    'https://cdn1.vectorstock.com/i/1000x1000/85/40/music-abstract-poster-cover-1980s-style-background-vector-11958540.jpg';
  const avatarStyles = useGrowAvatarStyles({ src, ...commonProps });
  const src2 =
    'https://www.designformusic.com/wp-content/uploads/2016/04/orion-trailer-music-album-cover-design.jpg';
  const avatarStyles2 = useGrowAvatarStyles({ src: src2, ...commonProps });
  const styles = useStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Questrial' }]} />
      </NoSsr>
      <Column gap={2} width={'100%'}>
        <Row>
          <Item>
            <div className={avatarStyles.root}>
              <Avatar src={src} />
            </div>
          </Item>
          <Info useStyles={useMusicInfoStyles} minWidth={0}>
            <InfoTitle>Hitz Playlist</InfoTitle>
            <InfoSubtitle>by Fortunatus Inyang</InfoSubtitle>
            <InfoCaption className={styles.text}>
              <PlayCircleFilled /> 124 Songs...
            </InfoCaption>
          </Info>
          <Item position={'right'}>
            <IconButton size={'small'}>
              <Add style={{ color: '#2596be' }} />
            </IconButton>
          </Item>
        </Row>
        <Row mt={2}>
          <Item>
            <div className={avatarStyles2.root}>
              <Avatar src={src2} />
            </div>
          </Item>
          <Info useStyles={useMusicInfoStyles} minWidth={0}>
            <InfoTitle>Cools Playlist</InfoTitle>
            <InfoSubtitle>by Jake Miller</InfoSubtitle>
            <InfoCaption className={styles.text}>
              <PlayCircleFilled /> 100 Songs...
            </InfoCaption>
          </Info>
          <Item position={'right'}>
            <IconButton size={'small'}>
              <Add  style={{ color: '#2596be' }}/>
            </IconButton>
          </Item>
        </Row>
      </Column>
    </>
  );
});

export default MusicListItemDemo;
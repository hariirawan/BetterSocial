import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import IconPicture from '../assets/icons/profile.png';
import IconShare from '../assets/icons/share.png';
import IconComment from '../assets/icons/comments.png';
import IconBlock from '../assets/icons/block.png';
import IconVotingDown from '../assets/icons/voting-down.png';
import IconVotingUp from '../assets/icons/voting-up.png';
import Colors from '../helpers/Colors';

interface INewsFeed {
  user_name: string;
  post_date: string;
  content_text: string;
  content_img: string;
}

export default function NewsFeed(props: INewsFeed) {
  const contentText = props.content_text;

  const [numLines, setNumLines] = useState<any>(null);
  const [showMore, setShowMore] = useState(false);

  const handleTextLayout = (event: any) => {
    const {lines} = event.nativeEvent;
    setNumLines(lines.length);
  };

  return (
    <View>
      <View style={style.container}>
        <Image source={IconPicture} style={style.userPicture} />
        <View>
          <Text style={style.picName}>{props.user_name}</Text>
          <View>
            <Text style={style.date}>{props.post_date}</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={style.containerContentText}>
          <Text
            style={style.contentText}
            numberOfLines={showMore ? undefined : 5}
            onTextLayout={handleTextLayout}>
            {contentText}
          </Text>
          {!showMore && numLines > 5 && (
            <Text
              style={style.moreButton}
              onPress={() => setShowMore(!showMore)}>
              ...More
            </Text>
          )}
        </View>

        <Image
          style={style.contentMedia}
          source={{
            uri: props.content_img,
          }}
        />
      </View>
      <View style={style.postAction}>
        <View style={style.postActionLeft}>
          <Image source={IconShare} style={{height: 22, width: 22}} />
          <View style={style.postComment}>
            <Image
              source={IconComment}
              style={{height: 22, width: 22, objectFit: 'fill'}}
            />
            <Text style={{marginLeft: 8}}>31</Text>
          </View>
        </View>
        <View style={style.postActionRight}>
          <Image source={IconBlock} style={{height: 22, width: 22}} />
          <View style={style.postComment}>
            <Image
              source={IconVotingDown}
              style={{height: 22, width: 22, objectFit: 'fill'}}
            />
            <Text>376</Text>
          </View>
          <View style={style.postComment}>
            <Image
              source={IconVotingUp}
              style={{height: 22, width: 22, objectFit: 'fill'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 21,
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.border,
  },
  userPicture: {
    width: 48,
    height: 48,
    marginRight: 13,
  },
  picName: {
    fontWeight: '600',
    color: Colors.Black,
  },
  date: {
    fontWeight: '400',
    color: Colors.Gray,
  },
  containerContentText: {
    paddingHorizontal: 21,
    paddingVertical: 15,
  },
  contentText: {
    textAlign: 'justify',
  },
  contentMedia: {
    height: 483,
    objectFit: 'cover',
  },
  postAction: {
    height: 52,
    paddingHorizontal: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postActionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postComment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 23,
  },
  postActionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreButton: {
    color: 'blue',
    alignSelf: 'flex-end',
    marginTop: 10,
    position: 'absolute',
    bottom: 15,
    right: 21,
    backgroundColor: Colors.white,
  },
});

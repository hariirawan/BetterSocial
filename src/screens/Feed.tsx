import {View, Text, SafeAreaView, FlatList, StatusBar} from 'react-native';
import React from 'react';
import NewsFeed from '../components/NewsFeed';
import Colors from '../helpers/Colors';
import Separator from '../components/Separator';
import FloatingButton from '../components/FloatingButton';

export default function Feed() {
  const summary_img =
    'https://images.pexels.com/photos/18141660/pexels-photo-18141660/free-photo-of-rumah-wanita-tangga-hewan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  const content_text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci';
  return (
    <SafeAreaView style={{backgroundColor: Colors.white}}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <FlatList
        data={[1, 2, 3, 4]}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({item}) => {
          return (
            <NewsFeed
              user_name="Usup Suparma"
              post_date="Mar 24, 2023"
              content_img={summary_img}
              content_text={content_text}
            />
          );
        }}
      />

      <FloatingButton />
    </SafeAreaView>
  );
}
